/*! For license information please see main.336649da6eabb36ddcb1.js.LICENSE.txt */
(()=>{var t={96:function(t,e,n){var i,s;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),i=this;do{for(e=n.length;0<=--e&&n.item(e)!==i;);}while(e<0&&(i=i.parentElement));return i}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),s=Math.max(0,16-(i-t)),o=window.setTimeout((function(){e(i+s)}),s);return t=i+s,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),s=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,i=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},i=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),i=n.length,s=-1,o="",r=n.charCodeAt(0);++s<i;){if(0===(e=n.charCodeAt(s)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=e&&e<=31||127==e||0===s&&48<=e&&e<=57||1===s&&48<=e&&e<=57&&45===r?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(s):"\\"+n.charAt(s)}return"#"+o},s=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},o=function(e,n,i){0===e&&document.body.focus(),i||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))},r=function(e,n,i,s){if(n.emitEvents&&"function"==typeof t.CustomEvent){var o=new CustomEvent(e,{bubbles:!0,detail:{anchor:i,toggle:s}});document.dispatchEvent(o)}};return function(a,u){var l,c,d,m,h={cancelScroll:function(t){cancelAnimationFrame(m),m=null,t||r("scrollCancel",l)},animateScroll:function(i,a,u){h.cancelScroll();var c=n(l||e,u||{}),f="[object Number]"===Object.prototype.toString.call(i),v=f||!i.tagName?null:i;if(f||v){var p=t.pageYOffset;c.header&&!d&&(d=document.querySelector(c.header));var w,y,g,b,E,q,_,S,Q=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(d),x=f?i:function(e,n,i,o){var r=0;if(e.offsetParent)for(;r+=e.offsetTop,e=e.offsetParent;);return r=Math.max(r-n-i,0),o&&(r=Math.min(r,s()-t.innerHeight)),r}(v,Q,parseInt("function"==typeof c.offset?c.offset(i,a):c.offset,10),c.clip),A=x-p,C=s(),L=0,O=(w=A,g=(y=c).speedAsDuration?y.speed:Math.abs(w/1e3*y.speed),y.durationMax&&g>y.durationMax?y.durationMax:y.durationMin&&g<y.durationMin?y.durationMin:parseInt(g,10));0===t.pageYOffset&&t.scrollTo(0,0),_=i,S=c,f||history.pushState&&S.updateURL&&history.pushState({smoothScroll:JSON.stringify(S),anchor:_.id},document.title,_===document.documentElement?"#top":"#"+_.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?o(i,Math.floor(x),!1):(r("scrollStart",c,i,a),h.cancelScroll(!0),t.requestAnimationFrame((function e(n){var s,u,l;b||(b=n),L+=n-b,q=p+A*(u=E=1<(E=0===O?0:L/O)?1:E,"easeInQuad"===(s=c).easing&&(l=u*u),"easeOutQuad"===s.easing&&(l=u*(2-u)),"easeInOutQuad"===s.easing&&(l=u<.5?2*u*u:(4-2*u)*u-1),"easeInCubic"===s.easing&&(l=u*u*u),"easeOutCubic"===s.easing&&(l=--u*u*u+1),"easeInOutCubic"===s.easing&&(l=u<.5?4*u*u*u:(u-1)*(2*u-2)*(2*u-2)+1),"easeInQuart"===s.easing&&(l=u*u*u*u),"easeOutQuart"===s.easing&&(l=1- --u*u*u*u),"easeInOutQuart"===s.easing&&(l=u<.5?8*u*u*u*u:1-8*--u*u*u*u),"easeInQuint"===s.easing&&(l=u*u*u*u*u),"easeOutQuint"===s.easing&&(l=1+--u*u*u*u*u),"easeInOutQuint"===s.easing&&(l=u<.5?16*u*u*u*u*u:1+16*--u*u*u*u*u),s.customEasing&&(l=s.customEasing(u)),l||u),t.scrollTo(0,Math.floor(q)),function(e,n){var s=t.pageYOffset;if(e==n||s==n||(p<n&&t.innerHeight+s)>=C)return h.cancelScroll(!0),o(i,n,f),r("scrollStop",c,i,a),!(m=b=null)}(q,x)||(m=t.requestAnimationFrame(e),b=n)})))}}},f=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(c=e.target.closest(a))&&"a"===c.tagName.toLowerCase()&&!e.target.closest(l.ignore)&&c.hostname===t.location.hostname&&c.pathname===t.location.pathname&&/#/.test(c.href)){var n,s;try{n=i(decodeURIComponent(c.hash))}catch(e){n=i(c.hash)}if("#"===n){if(!l.topOnEmptyHash)return;s=document.documentElement}else s=document.querySelector(n);(s=s||"#top"!==n?s:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(l),h.animateScroll(s,c))}},v=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(i(history.state.anchor)))||h.animateScroll(e,null,{updateURL:!1})}};return h.destroy=function(){l&&(document.removeEventListener("click",f,!1),t.removeEventListener("popstate",v,!1),h.cancelScroll(),m=d=c=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),l=n(e,u||{}),d=l.header?document.querySelector(l.header):null,document.addEventListener("click",f,!1),l.updateURL&&l.popstate&&t.addEventListener("popstate",v,!1)}(),h}}(s)}.apply(e,[]),void 0===i||(t.exports=i)}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(96),e=n.n(t);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function o(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var s=n.call(t,"string");if("object"!=i(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:e+""}const r=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentQuestion=0,this.totalQuestions=e.length||0,this.questionList=e||{},this.currentSliderPos=0,this.answers=[];for(var n=0;n<this.totalQuestions;n++)this.answers.push({question:this.questionList[n].question,answer:void 0});this.rootElement=document.getElementById("interview-root")||void 0,this.renderQuestionsDOM(),this.currentQuestionElement=document.getElementById("interview-current-question")||void 0,this.totalQuestionElement=document.getElementById("interview-total-questions")||void 0,this.nextButtonElement=document.getElementById("interview-next-question")||void 0,this.prevButtonElement=document.getElementById("interview-prev-question")||void 0,this.questionListElements=document.getElementsByClassName("interview__question")||void 0,this.quizControlsElement=document.getElementsByClassName("interview__controls")[0]||void 0,this.quizProgressElements=document.getElementsByClassName("interview__progress-item")||void 0,this.quizAnswerElements=document.getElementsByClassName("interview__answer-radio")||void 0,this.nextButtonElement.addEventListener("click",this.nextQuestion.bind(this)),this.prevButtonElement.addEventListener("click",this.prevQuestion.bind(this));for(var i=0;i<this.quizAnswerElements.length;i++)this.quizAnswerElements[i].addEventListener("change",this.answerRadioHandler.bind(this));this.nextQuestion=this.nextQuestion.bind(this),this.prevButtonElement.style.width=this.nextButtonElement.offsetWidth},(e=[{key:"nextQuestion",value:function(){this.currentQuestion==this.totalQuestions-1?this.generateAnswers():(this.currentSliderPos+=document.getElementsByClassName("interview__question")[0].offsetWidth+64,document.getElementsByClassName("interview__question-list")[0].setAttribute("style","transform: translateX(-"+this.currentSliderPos+"px)"),this.nextButtonElement.disabled=!0,this.currentQuestion+=1,this.update())}},{key:"prevQuestion",value:function(){0!=this.currentQuestion&&(this.currentSliderPos-=document.getElementsByClassName("interview__question")[0].offsetWidth+64,document.getElementsByClassName("interview__question-list")[0].setAttribute("style","transform: translateX(-"+this.currentSliderPos+"px)"),this.currentQuestion-=1,this.update())}},{key:"update",value:function(){this.currentQuestionElement.innerHTML=this.currentQuestion+1;for(var t=0;t<this.totalQuestions;t++)t<=this.currentQuestion?this.quizProgressElements[t].className="interview__progress-item interview__progress-item_active":this.quizProgressElements[t].className="interview__progress-item";this.currentQuestion>=1?this.prevButtonElement.style.display="block":this.prevButtonElement.style.display="none",this.currentQuestion==this.totalQuestions-1?this.nextButtonElement.innerText="Завершить":this.nextButtonElement.innerText="Продолжить",null==this.answers[this.currentQuestion].answer?this.nextButtonElement.disabled=!0:this.nextButtonElement.disabled=!1}},{key:"renderQuestionsDOM",value:function(){for(var t='<div class="interview__wrapper"><div class="interview__progress-bar"><ul class="interview__progress-item-list">',e=0;e<this.totalQuestions;e++)t+='<li class="interview__progress-item '.concat(this.currentQuestion==e?"interview__progress-item_active":"",'"></li>');t+='</ul><div class="interview__progress-text"><span id="interview-current-question">'.concat(this.currentQuestion+1,'</span> Из <span id="interview-total-questions">').concat(this.totalQuestions,'</span></div></div><ul class="interview__question-list">');for(var n="",i=0;i<this.questionList.length;i++){n+='<li class="interview__question">\n                                <h3 class="interview__question-title">'.concat(this.questionList[i].question,'</h3>\n                                <ul class="interview__answer-list">');for(var s=0;s<this.questionList[i].answers.length;s++)n+='<li class="interview__answer-item"><input class="interview__answer-radio" type="radio" id="question-'.concat(i,"-").concat(s,'" name="question-').concat(i,'" value="').concat(s,'"><label class="interview__answer-label" for="question-').concat(i,"-").concat(s,'">\n                                            <div class="interview__answer-icon">\n                                                <span class="icon-clapperboard"></span>\n                                            </div>\n                                            <p class="interview__answer-text">').concat(this.questionList[i].answers[s],"</p>\n                                        </label></li>");n+="</ul></li>"}t+=n,t+='</ul><div class="interview__controls"><button class="button button_bordered interview__button" style="display: none" id="interview-prev-question">Назад</button><button class="button interview__button" id="interview-next-question" disabled>Продолжить</button></div>',this.rootElement&&(this.rootElement.innerHTML=t)}},{key:"answerRadioHandler",value:function(t){this.answers[this.currentQuestion].answer=this.questionList[this.currentQuestion].answers[t.currentTarget.value],this.update()}},{key:"generateAnswers",value:function(){for(var t=[],e=0;e<this.totalQuestions;e++){var n=document.querySelector('input[name="question-'.concat(e,'"]:checked'));n?t.push({question:this.questionList[e].question,answer:this.questionList[e].answers[n.value].replace(/<[^>]*>/g,"")}):t.push({question:this.questionList[e].question,answer:void 0})}return console.log(t),t}}])&&s(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();new(e())('a[href*="#"]',{speed:500,speedAsDuration:!0}),new r([{question:"Какая тематика съемки вам подходит?",answers:["Презентационный<br>ролик","Рекламный ролик<br>(промо)","Освещение<br>мероприятия","Корпоративный<br>ролик","Обучающее<br>видео"]},{question:"Какую цель преследует ваше видео?",answers:["Доходчиво рассказать о продукте или услуге целевой аудитории","Сформировать доверие,  партнеров и потенциальных клиентов","Повысить узнаваемость бренда, увеличить показатель присутствия в интернете","Сформировать спрос на новый продукт или услугу"]},{question:"Какой длительности должно быть видео?",answers:["От 10 до 30 секунд","От 30 до 60 секунд","От 1 до 2 минут","От 2 до 3 минут","От 2 до 3 минут","Снимаем кино"]},{question:"Вам потребуется написание сценария или текста?",answers:["Да, мне нужна помощь","Видел классную идею, хочу повторить","У меня свой сценарий и текст","Надо просто снимать по факту"]},{question:"Когда полностью должно быть готово видео?",answers:["Сроки горят, есть меньше недели","Неделя, две — меня устроит","Вписаться в рамки месяца, железно","Я не тороплюсь"]},{question:"Какая целевая аудитория вас интересует?",answers:["Молодёжь, нужно хайпануть","Мамочки и их детишки","Пожилые, бывалые люди","Серьёзные люди, предприниматели","Серьёзные люди, предприниматели","Видео должно подходить всем"]},{question:"Какой примерный бюджет вашего видео?",answers:["От 300 тысяч до 600 тысяч","От 600 тысяч до 1 миллиона","От 1 миллиона до 3 миллионов","От 3 миллионов до 5 миллионов","От 5 миллионов до 10 миллионов","Деньги есть, главное достичь желаемой цели"]},{question:"Какой показатель для вас наиболее важен?",answers:["Цена","Сроки","Ваш особый показатель","Качество","Конверсия","Главное, чтобы мама была довольна"]}])})()})();
//# sourceMappingURL=main.336649da6eabb36ddcb1.js.map