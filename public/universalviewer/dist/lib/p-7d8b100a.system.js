System.register([],function(e){"use strict";return{execute:function(){var r=e("w",function(e,r,n){var u=new MutationObserver(function(e){n(t(e,r))});u.observe(e,{childList:true,subtree:true});return u});var t=function(e,r){var t;e.forEach(function(e){for(var u=0;u<e.addedNodes.length;u++){t=n(e.addedNodes[u],r)||t}});return t};var n=e("f",function(e,r){if(e.nodeType!==1){return undefined}var t=e.tagName===r.toUpperCase()?[e]:Array.from(e.querySelectorAll(r));return t.find(function(e){return e.checked===true})})}}});