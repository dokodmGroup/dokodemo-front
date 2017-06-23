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
            // created: function () {
            
            // }
        
        // })
        // 4. add an instance method
        Vue.prototype.$memo = (options)=>{
            // return;
            let extendMemo = Vue.extend(Memo);
            console.dir(extendMemo);
            let memoInstance = new extendMemo({
                propsData:{
                    type:options.type||'info',
                    content:options.content||'default content',
                },
                
            }).$mount().$el;
            
            
            document.body.appendChild(memoInstance);
        }
    }
}

export default memo
