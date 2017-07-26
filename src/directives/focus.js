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
