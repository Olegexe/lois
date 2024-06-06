class Quiz {
    constructor(questions) {
        this.currentQuestion = 0;
        this.totalQuestions = questions.length || 0;
        this.questionList = questions || {};
        this.currentSliderPos = 0;
        this.answers = [];

        for(let i = 0; i < this.totalQuestions; i++) this.answers.push({question: this.questionList[i].question, answer: undefined})
        
        this.rootElement = document.getElementById('interview-root') || undefined;

        this.renderQuestionsDOM()

        this.currentQuestionElement = document.getElementById('interview-current-question') || undefined;
        this.totalQuestionElement = document.getElementById('interview-total-questions') || undefined;
        this.nextButtonElement = document.getElementById('interview-next-question') || undefined;
        this.prevButtonElement = document.getElementById('interview-prev-question') || undefined;
        this.questionListElements = document.getElementsByClassName('interview__question') || undefined;
        this.quizControlsElement = document.getElementsByClassName('interview__controls')[0] || undefined;
        this.quizProgressElements = document.getElementsByClassName('interview__progress-item') || undefined;
        this.quizAnswerElements = document.getElementsByClassName('interview__answer-radio') || undefined;

        this.nextButtonElement.addEventListener('click', this.nextQuestion.bind(this))
        this.prevButtonElement.addEventListener('click', this.prevQuestion.bind(this))
        for(let i = 0; i < this.quizAnswerElements.length; i++) 
            this.quizAnswerElements[i].addEventListener('change', this.answerRadioHandler.bind(this))

        this.nextQuestion = this.nextQuestion.bind(this)
        
        this.prevButtonElement.style.width = this.nextButtonElement.offsetWidth;

        // this.waitForElementToDisplay('#interview-next-question', this.init, 100, 500);
    }

    nextQuestion() {
        if(this.currentQuestion == this.totalQuestions - 1) {
            this.generateAnswers();
        } else {
            this.currentSliderPos += ((document.getElementsByClassName('interview__question')[0].offsetWidth + 64));
            document.getElementsByClassName('interview__question-list')[0]
                    .setAttribute('style', 'transform: translateX(-'+ this.currentSliderPos + 'px)')
            
            this.nextButtonElement.disabled = true;

            this.currentQuestion += 1;
            this.update();
        }
    }

    prevQuestion() {
        if(this.currentQuestion == 0) return;
        this.currentSliderPos -= ((document.getElementsByClassName('interview__question')[0].offsetWidth + 64));
        document.getElementsByClassName('interview__question-list')[0]
                .setAttribute('style', 'transform: translateX(-'+ this.currentSliderPos + 'px)')

        this.currentQuestion -= 1;
        this.update();
    }

    update() {
        this.currentQuestionElement.innerHTML = this.currentQuestion + 1;

        for(let i = 0; i < this.totalQuestions; i++) {
            if(i <= this.currentQuestion)
                this.quizProgressElements[i].className = 'interview__progress-item interview__progress-item_active'
            else
                this.quizProgressElements[i].className = 'interview__progress-item'
        }

        this.currentQuestion >= 1 ? this.prevButtonElement.style.display = 'block' : this.prevButtonElement.style.display = 'none';
        this.currentQuestion == this.totalQuestions - 1 ? this.nextButtonElement.innerText = "Завершить" : this.nextButtonElement.innerText = "Продолжить";

        this.answers[this.currentQuestion].answer == undefined ? this.nextButtonElement.disabled = true : this.nextButtonElement.disabled = false;
    }

    renderQuestionsDOM() {
        let quizDOM = `<div class="interview__outline-wrap"><div class="interview__wrapper"><div class="interview__progress-bar"><ul class="interview__progress-item-list">`;
                                
        for(let i = 0; i < this.totalQuestions; i++) {
            quizDOM += `<li class="interview__progress-item ${this.currentQuestion == i ? 'interview__progress-item_active' : ''}"></li>`;
        }

        quizDOM += `</ul><div class="interview__progress-text"><span id="interview-current-question">${this.currentQuestion + 1}</span> Из <span id="interview-total-questions">${this.totalQuestions}</span></div></div><ul class="interview__question-list">`
    
        let questionDOM = ``
        for(let i = 0; i < this.questionList.length; i++) {
            questionDOM += `<li class="interview__question">
                                <h3 class="interview__question-title h750">${this.questionList[i].question}</h3>
                                <ul class="interview__answer-list">`
            for(let j = 0; j < this.questionList[i].answers.length; j++) {
                                        questionDOM += `<li class="interview__answer-item"><input class="interview__answer-radio" type="radio" id="question-${i}-${j}" name="question-${i}" value="${j}"><label class="interview__answer-label" for="question-${i}-${j}">
                                            <div class="interview__answer-icon">
                                                <span class="icon-clapperboard"></span>
                                            </div>
                                            <p class="interview__answer-text h250">${this.questionList[i].answers[j]}</p>
                                        </label></li>`
            }
            questionDOM += `</ul></li>`
        }
        quizDOM += questionDOM;
        quizDOM += `</ul><div class="interview__controls"><button class="button button_bordered interview__button" style="display: none" id="interview-prev-question">Назад</button><button class="button interview__button" id="interview-next-question" disabled>Продолжить</button></div></div>`;
        
        if(this.rootElement) this.rootElement.innerHTML = quizDOM;
    }

    answerRadioHandler(e) {
        this.answers[this.currentQuestion].answer = this.questionList[this.currentQuestion].answers[e.currentTarget.value];
        this.update();
    }

    generateAnswers() {
        let answers = [];
        for(let i = 0; i < this.totalQuestions; i++) {
            let answer = document.querySelector(`input[name="question-${i}"]:checked`);

            if(answer) {
                answers.push({question: this.questionList[i].question, answer: this.questionList[i].answers[answer.value].replace(/<[^>]*>/g, '')})
            } else {
                answers.push({question: this.questionList[i].question, answer: undefined})
            }
        }

        console.log(answers)
        return answers;
    }
}

export default Quiz;