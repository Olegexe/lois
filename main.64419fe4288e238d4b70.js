(()=>{"use strict";var e,t={238:(e,t,n)=>{var i=n(96),s=n.n(i);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,u(i.key),i)}}function u(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}const a=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentQuestion=0,this.totalQuestions=t.length||0,this.questionList=t||{},this.currentSliderPos=0,this.answers=[];for(var n=0;n<this.totalQuestions;n++)this.answers.push({question:this.questionList[n].question,answer:void 0});this.rootElement=document.getElementById("interview-root")||void 0,this.renderQuestionsDOM(),this.currentQuestionElement=document.getElementById("interview-current-question")||void 0,this.totalQuestionElement=document.getElementById("interview-total-questions")||void 0,this.nextButtonElement=document.getElementById("interview-next-question")||void 0,this.prevButtonElement=document.getElementById("interview-prev-question")||void 0,this.questionListElements=document.getElementsByClassName("interview__question")||void 0,this.quizControlsElement=document.getElementsByClassName("interview__controls")[0]||void 0,this.quizProgressElements=document.getElementsByClassName("interview__progress-item")||void 0,this.quizAnswerElements=document.getElementsByClassName("interview__answer-radio")||void 0,this.nextButtonElement.addEventListener("click",this.nextQuestion.bind(this)),this.prevButtonElement.addEventListener("click",this.prevQuestion.bind(this));for(var i=0;i<this.quizAnswerElements.length;i++)this.quizAnswerElements[i].addEventListener("change",this.answerRadioHandler.bind(this));this.nextQuestion=this.nextQuestion.bind(this),this.prevButtonElement.style.width=this.nextButtonElement.offsetWidth},(t=[{key:"nextQuestion",value:function(){this.currentQuestion==this.totalQuestions-1?this.generateAnswers():(this.currentSliderPos+=document.getElementsByClassName("interview__question")[0].offsetWidth+64,document.getElementsByClassName("interview__question-list")[0].setAttribute("style","transform: translateX(-"+this.currentSliderPos+"px)"),this.nextButtonElement.disabled=!0,this.currentQuestion+=1,this.update())}},{key:"prevQuestion",value:function(){0!=this.currentQuestion&&(this.currentSliderPos-=document.getElementsByClassName("interview__question")[0].offsetWidth+64,document.getElementsByClassName("interview__question-list")[0].setAttribute("style","transform: translateX(-"+this.currentSliderPos+"px)"),this.currentQuestion-=1,this.update())}},{key:"update",value:function(){this.currentQuestionElement.innerHTML=this.currentQuestion+1;for(var e=0;e<this.totalQuestions;e++)e<=this.currentQuestion?this.quizProgressElements[e].className="interview__progress-item interview__progress-item_active":this.quizProgressElements[e].className="interview__progress-item";this.currentQuestion>=1?this.prevButtonElement.style.display="block":this.prevButtonElement.style.display="none",this.currentQuestion==this.totalQuestions-1?this.nextButtonElement.innerText="Завершить":this.nextButtonElement.innerText="Продолжить",null==this.answers[this.currentQuestion].answer?this.nextButtonElement.disabled=!0:this.nextButtonElement.disabled=!1}},{key:"renderQuestionsDOM",value:function(){for(var e='<div class="interview__outline-wrap"><div class="interview__wrapper"><div class="interview__progress-bar"><ul class="interview__progress-item-list">',t=0;t<this.totalQuestions;t++)e+='<li class="interview__progress-item '.concat(this.currentQuestion==t?"interview__progress-item_active":"",'"></li>');e+='</ul><div class="interview__progress-text"><span id="interview-current-question">'.concat(this.currentQuestion+1,'</span> Из <span id="interview-total-questions">').concat(this.totalQuestions,'</span></div></div><ul class="interview__question-list">');for(var n="",i=0;i<this.questionList.length;i++){n+='<li class="interview__question">\n                                <h3 class="interview__question-title h750">'.concat(this.questionList[i].question,'</h3>\n                                <ul class="interview__answer-list">');for(var s=0;s<this.questionList[i].answers.length;s++)n+='<li class="interview__answer-item"><input class="interview__answer-radio" type="radio" id="question-'.concat(i,"-").concat(s,'" name="question-').concat(i,'" value="').concat(s,'"><label class="interview__answer-label" for="question-').concat(i,"-").concat(s,'">\n                                            <div class="interview__answer-icon">\n                                                <span class="icon-clapperboard"></span>\n                                            </div>\n                                            <p class="interview__answer-text h250">').concat(this.questionList[i].answers[s],"</p>\n                                        </label></li>");n+="</ul></li>"}e+=n,e+='</ul><div class="interview__controls"><button class="button button_bordered interview__button" style="display: none" id="interview-prev-question">Назад</button><button class="button interview__button" id="interview-next-question" disabled>Продолжить</button></div></div>',this.rootElement&&(this.rootElement.innerHTML=e)}},{key:"answerRadioHandler",value:function(e){this.answers[this.currentQuestion].answer=this.questionList[this.currentQuestion].answers[e.currentTarget.value],this.update()}},{key:"generateAnswers",value:function(){for(var e=[],t=0;t<this.totalQuestions;t++){var n=document.querySelector('input[name="question-'.concat(t,'"]:checked'));n?e.push({question:this.questionList[t].question,answer:this.questionList[t].answers[n.value].replace(/<[^>]*>/g,"")}):e.push({question:this.questionList[t].question,answer:void 0})}return console.log(e),e}}])&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();n(876);var l=n(468);new(s())('a[href*="#"]',{speed:500,speedAsDuration:!0}),new a([{question:"Какая тематика съемки вам подходит?",answers:["Презентационный<br>ролик","Рекламный ролик<br>(промо)","Освещение<br>мероприятия","Корпоративный<br>ролик","Обучающее<br>видео"]},{question:"Какую цель преследует ваше видео?",answers:["Доходчиво рассказать о продукте или услуге целевой аудитории","Сформировать доверие,  партнеров и потенциальных клиентов","Повысить узнаваемость бренда, увеличить показатель присутствия в интернете","Сформировать спрос на новый продукт или услугу"]},{question:"Какой длительности должно быть видео?",answers:["От 10 до 30 секунд","От 30 до 60 секунд","От 1 до 2 минут","От 2 до 3 минут","От 2 до 3 минут","Снимаем кино"]},{question:"Вам потребуется написание сценария или текста?",answers:["Да, мне нужна помощь","Видел классную идею, хочу повторить","У меня свой сценарий и текст","Надо просто снимать по факту"]},{question:"Когда полностью должно быть готово видео?",answers:["Сроки горят, есть меньше недели","Неделя, две — меня устроит","Вписаться в рамки месяца, железно","Я не тороплюсь"]},{question:"Какая целевая аудитория вас интересует?",answers:["Молодёжь, нужно хайпануть","Мамочки и их детишки","Пожилые, бывалые люди","Серьёзные люди, предприниматели","Серьёзные люди, предприниматели","Видео должно подходить всем"]},{question:"Какой примерный бюджет вашего видео?",answers:["От 300 тысяч до 600 тысяч","От 600 тысяч до 1 миллиона","От 1 миллиона до 3 миллионов","От 3 миллионов до 5 миллионов","От 5 миллионов до 10 миллионов","Деньги есть, главное достичь желаемой цели"]},{question:"Какой показатель для вас наиболее важен?",answers:["Цена","Сроки","Ваш особый показатель","Качество","Конверсия","Главное, чтобы мама была довольна"]}]),l(document).ready((function(){l(".owl-carousel").owlCarousel({margin:16,items:4})}))}},n={};function i(e){var s=n[e];if(void 0!==s)return s.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=t,e=[],i.O=(t,n,s,r)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,s,r]=e[c],u=!0,a=0;a<n.length;a++)(!1&r||o>=r)&&Object.keys(i.O).every((e=>i.O[e](n[a])))?n.splice(a--,1):(u=!1,r<o&&(o=r));if(u){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,s,r]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={792:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var s,r,[o,u,a]=n,l=0;if(o.some((t=>0!==e[t]))){for(s in u)i.o(u,s)&&(i.m[s]=u[s]);if(a)var c=a(i)}for(t&&t(n);l<o.length;l++)r=o[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(c)},n=self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var s=i.O(void 0,[3],(()=>i(238)));s=i.O(s)})();
//# sourceMappingURL=main.64419fe4288e238d4b70.js.map