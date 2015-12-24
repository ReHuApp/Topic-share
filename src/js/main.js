var mask = document.querySelector('#mask');

var share_button_1 = document.querySelector('.button__badge__share__wechat');
var share_button_2 = document.querySelector('.button__badge__share__moments');

mask.addEventListener('click', function() {
    mask.classList.remove('active');
});

share_button_1.addEventListener('click', function() {
    mask.classList.add('active');
});

share_button_2.addEventListener('click', function() {
    mask.classList.add('active');
});
