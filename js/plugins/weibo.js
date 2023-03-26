"use strict";var weibojs={requestAPI:function(o,n,i){var l=5;!function s(){new Promise(function(t,e){var r=0,a=setTimeout(function(){0===r&&(r=2,a=null,e("请求超时"),0==l)&&i()},5e3);fetch(o).then(function(e){if(2!==r&&(clearTimeout(a),t(e),a=null,r=1),e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){l=0,n(e)}).catch(function(e){0<l?(--l,setTimeout(function(){s()},5e3)):i()})})}()},layoutDiv:function(s){var o=$(s.el)[0];$(o).append('<div class="loading-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" stroke-opacity=".3" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.3s" values="60;0"/></path><path stroke-dasharray="15" stroke-dashoffset="15" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></g></svg></div>'),weibojs.requestAPI(s.api,function(r){$(o).find(".loading-wrap").remove();var e=r.tweets||[],a=o.getAttribute("limit");e.forEach(function(e,t){a&&a<=t||(t='<div class="timenode" index="'+t+'">',t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t=(t+='<div class="header">')+'<div class="user-info"><img src="'+(r.user.avatar_hd||s.avatar)+'" onerror="javascript:this.src=\''+s.avatar+"';\">")+"<span>"+r.user.nick_name+"</span></div>")+"<p>"+e.created_at+"</p></div>")+'<div class="body"><a class="body" href="'+e.url+'" target="_blank" rel="external nofollow noopener noreferrer">')+e.content+'</a><div class="footer"><div class="flex left"></div><div class="flex right">')+'<div class="item reaction repost"><a class="item comments last" href="'+e.url+'#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">')+"<span>🔗 "+e.reposts_count+"</span></a>")+'</div><a class="item comments last" href="'+e.url+'#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">')+'<span><svg t="1666270368054" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2528" width="200" height="200"><path d="M952 64H72C32.3 64 0 96.3 0 136v508c0 39.7 32.3 72 72 72h261l128 128c14 14 32.5 21.1 50.9 21.1s36.9-7 50.9-21.1l128-128h261c39.7 0 72-32.3 72-72V136c0.2-39.7-32.1-72-71.8-72zM222 462c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72z m290-7.7c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z m290 8c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72c0 39.7-32.2 72-72 72z" p-id="2529"></path></svg> '+(e.comments_count||0)+"</span></a>")+'<div class="item reaction attitudes"><a class="item comments last" href="'+e.url+'#issuecomment-new" target="_blank" rel="external nofollow noopener noreferrer">')+"<span>👍 "+e.attitudes_count+"</span></a></div></div></div>",$(o).append(t))})},function(){$(o).find(".loading-wrap svg").remove(),$(o).find(".loading-wrap").append('<svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="60" stroke-dashoffset="60" d="M12 3L21 20H3L12 3Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="60;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10V14"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"/></path></g><circle cx="12" cy="17" r="1" fill="currentColor" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.4s" values="0;1"/></circle></svg>'),$(o).find(".loading-wrap").addClass("error")})}};$(function(){for(var e=document.getElementsByClassName("stellar-weibo-api"),t=0;t<e.length;t++){var r,a=e[t],s=a.getAttribute("api");null!=s&&((r=new Object).el=a,r.api=s,r.avatar="https://gcore.jsdelivr.net/gh/cdn-x/placeholder@1.0.4/avatar/round/3442075.svg",weibojs.layoutDiv(r))}});