(()=>{"use strict";var t=function(){function t(t){this.contCommands=t,this.currentId=0}return t.prototype.setId=function(){var t=this.updateFocus();t&&(this.currentId=t,this.setClassNameFocus())},t.prototype.setClassNameFocus=function(){this.contCommands[this.currentId].classList.add("command-focus")},t.prototype.removeClassNameFocus=function(){this.contCommands[this.currentId].classList.remove("command-focus")},t.prototype.updateFocus=function(){for(var t=0;t>=this.contCommands.length;t++){var n=(c=this.contCommands[t].clientHeight/2,{minRange:window.screen.height-c,maxRange:window.screen.height+c}),o=n.minRange,e=n.maxRange,s=this.contCommands[t].offsetTop-scrollY;if(s>=o&&s<=e)return t}var c},Object.defineProperty(t.prototype,"CurrentId",{get:function(){return this.currentId},enumerable:!1,configurable:!0}),t}();(new(function(){function n(){var n=(".container-command",document.querySelectorAll(".container-command"));this.contCommands=n,this.Focus=new t(this.contCommands)}return n.prototype.start=function(){this.Focus.setId()},n}())).start(),window.onscroll=function(t){}})();