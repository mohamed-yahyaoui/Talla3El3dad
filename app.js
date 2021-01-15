var nbr;
var essai;
var firsttime = true;
var timer

document.getElementById('guess').onkeypress = function(e){
    if(e.key === "Enter"){
        prevoir();
        essai++;
    }
}

function showResult(msg,final=false){
    let notifDiv = document.querySelector('#notif');
    notifDiv.querySelector('h3').innerHTML = msg;
    clearInterval(timer)
    notifDiv.style.opacity = 1;
    if(!final){
        let opacity = 1;
        timer = setInterval(function(){
            if(opacity <= 0) clearInterval(timer);
            notifDiv.style.opacity = opacity;
            opacity -= 0.05;
        }, 100);
    }
    else{
        if(firsttime){
            firsttime = false;
            document.querySelector('.title').classList.add('again');
            document.querySelector('.again').classList.remove('title');
            document.querySelector('.nextbutton').classList.remove('nextbutton-transition');
        }
        next();
    }
}

function next(start){
    nbr = Math.floor(Math.random()*100) + 1;
    essai = 1;
    timer = 0;
    document.getElementById('counter').innerHTML = `مازالوا عندك 10 محاولات`;
    document.getElementById('welcomeboard').classList.toggle('display-none');
    document.getElementById('playboard').classList.toggle('display-none');
    document.getElementById('welcomeboard').classList.add('welcomeboard-transition');
    document.getElementById('guess').value = "";
    if(start) document.querySelector('#notif').style.opacity = 0;
}

function prevoir(){
    if(essai<10){
        var x = document.getElementById('guess').value;
        if(essai<9) document.getElementById('counter').innerHTML = `مازالوا عندك ${10 - essai} محاولات`;
        else document.getElementById('counter').innerHTML = "مازالت محاولة واحدة";
        if(x-nbr<=10 && x-nbr>0) showResult("نقّص شوية 🤏 قــربــت")
        else if(x-nbr>=-10 && x-nbr<0) showResult("زيد شوية 🤏 قــربــت")
        else if(x<nbr) showResult("😛😛 لا العدد اللّي انلوجوا عليه أكبر")
        else if(x>nbr) showResult("😛😛 لا العدد اللّي انلوجوا عليه أصغر")
        else if(x==nbr) showResult("👏👏 صــحّــة !! معـلّـم",true);
    } else {
        showResult('خسرت 😂😂 العدد هو '+nbr,true);
    }
}