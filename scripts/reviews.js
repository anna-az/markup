const reviewsItems = [
    {
        name: 'Игорь Сверлов', 
        city: 'г. Киев', 
        img: 'images/review_1.png', 
        text: 'Для меня это первое катание на лыжах и первый горнолыжный курорт. Мне понравилось, нам повезло с погодой. Для начинающих довольно много мест для катания. Сам городок милый, оживленный, есть куда пойти, отель "на уровне", с бассейном,  живописные окрестности.',
        date: '02.02.16'
    },
    {
        name: 'Марина Весельчакова', 
        city: 'г. Полтава', 
        img: 'images/review_2.png', 
        text: 'Красивый городок. Здесь мы ощутили в полной мере местный колорит- дома, отели в национальном стиле, рестораны. Множество магазинов с товарами местного производства. Цены везде приятно радуют. Приветливо улыбающиеся люди, причем искренне- повсюду. Ну и конечно горы!',
        date: '02.12.16'
    },
    {
        name: 'Владимир Мельник', 
        city: 'г. Львов', 
        img: 'images/review_3.png', 
        text: 'Недорого, на хорошем уровне для новичков. Группы небольшие, можно на русском или английском. Инструкторы- профессионалы. В горах много снега, много трасс. Подъемники современные.',
        date: '28.01.16'
    },
    {
        name: 'Светлова Татьяна', 
        city: 'г. Харьков', 
        img: 'images/review_4.png', 
        text: 'Очень довольна. Курорт современный, подъемники отличные, очереди только на первом (кабинков лифт), когда поднимаешься в зону катания очередей на подъемниках не бывает. Трассы на любой вкус и цвет. В снежную зиму, отличный фрирайд!!!',
        date: '28.01.16'
    }
];


reviewsItems.forEach( item => createReviews(item));
createSlider();

const arr_review = document.querySelector('#add_review');
arr_review.addEventListener('click', openModalReview);

function createReviews(items) {

  let container = document.createElement('div');
  container.setAttribute('class', 'slide');
  const html = `<div class="review  flex_col">
                  <div class="flex_row">
                      <img src="${items.img}" alt="${items.name}">
                      <p class="review_name">${items.name}<br>${items.city}</p>
                  </div>
                  <div class="flex_col review_text_container">
                    <p class="review_text">${items.text}</p>
                    <p class="review_data">${items.date}</p>
                  </div>
              </div>`;

  const inner = document.querySelector('.slider-track');
  container.innerHTML = html;
  inner.appendChild(container);
}

function openModalReview() {
    const modalNode = `<div class = "cover-div">   
        <form id = "review-form">
        <img src="./images/logo.png" class="logo_image">
        <i class="fa fa-times" aria-hidden="true" id="close_review_modal"></i>
            <div class="flex_col">
                <div class="flex_row" id="name_first_last">
                    <div class="flex_col">
                        <label for="input_firstname">Ваше имя: <span class="required">*</span></label>
                        <input type="text" id="input_firstname" name="firstname" placeholder="Имя" autofocus="true" class="form-control" required>
                    </div>
                    <div class="flex_col lastname_margin">
                        <label for="input_lastname">Ваша фамилия: <span class="required">*</span></label>
                        <input type="text" id="input_lastname" name="lastname" placeholder="Фамилия" class="form-control" required>
                    </div>
                </div>
                <label for="input_city">Ваш город: <span class="required">*</span></label>
                <input type="text" id = "input_city" name="city" placeholder="г. Киев" class="form-control" required>
                <label for="input_text">Ваш отзыв: <span class="required">*</span></label>
                <textarea id="input_text" name="text" class="form-control" onkeyup="change(this.value);" maxlength="250" required></textarea>
                <p id="symbols-left">250/250</p>
                <label for="input_img">Ваше фото: <span class="required">*</span></label>
                <input type="file" id="input_img" name="img" required>  
                <img id="img_container" src="" alt="">
            </div>
            <input type="submit" value="Отправить" class="send_review">
        </form>
    </div>`;

    const modal_container = document.querySelector('#modal_container');
    modal_container.innerHTML = modalNode;
    const modal = document.querySelector('.cover-div');
    const form = document.querySelector('[name="review-form"]');

    const closeReviewModal = document.querySelector('#close_review_modal');
    closeReviewModal.addEventListener('click', closeModalReview);

    const submit = document.querySelector('#review-form');
    submit.addEventListener('submit', sendReviewData);

    let files;
    const img_input = document.querySelector('[type="file"]');
    
    img_input.addEventListener('change', function(event) {
        files = event.target.files;
        if (files) {
            const fr = new FileReader();
            fr.addEventListener('load', function(event) {
                document.querySelector('#img_container').setAttribute('src', fr.result);
                document.querySelector('#img_container').style.display ="block";
            }, false);
            fr.readAsDataURL(event.target.files[0]);
        }
  });
}

function closeModalReview() {
    const modal = document.querySelector('#modal_container');
    modal.innerHTML = " "; 
}

function change(text) {
    const pElem = document.querySelector('#symbols-left');
    pElem.innerText = `${250 - text.length}/250`;
}



function sendReviewData(event) {
    event.preventDefault();
  
    const student = {};
    for(let element of this.querySelectorAll('[name]')) {
        student[ element.getAttribute('name') ] = element.value;
    }
    student.img = document.querySelector('#img_container').getAttribute('src');
    student.name = `${student.firstname} ${student.lastname}`;
    const date = new Date();
    const day = (date.getDate().length === 1) ? date.getDate() :  '0' + date.getDate();
    const month = (date.getMonth()+1).length === 1 ? date.getMonth()+1 : '0' + (date.getMonth()+1);
    const year = date.getFullYear() % 100;
    student.date = `${day}.${month}.${year}`;
    delete student.firstname;
    delete student.lastname;    
    
    createReviews(student);

    const prev_button = document.querySelector('.prev');
    prev_button.removeEventListener('click', prevSl);
    const next_button = document.querySelector('.next');
    next_button.removeEventListener('click', nextSl);
    
    createSlider();

    const modal = document.querySelector('#modal_container');
    modal.innerHTML = "";
    const text = "Мы рассмотрим Ваш отзыв в ближайшее время."
    confirmationWindow(student.name, text);
}



function createSlider() {
    let slider = document.querySelector('.slider'),
        sliderList = slider.querySelector('.slider-list'),
        sl = sliderList.offsetWidth <= 445 ? 1 : 2;
        sliderTrack = slider.querySelector('.slider-track'),
        slides = slider.querySelectorAll('.slide'),
        arrows = slider.querySelectorAll('.slider-arrows'),
        prev = slider.querySelector('.prev'),
        next = slider.querySelector('.next'),
        slideWidth = slides[0].offsetWidth,
        slideIndex = 0,
        posInit = 0,
        posX1 = 0,
        posX2 = 0,
        posY1 = 0,
        posY2 = 0,
        posFinal = 0,
        isSwipe = false,
        isScroll = false,
        allowSwipe = true,
        transition = true,
        nextTrf = 0,
        prevTrf = 0,
        lastTrf = (slides.length-sl) * slideWidth,
        posThreshold = slides[0].offsetWidth * 0.35,
        trfRegExp = /([-0-9.]+(?=px))/,
        
        getEvent = function() {
          return (event.type.search('touch') !== -1) ? event.touches[0] : event;
        },

        slide = function() {
            if (transition) {
                sliderTrack.style.transition = 'transform .5s';
            }
            sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`; 
            prev.classList.toggle('disabled', slideIndex === 0);
            next.classList.toggle('disabled', slideIndex === slides.length -sl);
        },

        swipeStart = function() {
            let evt = getEvent();
            if (allowSwipe) {
                transition = true;
                nextTrf = (slideIndex + 1) * -slideWidth;
                prevTrf = (slideIndex - 1) * -slideWidth;
                posInit = posX1 = evt.clientX;
                posY1 = evt.clientY;
                sliderTrack.style.transition = '';
                document.addEventListener('touchmove', swipeAction);
                document.addEventListener('mousemove', swipeAction);
                document.addEventListener('touchend', swipeEnd);
                document.addEventListener('mouseup', swipeEnd);
                sliderList.classList.remove('grab');
                sliderList.classList.add('grabbing');
            }
        },

        swipeAction = function() {
            let evt = getEvent(),
                style = sliderTrack.style.transform,
                transform = +style.match(trfRegExp)[0];
            
            posX2 = posX1 - evt.clientX;
            posX1 = evt.clientX;
            posY2 = posY1 - evt.clientY;
            posY1 = evt.clientY;

            if (!isSwipe && !isScroll) {
                let posY = Math.abs(posY2);
                if (posY > 7 || posX2 === 0) {
                    isScroll = true;
                    allowSwipe = false;
                } else if (posY < 7) {
                    isSwipe = true;
                }
            }
            if (isSwipe) {
                if (slideIndex === 0) {
                    if (posInit < posX1) {
                        setTransform(transform, 0);
                        return;
                    } 
                    allowSwipe = true;
                }

                if (slideIndex === slides.length -sl) {
                    if (posInit > posX1) {
                        setTransform(transform, lastTrf);
                        return;
                    }
                    allowSwipe = true;
                }

                if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
                    reachEdge();
                    return;
                }

                sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
            }
        },

        swipeEnd = function() {
            posFinal = posInit - posX1;
            isScroll = false;
            isSwipe = false;
            document.removeEventListener('touchmove', swipeAction);
            document.removeEventListener('mousemove', swipeAction);
            document.removeEventListener('touchend', swipeEnd);
            document.removeEventListener('mouseup', swipeEnd);
            sliderList.classList.add('grab');
            sliderList.classList.remove('grabbing');
            if (allowSwipe) {
                if (Math.abs(posFinal) > posThreshold) {
                    if (posInit < posX1) {
                        slideIndex--;
                    } else if (posInit > posX1) {
                        slideIndex++;
                    }
                }
                if (posInit !== posX1) {
                    allowSwipe = false;
                    slide();
                } else {
                    allowSwipe = true;
                }
            } else {
              allowSwipe = true;
            }
        },

        setTransform = function(transform, comapreTransform) {
            if (transform >= comapreTransform) {
                sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
            }
            allowSwipe = false;
        },

        reachEdge = function() {
            transition = false;
            swipeEnd();
            allowSwipe = true;
        };
    
    sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
    sliderList.classList.add('grab');
    sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
    slider.addEventListener('touchstart', swipeStart);
    slider.addEventListener('mousedown', swipeStart);
    next.addEventListener('click',  nextSl);
    prev.addEventListener('click', prevSl);
}

function prevSl(event) {
    const target = event.target;
    if (!target.classList.contains('prev')) return;
    slideIndex--;
    slide();
}

function nextSl(event) {
    let target = event.target;
    if (!target.classList.contains('next')) return;
    slideIndex++;
    slide();
}

