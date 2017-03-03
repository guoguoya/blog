/**
 * 为什么我要封装这个呢，我只是突然想到了他的发展历史从XMLHttpRequest（ajax） 到 fetch 
 * 我进行封装的目的是 1.预设值 2.假设以后这块内容替换掉了我不用去各个文件里面修改，只要改这个文件就行了，
 * 其实也不过是个工具类罢了。为了装下逼，然后以后能有感悟。
 *
 * 问自己是否有new 的必要
*/

import fetch from 'whatwg-fetch';


const Fetch = (typeof window && window.fetch) || (typeof global && global.fetch) || fetch;


export default class FetchUntil  {
  
  static defaultHeaders = {
    
  };

  static extendHeaders(opts) {
    return Object.assign(defaultHeaders, opts);
  }

  constructor(props) {

  }
  
  static put(url) {
    let Headers = this.extendHeaders({
      ContentType: 'application/json'
    });
    
    let opts = {
      headers: Headers,
      method: 'PUT',
      body: json
    };

    return Fetch(url, opts);
  }

  static get(url, opts) {
    let Headers = this.extendHeaders({
      ContentType: 'application/json'
    });

    let opts = {
      headers: Headers,
      method: 'GET',
      body: json
    };

    return Fetch(url, opts);
  }

  static post(url, json) {
    let Headers = this.extendHeaders({
      ContentType: 'application/json'
    });

    let opts = {
      headers: Headers,
      method: 'POST',
      body: json
    };

    return Fetch(url, opts)
            .then(function(response){
            return response.json();
          });
  }

  static delete(url, json) {
    let Headers = this.extendHeaders({
      ContentType: 'application/json'
    });

    let opts = {
      headers: Headers,
      method: 'DELETE',
      body: json
    };

    return Fetch(url, json);
  }
}

export default new FetchUntil();



