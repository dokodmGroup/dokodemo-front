import resangel from '@/assets/js/resangel';
const resangel_handler = new resangel;
const Resangel = {
    install:(Vue, options)=>{
        // 1. add global method or property
        Vue.resangleConfig = (options)=>{
            resangel_handler.config(options);
        }
        // 2. add a global asset
        // Vue.directive('memo', Memo)
        // 3. inject some component options
        // Vue.mixin({
        //     created: function () {
            
        //     }
        
        // })
        // 4. add an instance method
        Vue.prototype.$rahttp = {
            get:(url, options)=>{
                return resangel_handler.get(url, options)
            },
            post:(url, options)=>{
                return resangel_handler.post(url, options)
            },
            put:(url, options)=>{
                return resangel_handler.put(url, options)
            },
            delete:(url, options)=>{
                return resangel_handler.delete(url, options)
            },
        }
    }
}

export default Resangel
