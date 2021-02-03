const articles_items = [
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

const program = document.querySelector('#program');
const program_button = document.querySelector('.reservation');


function createArticles(items, number) {
    const container = document.createElement('div');
    container.setAttribute('class', 'articles_holder flex_col');
    container.setAttribute('data-id', number);
    const html = `<p class="day">${items.day}</p>
        <article class="flex_row article">
            <div class="article_info">
                <p>${items.date}</p>
                <p>${items.text}</p>
            </div>
            <div class="article_line"></div>
            <div class="img_container">
                <img src="${items.first_image}" class="days_image main_img">
                
            </div>
        </article>`;


    const inner = document.querySelector('.articles_container');
    container.innerHTML = html;
    container.style.display = 'none';
    inner.appendChild(container);
    

    const imgFirst = document.querySelector(`[src="${items.first_image}"]`);
    const imgSecond = document.querySelector(`[src="${items.first_image}"]`);
    imgFirst.addEventListener('mouseover', secondImg);
    imgFirst.addEventListener('mouseout', firstImg);
    
    function secondImg(event) {
        let opacity = 0.9;
            let interval = setInterval(function() {
            if(opacity < 0.1) {
                imgFirst.style.opacity = '0';
                clearInterval(interval);
            } else {
            imgFirst.style.opacity = opacity;
            opacity-=0.1; }
        }, 30);
    }
    function firstImg(event) {
        let opacity = 0.1;
        let interval = setInterval(function() {
            if(opacity > 0.9) {
                imgFirst.style.opacity = '1';
                clearInterval(interval);
            } else {
                imgFirst.style.opacity = opacity;
                opacity+=0.1; 
            }
        }, 30);
    }

}
addArticle(articles_items[0], 0);



function addArticle(item, index) {
    const lastElem = (index === 0) ? document.querySelector(`[name = "program"]`): document.querySelector(`[data-id = "${index-1}"]`);
    let isHidden = true;
    
    window.addEventListener('scroll', displayArticle)
    function displayArticle(event) {
       let elemPos = lastElem.getBoundingClientRect();
       let scrollToElem = elemPos.y + elemPos.height + 200;
       var windowHeight = document.documentElement.clientHeight;
       if(windowHeight > scrollToElem) {
           if(!isHidden) return;
           isHidden = false;
           createArticles(item, index);
            let i = 0;
            let art = document.querySelector(`[data-id = "${index}"]`);
            art.style = "display: flex; height: 0px";

            const articleHeight = 422;
            
            let interval = setInterval(function() {
                if(i > articleHeight) {
                    clearInterval(interval);
                    art.style.height = '423px';
                    art.style = "display: flex";
                    
                    if(index < articles_items.length - 1) addArticle(articles_items[index+1], index+1);
                
                    let img_cont = art.querySelector('.img_container');
                    let img = document.createElement('img');
                    img.setAttribute('src', item.second_image);
                    img.classList.add('days_image');

                    main_img = art.querySelector('.main_img');
                    main_img.style.position = "absolute";

                    img_cont.appendChild(img);    
                    return;                    
                } 

                art.style.height = i+'px';
                i+=5;      
            }, 5);
       } 
    }
    
}

