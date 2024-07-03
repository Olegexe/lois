import SmoothScroll from "smooth-scroll";
import "./assets/scss/index.scss";
import Quiz from './quiz'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Plyr from 'plyr';

let player = new Plyr('#player', {});

let smoothScroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});

let questions = [
    {
        question: "Какая тематика съемки вам подходит?",
        answers: [
            "Презентационный<br>ролик",
            "Рекламный ролик<br>(промо)",
            "Освещение<br>мероприятия",
            "Корпоративный<br>ролик",
            "Обучающее<br>видео"
        ]
    },
    {
        question: "Какую цель преследует ваше видео?",
        answers: [
            "Доходчиво рассказать о продукте или услуге целевой аудитории",
            "Сформировать доверие,  партнеров и потенциальных клиентов",
            "Повысить узнаваемость бренда, увеличить показатель присутствия в интернете",
            "Сформировать спрос на новый продукт или услугу",
        ]
    },
    {
        question: "Какой длительности должно быть видео?",
        answers: [
            "От 10 до 30 секунд",
            "От 30 до 60 секунд",
            "От 1 до 2 минут",
            "От 2 до 3 минут",
            "От 2 до 3 минут",
            "Снимаем кино"
        ]
    },
    {
        question: "Вам потребуется написание сценария или текста?",
        answers: [
            "Да, мне нужна помощь",
            "Видел классную идею, хочу повторить",
            "У меня свой сценарий и текст",
            "Надо просто снимать по факту",
        ]
    },
    {
        question: "Когда полностью должно быть готово видео?",
        answers: [
            "Сроки горят, есть меньше недели",
            "Неделя, две — меня устроит",
            "Вписаться в рамки месяца, железно",
            "Я не тороплюсь",
        ]
    },
    {
        question: "Какая целевая аудитория вас интересует?",
        answers: [
            "Молодёжь, нужно хайпануть",
            "Мамочки и их детишки",
            "Пожилые, бывалые люди",
            "Серьёзные люди, предприниматели",
            "Серьёзные люди, предприниматели",
            "Видео должно подходить всем"
        ]
    },
    {
        question: "Какой примерный бюджет вашего видео?",
        answers: [
            "От 300 тысяч до 600 тысяч",
            "От 600 тысяч до 1 миллиона",
            "От 1 миллиона до 3 миллионов",
            "От 3 миллионов до 5 миллионов",
            "От 5 миллионов до 10 миллионов",
            "Деньги есть, главное достичь желаемой цели"
        ]
    },
    {
        question: "Какой показатель для вас наиболее важен?",
        answers: [
            "Цена",
            "Сроки",
            "Ваш особый показатель",
            "Качество",
            "Конверсия",
            "Главное, чтобы мама была довольна",
        ]
    },
]

let quiz = new Quiz(questions);

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin: 16,
        items: 4,
        nav: true
    });
  });

$('#modal').on('click', function(e) {
    if(e.currentTarget !== e.target) return;
    $('#modal').css({'display': 'none'});
    player.pause()
})

$('.gallery-item__link').on('click', function(e) {
    console.log(e.currentTarget)
    loadVideo(e.currentTarget.dataset.url)
})

function loadVideo(id) {
    player.source = {
        type: 'video',
        sources: [
          {
            src: id,
            provider: 'youtube',
          },
        ],
      };
    $('#modal').css({"display": "flex"});
}