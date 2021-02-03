function drawProgress(number, id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");

    for(let i = 1; i <= number; i++) {
        (function(i) {
            setTimeout(function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = 'transparent';
                ctx.strokeStyle = 'lightgray';
                ctx.lineWidth = 9;
                ctx.beginPath();
                ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2 - 6, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
                
                ctx.fillStyle = 'transparent';
                ctx.strokeStyle = '#137893';
                ctx.lineWidth = 9;
                ctx.beginPath();
                ctx.arc(canvas.width/2, canvas.height/2, canvas.height/2 - 6, 1.5 * Math.PI, (i-25) * 0.02 * Math.PI);
                ctx.fill();
                ctx.stroke(); 
                ctx.font = 'bold 45px serif';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center'
                ctx.beginPath();
                ctx.fillText(i+'%', 150, 90);
                ctx.fill();
                ctx.stroke();            
            }, i*40);
        } (i));
    }
}

const lastElem = document.querySelector('.div_procent');
let isHidden = true;
window.addEventListener('scroll', displayArticle)
function displayArticle(event) {
    const elemPos = lastElem.getBoundingClientRect();
    const scrollToElem = elemPos.y + 100;
    const windowHeight = document.documentElement.clientHeight;
    if(windowHeight > scrollToElem) {
        if(!isHidden) return;
        isHidden = false;
        drawProgress(67, 'first_circle');
        drawProgress(53, 'second_circle');
   } 
}