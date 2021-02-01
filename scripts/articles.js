let articles_items = [
    {
        day: '1 день', 
        date: '30.12 Пятница',
        text: '14.00 Выезд со Львова, начало нашего автобусного горнолыжного тура в Австрийские Альпы, горнолыжный курорт Зельден ждет нас.',
        first_image: 'images/bus_1.png',
        second_image: 'images/bus_2.png'
    },
    {
        day: '2 день', 
        date: '1.01 воскресень',
        text: 'Завтрак в отеле.\n\nДля всех желающих будет организован трансфер на популярный горно лыжный курорт Зельден (Solden).',
        first_image: 'images/party_1.png',
        second_image: 'images/party_2.png'
    },
    {
        day: '3 день', 
        date: '30.12 Пятница',
        text: '14.00 Выезд со Львова, начало нашего автобусного горнолыжного тура в Австрийские Альпы, горнолыжный курорт Зельден ждет нас.',
        first_image: 'images/skiing_1.png',
        second_image: 'images/day_3_2.jpg'
    },
    {
        day: '4 день', 
        date: '2.01 понедельник',
        text: 'Завтрак в отеле. Трансфер на курорт Зельден (Solden). Вечером апре-ски в одном из популярных пабах курорта!',
        first_image: 'images/solden.png',
        second_image: 'images/day_4_2.jpg'
    },
    {
        day: '5 день', 
        date: '3.01 вторник',
        text: 'Завтрак в отеле. По желанию трансфер на курорт Зельден (Solden). Возвращение в отель.',
        first_image: 'images/day_5.png',
        second_image: 'images/day_5_2.jpg'
    }
    ,
    {
        day: '6 день', 
        date: '4.01 среда',
        text: 'Приезжаем, делимся эмоциями и планируем следующую поездку с нами.',
        first_image: 'images/day_6.png',
        second_image: 'images/day_6_2.jpg'
    }
];

function createArticles(items) {
    let container = document.createElement('div');
    container.setAttribute('class', 'articles_holder flex_col');
    let html = `<p class="day">${items.day}</p>
        <article class="flex_row article">
            <div class="article_info">
                <p>${items.date}</p>
                <p>${items.text}</p>
            </div>
            <div class="article_line"></div>
            <div class="img_container">
                <img src="${items.first_image}" class="days_image main_img">
                <img src="${items.second_image}" class="days_image ">
            </div>
        </article>`;

    let inner = document.querySelector('.articles_container');
    container.innerHTML = html;
    inner.appendChild(container);

    var imgFirst = document.querySelector(`[src="${items.first_image}"]`);
    var imgSecond = document.querySelector(`[src="${items.first_image}"]`);
    imgFirst.addEventListener('mouseover', secondImg);
    imgFirst.addEventListener('mouseout', firstImg);
    
    function secondImg(event) {
    var i = 0.9;
        let interval = setInterval(function() {
        if(i < 0.1) {
            imgFirst.style.opacity = '0';
            clearInterval(interval);
        } else {
        imgFirst.style.opacity = i;
        i-=0.1; }
    }, 30);
    }
    function firstImg(event) {
    var i = 0.1;
        let interval = setInterval(function() {
        if(i > 0.9) {
            imgFirst.style.opacity = '1';
            clearInterval(interval);
        } else {
        imgFirst.style.opacity = i;
        i+=0.1; }
    }, 30);
    }

}
articles_items.forEach( item => createArticles(item));

