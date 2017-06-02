/**
 * Created by zz on 2017-04-06.
 */

/**
 * 聚焦元素
 */
export function Focus() {
   
    return {

        inserted: function(el) {
            el.focus()
        }
    }
};

/**
 * 定时器
 */
export function Time() {
    
    let timeout = null;

    return {
        
        bind() {

        },

        inserted(el) {
            el.innerHTML = new Date();
            timeout = setInterval(() => {
                el.innerHTML = new Date();
            })
        },

        unbind() {
            clearInterval(timeout);
        }
    };
}