const arr_review = document.querySelector('#add_review');
arr_review.addEventListener('click', openModalReview);

function openModalReview() {
    const modalNode = `<div class = "cover-div">   
        <form id = "review-form">
            <img src="./images/logo.png" class="logo_image">
            <i class="fa fa-times" aria-hidden="true" id="close_review_modal"></i>
            <div class="flex_col">
                <div class="flex_row">
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
                <input type="file" id="input_img" name="img" onchange="getUserImg(this.files);" required>
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
    student.name = `${student.firstname} ${student.lastname}`;
    reviews_items.push(student);
    reviewsObj.createReviews(item);
}