var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#fff';

window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 800) {

        body.style.backgroundColor = '#c3140f';
    } else if (scroll >= 300 && scroll < 600) {
        body.style.backgroundColor = '#c3140f';
    } else if (scroll >= 600 && scroll < 1200) {

        body.style.backgroundColor = '#FFF';
    } else if (scroll >= 1200 && scroll < 3800) {
        body.style.backgroundColor = "#c3140f";
    } else {
        body.style.backgroundColor = "#fff"
    }
}

