import Memo from '@/components/Memo';
const memo = {
    install:(Vue, options)=>{
        // Vue.component(Memo.name, Memo)
        // 1. add global method or property
        // Vue.myGlobalMethod = function () {
            
        // }
        // 2. add a global asset
        // Vue.directive('memo', Memo)
        // 3. inject some component options
        // Vue.mixin({
        //     mounted(){
        //         console.log('memo plugin mounted')
        //     },
        //     methods:{
        //         showmsg(){
        //             alert(1);
        //         }
        //     }
        // })
        // 4. add an instance method
        Vue.prototype.$memo = (options)=>{
            // return;
            
            let extendMemo = Vue.extend(Memo);
            const memo_toast_list = document.getElementsByClassName('memo-toast');
            console.dir(memo_toast_list);
            let tmp_top = 10;
            Array.from(memo_toast_list).forEach((value, key)=>{
                tmp_top = tmp_top+value.clientHeight;
            })
            let ticker = null;
            let memoInstance = new extendMemo({
                propsData:{
                    type:options.type||'info',
                    content:options.content||'default content',
                },
                data:{
                    wrapStyle:{
                        'position':"absolute",
                        "top":tmp_top+"px",
                        "right":'.5rem',
                    },
                    closeAction:()=>{
                        clearTimeout(ticker);
                        ticker = null;
                        document.body.removeChild(memoInstance);
                    }
                }
            }).$mount().$el;
            memoInstance.className = memoInstance.className+' memo-toast transit-all'
            // memoInstance.onclick=()=>{
            //     clearTimeout(ticker);
            //     ticker = null;
            //     document.body.removeChild(memoInstance);
            // }
            document.body.appendChild(memoInstance);
            
            if(options.duration !== 0){
                ticker = setTimeout(()=>{
                    document.body.removeChild(memoInstance);
                },options.duration||4000)
            }
            
        }
        ['success', 'info', 'danger', 'warning', 'primary'].forEach((value, key)=>{
            Vue.prototype.$memo[value] = (content, duration)=>{
                return Vue.prototype.$memo({
                    type:value,
                    content,
                    duration,
                })
            }
        })
    }
}

export default memo
