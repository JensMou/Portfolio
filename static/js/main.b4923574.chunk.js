(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),o=n(5),s=n.n(o);n(11),n(12),n(13);var r=function(){return a.a.createElement("div",{className:"topBarLinks"})};n(19);var l=function(){var t=function(t,e,n){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return t.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,i=100-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},i)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),n=0;n<e.length;n++){var i=e[n].getAttribute("data-rotate"),a=e[n].getAttribute("data-period");i&&new t(e[n],JSON.parse(i),a)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(o)},a.a.createElement("div",null,a.a.createElement("h1",{className:"typewriter"},"I do",a.a.createElement("div",{class:"txt-rotate","data-period":"0","data-rotate":'["React.js", "User Experience", "IOT", "Agile Development", "NPM", "Tech", "Simplicity" ]'})))};var c=function(){return a.a.createElement("div",null,a.a.createElement(r,null),a.a.createElement(l,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(20);s.a.render(a.a.createElement(c,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,n){t.exports=n(21)}},[[6,1,2]]]);
//# sourceMappingURL=main.b4923574.chunk.js.map