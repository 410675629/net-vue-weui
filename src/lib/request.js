'use strict';

// 支持 timeout 方式
//usage: 1
/*_fetch(fetch(url), 2000)
.then(function(res) {
    console.log(res)
}, function(err) {
    console.log(err);
});*/

// 2、 let response = await _fetch(fetch(url, params), 30 * 1000); let body = await response.json();
const _fetch = function(fetch_promise, timeout) {
    var abort_fn = null;

    //这是一个可以被reject的promise
    var abort_promise = new Promise(function(resolve, reject) {
        abort_fn = function() {
            reject('abort promise');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    var abortable_promise = Promise.race([
        fetch_promise,
        abort_promise
    ]);

    setTimeout(function() {
        abort_fn();
    }, timeout);

    return abortable_promise;
}



 // 封装fetch 
const queryParams =function(params) {
    return Object.keys(params)
        .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
}



const fetch2 = function(url, options={}) {
    options = {
        // your default options
        credentials: 'same-origin',
        redirect: 'error',
        ...options,
    };

    if(options.queryParams) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + queryParams(options.queryParams);
        delete options.queryParams;
    }

    return fetch(url, options);
}

module.exports = {
    _fetch,
    fetch2
}


