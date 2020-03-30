let hin, hout;

let nextA = document.getElementsByClassName('nextA');
let prevA = document.getElementsByClassName('prevA');

hout = nextA[0].parentElement.offsetHeight;
hin = nextA[0].offsetHeight;

nextA[0].style.top = (hout - hin) / 2 + "px";
prevA[0].style.top = (hout - hin) / 2 + "px";


let click = 0;
let photos = document.getElementsByClassName('image');
let dots = document.getElementsByClassName('dot');

function clickIt(e, add) {
    e.preventDefault();
    for (let i = 0; i < photos.length; i++) {
        photos[i].style.display = 'none';
        dots[i].className = 'dot';
    }

    click += add;
    if (click > 2) {
        click = 0;
    } else if (click < 0) {
        click = photos.length - 1;
    }
    photos[click].style.display = 'block';
    dots[click].className = 'dot current';

    console.log(photos[click]);
}