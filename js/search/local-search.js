"use strict";var searchFunc=function(t,f,n,s){$.ajax({url:t,dataType:"json",success:function(t){var e,r=t,t=document.getElementById(n);t&&(e=document.getElementById(s),t.addEventListener("input",function(){var o=[],h=function(t){for(var n,e=[],r=0;r<t.length;r++)for(n=r+1;n<t.length+1;n++)e.push(t.slice(r,n).join(" "));return e}(this.value.trim().toLowerCase().split(" ")).sort(function(t,n){return n.split(" ").length-t.split(" ").length});if(e.innerHTML="",!(this.value.trim().length<=0)&&(r.forEach(function(t){var n,e,r,s,l,a,i,u,c;null!=(u=t.content)&&u.trim().length&&(n=0,f&&!t.path.includes(f)||(u=(null==(u=t.title)?void 0:u.trim())||"Untitled",e=u.toLowerCase(),c=t.content,r=c.toLowerCase(),t=t.path,a=l=s=-1,""!==c&&h.forEach(function(t){s=e.indexOf(t),l=r.indexOf(t),(0<=s||0<=l)&&(n+=1,l<0&&(l=0),a<0)&&(a=l)}),0<n&&((i={}).rank=n,i.str="<li><a href='"+t+"'><span class='search-result-title'>"+u+"</span>",0<=a&&(t=a+80,(t=0==(u=(u=a-20)<0?0:u)?100:t)>c.length&&(t=c.length),c=c.substring(u,t),u=new RegExp(h.join("|"),"gi"),c=c.replace(u,function(t){return'<span class="search-keyword">'+t+"</span>"}),i.str+='<p class="search-result-content">'+c+"...</p>"),i.str+="</a></li>",o.push(i))))}),o.length)){o.sort(function(t,n){return n.rank-t.rank});for(var t='<ul class="search-result-list">',n=0;n<o.length;n++)t+=o[n].str;e.innerHTML=t+="</ul>"}}))}})};