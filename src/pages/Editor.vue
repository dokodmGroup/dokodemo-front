<template>
	<section>
    <div class="cntr-p-sm text-right bg-white tool-bar" ref="toolBar">
      <button @click.stop.prevent="getPreview" class="btn btn-info">{{previewBtn}}</button>
      <button @click="getContext" class="btn btn-info">publish</button>
    </div>
    <div class="playground-wrap" ref="playGroundWrap">
      <div class="preview-wrap" v-if="preview" v-html="previewDom"></div>
      <div class="cntr-flex" v-show="!preview">
        <div class="col-3 ">
          <div class="cntr-p-m candidate-list">
            <draggable v-model="candidateArray" :options="clOption"  :clone="cloneCandidate" >
              <transition-group class="drag-wrap" name="list-group">
                <div class="item cursor-grab" v-html="item.dom" v-for="(item,key) in candidateArray" :key="key"></div>
              </transition-group>
            </draggable>
          </div>
        </div> 
        <div class="col-7 ">
          <div class="cntr-p-m expectation-list" >
            <h2 v-show="expectationArray.length==0" class="el-placeholder text-center full-width">please group your article</h2>
            <div ref="expectationWrap"> 
              <draggable v-model="expectationArray" :options="elOption" >
                <transition-group class="drag-wrap" name="list-group">
                  <div class="item item-expectation bg-white" v-for="(item, key) in expectationArray" :key="key">
                    <div class="handle-bar cntr-flex justify-between">
                      <div>
                        <button class="btn btn-success" @click.stop.prevent="editItem($event, item, key)">edit</button>
                      </div>
                      <div>
                        <button class="btn btn-danger" @click.stop.prevent="removeItem($event, item, key)">remove</button>
                        <button class="drag-handler btn btn-warning">handler</button>
                      </div>
                    </div>
                    <div class="edit-wrap cntr-flex flex-wrap" v-show="item.editMode">
                      <span v-if="item.type == 'title'">
                        <input @keyup.stop.prevent="updateTitle($event, item)" class="form-control" type="text" v-model="item.innerText" placeholder="标题"/>
                      </span>
                      <span v-if="item.type == 'content'">
                        <textarea rows='2' @keyup.stop.prevent="updateContent($event, item)" class="form-control" type="text" v-model="item.innerText" placeholder="内容"></textarea>
                      </span>
                      <span class="" v-if="item.type=='image'">
                        <div class="upload-file">
                          <div class="uf-placeholder">add image file</div>
                          <input class="uf-action" multiple type='file' accept="image/*"  @change="uploadImage($event, item)" />
                        </div>
                      </span>
                    </div>
                    <div v-html="item.dom"></div>
                  </div>
                </transition-group>
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>
<script>
import draggable from 'vuedraggable'
import * as gear from '@/assets/js/gear'
const kickOutVueData = /data-v-\w+=("\w*"||'\w*')/g
function parseHTML(_obj={}, _returnObj = false){
  let _parentEl = undefined;
  if(!_obj.type){
    console.warn(`can not found type`)
    return _parentEl
  }
  switch(_obj.type){
    case 'title':
      _parentEl = document.createElement(_obj.el?_obj.el:'h1')
      _parentEl.innerText = _obj.innerText?_obj.innerText:''
      _parentEl.style.cssText = _obj.style?_obj.style:'';
      break;
    case 'image':
      if(_obj.src){
        if(typeof(_obj.src) == 'object' && _obj.src.length>0){
          _parentEl = document.createElement('div')
          for(let i=0;i<_obj.src.length;i++){
            const tmp_img = document.createElement('img')
            tmp_img.src = _obj.src[i]
            tmp_img.style.cssText = _obj.style?_obj.style:'';
            _parentEl.appendChild(tmp_img)
          }
          // console.dir(_parentEl.outerHTML)
        }else if(typeof(_obj.src) == 'string' && _obj.src!==''){
          _parentEl = document.createElement('img')
          _parentEl.src = _obj.src
        }else{
          
        }
      }
      break;
    case 'content':
      _parentEl = document.createElement(_obj.el?_obj.el:'div')
      _parentEl.innerText = _obj.innerText?_obj.innerText:''
      _parentEl.style.cssText = _obj.style?_obj.style:'';
      break;
  }
  const output = _returnObj?_parentEl:_parentEl.outerHTML
  return output
}

export default {
  components:{
    draggable
  },
  data () {
    return {
      candidateArray:[
        {
          el:'h1',
          style:`border-bottom:1px solid #666;padding-bottom:.5rem;`,
          innerText:'title 1',
          childNodes:[],
          type:'title',
          editMode:false,
        },
        {
          el:'div',
          style:`background:#fff;font-size:1rem;padding:.8rem;`,
          innerText:'hello world',
          type:'content',
          childNodes:[],
          editMode:false,
        },
        {
          el:'img',
          style:`background:#ccc;max-width:100%;font-size:1rem;height:auto;`,
          src:[gear.phImg],
          type:'image',
          childNodes:[],
          editMode:false,
        },
      ],
      expectationArray:[],
      newitem:0,
      
      clOption:{
        group:{ 
          name: "article", 
          pull: 'clone',
          // pull:function(){
          //   console.log(arguments)
          //   return arguments[2].cloneNode(true)
          // },
          put: false,
          // revertClone:true
        },
        animation: 150,
        sort: false,
        ghostClass:'item-ghost',
        draggable:'.item',
      },
      elOption:{
        group:{ 
          name: "article", 
          pull: false,
          put: true,
          // revertClone:true
        },
        animation: 150,
        ghostClass:'item-ghost',
        handle:'.drag-handler',
      },
      preview:false,
      previewBtn:'open preview',
      previewDom:null,
    }
  },
  props:{
  },
  created(){
    this.candidateArray.forEach(value=>{
      value['dom']=parseHTML(value);
    })
  },
  mounted(){
    this.uiInit()
  },
  methods:{
    uploadImage($event, _item){
      // console.log($event.targetElement.files[0]);
      if($event.target.files.length>0){
        let tmp_array = []
        $event.target.files.forEach(value=>{
          gear.compressImage({
            file:$event.target.files[0],
            size:0.5
          }).then((res)=>{
            console.log(res);
            tmp_array.push(res)
            
          })
        })
        _item.src = tmp_array;
        _item.dom = parseHTML(_item);
      }
      
      // const file = $event.target.files[0]
      // const reader = new FileReader();
	
      // reader.onload = (e) => {
      // 	_item.src=reader.result
      //   _item.dom = parseHTML(_item);
      // };
      // reader.readAsDataURL(file);
       
      
    },
    updateTitle($event, _item){
      // console.log($event.target.value);
      // console.log(_item.innerText);
      // _item.innerText = $event.srcElement.value;
      _item.dom = parseHTML(_item);
      // _item.innerText = $event.value
    },
    updateContent($event, _item){

    },
    uiInit(){
      this.$refs.playGroundWrap.style.marginTop = this.$refs.toolBar.clientHeight+'px'
    },
    cloneCandidate(_obj){
      return JSON.parse(JSON.stringify(_obj))
    },
    editItem($event, _item, _key){
      // console.dir($event.target)
      _item.editMode = !_item.editMode
    }, 
    removeItem($event, _item, _key){
      this.expectationArray.splice(_key, 1)
    }, 
    getPreview($event, _open_window=false){
      if(_open_window){

      }else{
        // console.log(this.preview)
        if(this.preview){
          this.previewBtn = 'open preview'
          this.preview = false;
          return;
        }
        this.previewDom = this.getContext();
        if(this.previewDom){
          this.previewBtn = 'close preview'
          this.preview = true;
        }
      }
      
    },
    getContext(){
      if(this.expectationArray.length == 0){
        this.$memo.warning('please fill something')
        // this.$memo.warning('请填写账号')
        return null;
      }
      // const expectationWrap = this.$refs.expectationWrap;
      
      // let context = expectationWrap.innerHTML;
      
      // if(context){
      //   context = context.replace(kickOutVueData, '')
      // }
      // console.log(this.expectationArray)
      // console.dir(context);
      // console.log(typeof context);
      let tmp_html = '';
      tmp_html=this.expectationArray.map((value, key)=>{
        return value.dom
      })
      tmp_html = tmp_html.toString().replace(/\>,\</gi,'><');
      // console.log(tmp_html)
      return tmp_html;
      
    }, 
    checkMove(event){
      console.dir(event)
    },  
    loadData(_label=''){
      let tmp_array = []
      for(let i=0;i<1;i++){
        tmp_array.push({
          name:`item ${_label} ${i}`
        })
      }
      return tmp_array
    },
    addPeople(){
      this.newitem = this.newitem + 1;
      this.candidateArray.push({name:`item new append ${this.newitem}`})
    }, 
  }
}
</script>

<style scoped>
  .upload-file{
    position:relative;
    z-index:1;
  }
  .uf-placeholder{
    position:relative;
    z-index:1;
  }
  .uf-action{
    position:absolute;
    opacity:0;
    z-index:2;
    top:0;
    left:0;
    height:100%;
    width:100%;
  }

  .playground-wrap{
    overflow-x:hidden;
    overflow-y:auto;
    position:relative;
    z-index:10;
  }
  .tool-bar{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:20;
  }
  .drag-wrap{
    min-height:100px;
    display:block;
    position:relative;
    z-index:10;
  }
	.item{
    border:1px solid #ddd;
    border-radius:4px;
    padding:.2rem;
    
    overflow:hidden;
  }
  .item-ghost{
    opacity: .5;
  }
  .item-expectation{
    border:1px dashed #ddd;
  }
  .handle-bar{
    padding-bottom:.2rem;
  }
  .expectation-list{
    position:relative;
    z-index:10;
  }
  .el-placeholder{
    position:absolute;
    z-index:1;
  }
  .edit-wrap{
    padding-bottom:.2rem;
  }
  /* .list-group-enter-active, 
  .list-group-leave-active {
    transition: all 1s;
  }
  .list-group-enter, 
  .list-group-leave-to{
    opacity: 0;
    transform: translateY(30px);
  } */
</style>
