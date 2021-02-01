let map_container = document.querySelector('.map_container');

if(window.navigator.onLine) {
        map_container.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.1401353232304!2d36.23381991571549!3d50.00872857941684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0df3034d993%3A0xa605a2259fa7c72e!2z0YPQuy4g0KLRgNC40L3QutC70LXRgNCwLCDQpdCw0YDRjNC60L7Qsiwg0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjEwMDA!5e0!3m2!1sru!2sua!4v1608908645681!5m2!1sru!2sua" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
} else {
        map_container.innerHTML = `<img src="images/map_offline.png" alt="map" id="map_offline">`
}