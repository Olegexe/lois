
import SmoothScroll from "smooth-scroll";
import "./assets/scss/index.scss";
import Quiz from './quiz'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Plyr from 'plyr';

const YT_API_KEY = 'AIzaSyAM5UyIhNoLeW5hDNY5qtIN6DYQX4xXMOQ';
const YT_VIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?id=%KGDfR88_K_8%&part=snippet&${YT_API_KEY}`;

fetch(YT_VIDEO_URL).then(response => response.json())
.then(data => {console.log(data)})

// let player = new Plyr('#player', {
//     quality: {
//         default: 1080, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240]
//     }
// });

let smoothScroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});

let questions = [
    {
        question: "Какая тематика съемки вам подходит?",
        multiply: false,
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
        multiply: false,
        answers: [
            "Доходчиво рассказать о продукте или услуге целевой аудитории",
            "Сформировать доверие,  партнеров и потенциальных клиентов",
            "Повысить узнаваемость бренда, увеличить показатель присутствия в интернете",
            "Сформировать спрос на новый продукт или услугу",
        ]
    },
    {
        question: "Какой длительности должно быть видео?",
        multiply: false,
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
        multiply: false,
        answers: [
            "Да, мне нужна помощь",
            "Видел классную идею, хочу повторить",
            "У меня свой сценарий и текст",
            "Надо просто снимать по факту",
        ]
    },
    {
        question: "Когда полностью должно быть готово видео?",
        multiply: false,
        answers: [
            "Сроки горят, есть меньше недели",
            "Неделя, две — меня устроит",
            "Вписаться в рамки месяца, железно",
            "Я не тороплюсь",
        ]
    },
    {
        question: "Какая целевая аудитория вас интересует?",
        multiply: false,
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
        multiply: false,
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
        multiply: true,
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

jQuery(document).ready(function() {
    updateSlider()
    jQuery(window).resize(updateSlider)
});

jQuery('#modal').on('click', function(e) {
    if(e.currentTarget !== e.target) return;
    jQuery('#modal').css({'display': 'none'});
    jQuery('body').removeClass('lock');
    jQuery('#modal__content').html('')
})

jQuery('.gallery-item__link').on('click', function(e) {
    e.preventDefault()
    jQuery('body').addClass('lock');
    loadVideo(e.currentTarget.dataset.url)
})

function loadVideo(id) {
    jQuery('#modal__content').html(`<iframe width="1280" height="720" src="https://www.youtube.com/embed/${id}?si=16Srgq25nFLY_387&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
    jQuery('#modal').css({"display": "flex"});
}

function updateSlider() {
    let slides = 4;
    if(window.screen.width <= 1279) slides = 3;
    else if(window.screen.width <= 767) slides = 1;

    jQuery('.owl-carousel').owlCarousel({
        margin: 16,
        items: slides,
        nav: true,
        autoWidth: true,
    });
}
