webpackJsonp([0],[function(e,t,n){"use strict";n(1);var r=n(3);(0,r.getUsers)().then(function(e){var t="";e.forEach(function(e){t+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>"});var n=document.getElementById("users");n.innerHTML=t;var o=document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var t=e.target;e.preventDefault(),(0,r.deleteUser)(t.attributes["data-id"].value);var n=t.parentNode.parentNode;n.parentNode.removeChild(n)}})})},function(e,t){},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return a("users")}function u(e){return c("users/"+e)}function a(e){return fetch(f+e).then(d,s)}function c(e){var t=new Request(f+e,{method:"DELETE"});return fetch(t).then(d,s)}function d(e){return e.json()}function s(e){console.log(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=o,t.deleteUser=u,n(4);var i=n(5),l=r(i),f=(0,l["default"])()},,function(e,t){"use strict";function n(){return r("useMockApi")?"http://localhost:3001/":"https://percentagecalc.herokuapp.com/"}function r(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^$#]*)&|#|$)"),r=n.exec(t);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n}]);
//# sourceMappingURL=main.07337405edb14c037a59.js.map