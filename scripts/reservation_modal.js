let openReserModel = document.querySelectorAll('.reservation');
openReserModel.forEach(element => element.addEventListener('click', openReservationModel));

let submitForm = document.querySelector('#reservation-none-model');
submitForm.addEventListener('submit', sendReservData);


function openReservationModel(event) {
    if (event.target.getAttribute('data-none') === "none-modal") return;

    const modalNode = `<div class="reservation_form cover-div flex_col">
    <div class="reservation-form-container">
    
    <p class="reservation_title_1">Австрийские альпы</p>
    <i class="fa fa-times" aria-hidden="true" id="close_reserv_modal"></i>
    <p class="reservation_title_2">на новый год</p>
    <div class="reservation_place_and_date flex_row">
        <div class="flex_row">
            <img src="images/calendar.png" id="small_calendar"><p>30.12 - 04.10</p>
        </div>
        <div class="flex_row">
            <img src="images/small_mount.png" id="small_mountains">
            <p>Горнолыжный курорт Sölden</p>
        </div>
    </div>
    <div class="form flex_col">
        <form id="reserv_form_model">
            <input type="text" placeholder="фио" name="name" required>
            <input type="email" placeholder="e-mail" name = "email" required>
            <input type="text" placeholder="телефон"  name = "phone"  required>
            <button type="submit" class="reservation" id="reserve">Забронировать</button>
        </form>
    </div>
    </div>
</div>`;

    let modal_container = document.querySelector('#modal_container_reserv');
    modal_container.innerHTML = modalNode;
    let modal = document.querySelector('.cover-div');
    let form = document.querySelector('#review-form-reserv');

    let closeReservModal = document.querySelector('#close_reserv_modal');
    closeReservModal.addEventListener('click', function(event) {
        modal_container.innerHTML=" ";
    });

    let submit = document.querySelector('#reserv_form_model');
    submit.addEventListener('submit', sendReservData);
}


function sendReservData(event) {
    event.preventDefault();

    const form = {};
    for(let element of this.querySelectorAll('[name]')) {
        form[ element.getAttribute('name') ] = element.value;
    }
    console.log(form);

    // Отправка запроса на сервер
    /*
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(form)
    }).then(alert("Done")).catch(console.log)
    */

    const modal_container =  document.querySelector('#modal_container_reserv');
    modal_container.innerHTML=" ";
    event.target.reset();
    let text = 'Мы свяжемся с вами в ближайшее время.';
    confirmationWindow(form.name, text);
}


function confirmationWindow(name, text) {

    var container = document.querySelector('#confirm-modal');
    const divContainer = document.createElement('div');
    divContainer.classList.add('reservation_form', 'cover-div');
    
    const divNode = document.createElement('div');
    divNode.classList.add('confirm-modal-container');

    //<i class="fa fa-times" aria-hidden="true" id="close_reserv_modal"></i>
    const close = document.createElement('i');
    close.classList.add('fa', 'fa-times');
    close.setAttribute('aria-hidde', 'true');
    close.setAttribute('id', 'close-confirm');

    const img = document.createElement('img');
    img.setAttribute('src', 'images/logo.png')

    const pNode = document.createElement('p');
    pNode.innerText = `Спасибо, ${name}!\n\n${text}`;

    divNode.appendChild(img);
    divNode.appendChild(close);
    divNode.appendChild(pNode);
    divContainer.appendChild(divNode);
    container.appendChild(divContainer);

    close.addEventListener('click', function(event) {
        container.innerHTML = " ";
    })
}