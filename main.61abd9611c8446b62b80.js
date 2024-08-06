(()=>{"use strict";var e,t={238:(e,t,n)=>{var s=n(96),i=n.n(s);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,a(s.key),s)}}function a(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var s=n.call(e,"string");if("object"!=r(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}n(468);const l=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentQuestion=0,this.totalQuestions=t.length||0,this.questionList=t||{},this.currentSliderPos=0,this.answers=[];for(var n=0;n<this.totalQuestions;n++)this.answers.push({question:this.questionList[n].question,answer:void 0});this.rootElement=document.getElementById("interview-root")||void 0,this.renderQuestionsDOM(),this.currentQuestionElement=document.getElementById("interview-current-question")||void 0,this.totalQuestionElement=document.getElementById("interview-total-questions")||void 0,this.nextButtonElement=document.getElementById("interview-next-question")||void 0,this.prevButtonElement=document.getElementById("interview-prev-question")||void 0,this.questionListElements=document.getElementsByClassName("interview__question")||void 0,this.quizControlsElement=document.getElementsByClassName("interview__controls")[0]||void 0,this.quizProgressElements=document.getElementsByClassName("interview__progress-item")||void 0,this.quizRadioElements=document.getElementsByClassName("interview__answer-radio")||void 0,this.quizCheckboxElements=document.getElementsByClassName("interview__answer-checkbox")||void 0,this.nextButtonElement.addEventListener("click",this.nextQuestion.bind(this)),this.prevButtonElement.addEventListener("click",this.prevQuestion.bind(this));for(var s=0;s<this.quizRadioElements.length;s++)this.quizRadioElements[s].addEventListener("change",this.answerClickHandler.bind(this));for(var i=0;i<this.quizCheckboxElements.length;i++)this.quizCheckboxElements[i].addEventListener("change",this.answerClickHandler.bind(this));this.nextQuestion=this.nextQuestion.bind(this),this.prevButtonElement.style.width=this.nextButtonElement.offsetWidth},t=[{key:"nextQuestion",value:function(){this.currentQuestion==this.totalQuestions-1?console.log(this.getAnswers()):(this.currentSliderPos+=document.getElementsByClassName("interview__question")[0].offsetWidth+64,document.getElementsByClassName("interview__question-list")[0].setAttribute("style","transform: translateX(-"+this.currentSliderPos+"px)"),this.nextButtonElement.disabled=!0,this.currentQuestion+=1,this.update())}},{key:"prevQuestion",value:function(){0!=this.currentQuestion&&(this.currentSliderPos-=document.getElementsByClassName("interview__question")[0].offsetWidth+64,document.getElementsByClassName("interview__question-list")[0].setAttribute("style","transform: translateX(-"+this.currentSliderPos+"px)"),this.currentQuestion-=1,this.update())}},{key:"update",value:function(){console.log(this.answers),this.currentQuestionElement.innerHTML=this.currentQuestion+1;for(var e=0;e<this.totalQuestions;e++)e<=this.currentQuestion?this.quizProgressElements[e].className="interview__progress-item interview__progress-item_active":this.quizProgressElements[e].className="interview__progress-item";this.currentQuestion>=1?this.prevButtonElement.style.display="block":this.prevButtonElement.style.display="none",this.currentQuestion==this.totalQuestions-1?this.nextButtonElement.innerText="Завершить":this.nextButtonElement.innerText="Продолжить",null==this.answers[this.currentQuestion].answer?this.nextButtonElement.disabled=!0:this.nextButtonElement.disabled=!1}},{key:"renderQuestionsDOM",value:function(){for(var e='<div class="interview__outline-wrap"><div class="interview__wrapper"><div class="interview__progress-bar"><ul class="interview__progress-item-list">',t=0;t<this.totalQuestions;t++)e+='<li class="interview__progress-item '.concat(this.currentQuestion==t?"interview__progress-item_active":"",'"></li>');e+='</ul><div class="interview__progress-text"><span id="interview-current-question">'.concat(this.currentQuestion+1,'</span> Из <span id="interview-total-questions">').concat(this.totalQuestions,'</span></div></div><ul class="interview__question-list">');for(var n="",s=0;s<this.questionList.length;s++){n+='<li class="interview__question">\n                                <h3 class="interview__question-title h750">'.concat(this.questionList[s].question,'</h3>\n                                <ul class="interview__answer-list">');for(var i=0;i<this.questionList[s].answers.length;i++)0==this.questionList[s].multiply?n+=0==s?'<li class="interview__answer-item"><input class="interview__answer-radio" type="radio" id="question-'.concat(s,"-").concat(i,'" name="question-').concat(s,'" value="').concat(i,'"><label class="interview__answer-label" for="question-').concat(s,"-").concat(i,'">\n                                <div class="interview__answer-icon">\n                                    <span class="icon-clapperboard"></span>\n                                </div>\n                                <p class="interview__answer-text h250">').concat(this.questionList[s].answers[i],"</p>\n                            </label></li>"):'<li class="interview__answer-item"><input class="interview__answer-radio" type="radio" id="question-'.concat(s,"-").concat(i,'" name="question-').concat(s,'" value="').concat(i,'"><label class="interview__answer-label" for="question-').concat(s,"-").concat(i,'">\n                                <p class="interview__answer-text p200">').concat(this.questionList[s].answers[i],"</p>\n                            </label></li>"):n+=0==s?'<li class="interview__answer-item"><input class="interview__answer-checkbox" type="checkbox" id="question-'.concat(s,"-").concat(i,'" name="question-').concat(s,'" value="').concat(i,'"><label class="interview__answer-label" for="question-').concat(s,"-").concat(i,'">\n                                <div class="interview__answer-icon">\n                                    <span class="icon-clapperboard"></span>\n                                </div>\n                                <p class="interview__answer-text h250">').concat(this.questionList[s].answers[i],"</p>\n                            </label></li>"):'<li class="interview__answer-item"><input class="interview__answer-checkbox" type="checkbox" id="question-'.concat(s,"-").concat(i,'" name="question-').concat(s,'" value="').concat(i,'"><label class="interview__answer-label" for="question-').concat(s,"-").concat(i,'">\n                                <p class="interview__answer-text p200">').concat(this.questionList[s].answers[i],"</p>\n                            </label></li>");n+="</ul></li>"}e+=n,e+='</ul><div class="interview__controls"><button class="button button_bordered interview__button" style="display: none" id="interview-prev-question">Назад</button><button class="button interview__button" id="interview-next-question" disabled>Продолжить</button></div></div>',this.rootElement&&(this.rootElement.innerHTML=e)}},{key:"answerClickHandler",value:function(e){if("checkbox"==e.currentTarget.type)if(Array.isArray(this.answers[this.currentQuestion].answer)){var t=this.answers[this.currentQuestion].answer.indexOf(this.questionList[this.currentQuestion].answers[e.currentTarget.value]);-1!=t?(this.answers[this.currentQuestion].answer.splice(t,1),0==this.answers[this.currentQuestion].answer.length&&(this.answers[this.currentQuestion].answer=void 0)):this.answers[this.currentQuestion].answer.push(this.questionList[this.currentQuestion].answers[e.currentTarget.value])}else this.answers[this.currentQuestion].answer=Array(),this.answers[this.currentQuestion].answer.push(this.questionList[this.currentQuestion].answers[e.currentTarget.value]);else this.answers[this.currentQuestion].answer=this.questionList[this.currentQuestion].answers[e.currentTarget.value];this.update()}},{key:"getAnswers",value:function(){return this.answers}},{key:"generateAnswers",value:function(){for(var e=[],t=0;t<this.totalQuestions;t++){var n=document.querySelector('input[name="question-'.concat(t,'"]:checked'));n?e&&e.push({question:this.questionList[t].question,answer:this.questionList[t].answers[n.value].replace(/<[^>]*>/g,"")}):e.push({question:this.questionList[t].question,answer:void 0})}return console.log(e),e}}],t&&o(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();n(876),n(106);var u=n(468);function c(){var e=4;window.screen.width<=1279&&(e=3),window.screen.width<=767&&(e=1),u(".owl-carousel").owlCarousel({margin:16,items:e,nav:!0,autoWidth:!0})}new(i())('a[href*="#"]',{speed:500,speedAsDuration:!0}),new l([{question:"Какая тематика съемки вам подходит?",multiply:!1,answers:["Презентационный<br>ролик","Рекламный ролик<br>(промо)","Освещение<br>мероприятия","Корпоративный<br>ролик","Обучающее<br>видео"]},{question:"Какую цель преследует ваше видео?",multiply:!1,answers:["Доходчиво рассказать о продукте или услуге целевой аудитории","Сформировать доверие,  партнеров и потенциальных клиентов","Повысить узнаваемость бренда, увеличить показатель присутствия в интернете","Сформировать спрос на новый продукт или услугу"]},{question:"Какой длительности должно быть видео?",multiply:!1,answers:["От 10 до 30 секунд","От 30 до 60 секунд","От 1 до 2 минут","От 2 до 3 минут","От 2 до 3 минут","Снимаем кино"]},{question:"Вам потребуется написание сценария или текста?",multiply:!1,answers:["Да, мне нужна помощь","Видел классную идею, хочу повторить","У меня свой сценарий и текст","Надо просто снимать по факту"]},{question:"Когда полностью должно быть готово видео?",multiply:!1,answers:["Сроки горят, есть меньше недели","Неделя, две — меня устроит","Вписаться в рамки месяца, железно","Я не тороплюсь"]},{question:"Какая целевая аудитория вас интересует?",multiply:!1,answers:["Молодёжь, нужно хайпануть","Мамочки и их детишки","Пожилые, бывалые люди","Серьёзные люди, предприниматели","Серьёзные люди, предприниматели","Видео должно подходить всем"]},{question:"Какой примерный бюджет вашего видео?",multiply:!1,answers:["От 300 тысяч до 600 тысяч","От 600 тысяч до 1 миллиона","От 1 миллиона до 3 миллионов","От 3 миллионов до 5 миллионов","От 5 миллионов до 10 миллионов","Деньги есть, главное достичь желаемой цели"]},{question:"Какой показатель для вас наиболее важен?",multiply:!0,answers:["Цена","Сроки","Ваш особый показатель","Качество","Конверсия","Главное, чтобы мама была довольна"]}]),u(document).ready((function(){c(),u(window).resize(c)})),u(".modal__close-btn-inner").on("click",(function(e){u("#modal").css({display:"none"}),u("body").removeClass("lock"),u("#modal__content").html("")})),u(".gallery-item__link").on("click",(function(e){e.preventDefault();var t=!1;null!=e.currentTarget.dataset.vertical&&(t=!0),u("body").addClass("lock"),function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.split("-")[1].split("_")[0],s=e.split("-")[1].split("_")[1];t?u("#modal__content").html('<div class="modal__video_vertical"><iframe src="https://vk.com/video_ext.php?oid=-'.concat(n,"}&id=").concat(s,'&hd=2&autoplay=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe></div>')):u("#modal__content").html('<div class="modal__video"><iframe src="https://vk.com/video_ext.php?oid=-'.concat(n,"&id=").concat(s,'&hd=2&autoplay=1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe></div>')),u("#modal").css({display:"flex"})}(e.currentTarget.dataset.url,t)})),u("#modal-contact-btn").on("click",(function(e){e.preventDefault(),u("body").addClass("lock"),u("#modal__content").html('<div class="modal__contact-form"><div class="modal__form-wrapper"><div class="modal__form-content"><div class="modal__form-text"><h3 class="modal__text-title h750">Если у вас остались вопросы, свяжитесь с нами.</h3><div class="modal__text-description p300">Введите имя и номер телефона, чтобы мы могли связаться и обсудить ваш проект.</div></div><div class="modal__form-wrap"><form class="modal__form"><input class="contact__input" type="text" placeholder="Ваше имя"><input class="contact__input" type="phone" placeholder="Ваш номер телефона"><input class="button" type="submit" value="Отправить"></form><p class="modal__form-privacy-policy c200">Нажимая на кнопку «Отправить», вы подтверждаете свое согласие на обработку персональных данных и соглашаетесь с <a href="#">политикой конфиденциальности</a></p></div></div></div></div>'),u("#modal").css({display:"flex"})}))}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=t,e=[],s.O=(t,n,i,r)=>{if(!n){var o=1/0;for(c=0;c<e.length;c++){for(var[n,i,r]=e[c],a=!0,l=0;l<n.length;l++)(!1&r||o>=r)&&Object.keys(s.O).every((e=>s.O[e](n[l])))?n.splice(l--,1):(a=!1,r<o&&(o=r));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={792:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[o,a,l]=n,u=0;if(o.some((t=>0!==e[t]))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(l)var c=l(s)}for(t&&t(n);u<o.length;u++)r=o[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},n=self.webpackChunkwebpacktemplate=self.webpackChunkwebpacktemplate||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=s.O(void 0,[704],(()=>s(238)));i=s.O(i)})();
//# sourceMappingURL=main.61abd9611c8446b62b80.js.map