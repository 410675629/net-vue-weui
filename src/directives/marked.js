
/**
 * 定时器
 */
export function Time() {
    return {
        bind(el,binding,vnode) {
            el.innerHTML = Marked(el.innerText);
        }
    };
}