var nbr;
var essai;
var timer

document.querySelector('#guess').onkeydown = (e) => {
    if (e.key === "Enter") {
        prevoir();
        essai++;
    }
}

let play = () => {
    ///////////////
    document.querySelector('#notif').style.opacity = 0;
    document.querySelector('.title').classList.remove('title-transition')
    document.querySelector('.playbutton').classList.remove('playbutton-transition')
    ///////////////
    nbr = Math.floor(Math.random() * 100) + 1;
    essai = 1;
    timer = 0;
    document.querySelector('#counter').innerHTML = `مازالوا عندك 10 محاولات`;
    document.querySelector('#welcomeboard').classList.toggle('cache');
    document.querySelector('#playboard').classList.toggle('cache');
    document.querySelector('#guess').value = "";
}

function prevoir() {
    var x = document.querySelector('#guess').value;
    if (essai < 10) {
        if (essai < 9) document.querySelector('#counter').innerHTML = `مازالوا عندك ${10 - essai} محاولات`;
        else if(essai == 9) document.querySelector('#counter').innerHTML = "مازالت محاولة واحدة";
        if (x - nbr <= 10 && x - nbr > 0) showResult("نقّص شوية 🤏 قــربــت")
        else if (x - nbr >= -10 && x - nbr < 0) showResult("زيد شوية 🤏 قــربــت")
        else if (x < nbr) showResult("😛😛 لا العدد اللّي انلوجوا عليه أكبر")
        else if (x > nbr) showResult("😛😛 لا العدد اللّي انلوجوا عليه أصغر")
        else if (x == nbr) showResult("👏👏 صــحّــة !! معـلّـم", true);
    } else {
        if (x == nbr) showResult("👏👏 صــحّــة !! معـلّـم", true);
        else showResult('خسرت 😂😂 العدد هو ' + nbr, true);
    }
}

function showResult(msg, final = false) {
    let notif = document.querySelector('#notif');
    notif.innerHTML = msg;
    clearInterval(timer)
    notif.style.opacity = 1;
    if (!final) {
        let opacity = 1;
        timer = setInterval(function () {
            if (opacity <= 0) clearInterval(timer);
            notif.style.opacity = opacity;
            opacity -= 0.05;
        }, 100);
    }
    else {
        document.querySelector('.title').innerHTML = '🤔🤔 تحب تعاود';
        document.querySelector('#welcomeboard').classList.toggle('cache');
        document.querySelector('#playboard').classList.toggle('cache');
    }
}

