var section = document.querySelectorAll('.section')
var navLinks = document.querySelectorAll('ul li a')

window.onscroll = () =>{
    section.forEach(sec =>{

        var top = window.scrollY;
        var offset = sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
    scrollFuntion()
}

// transparent Headers
header = document.getElementById("header")
mountain = document.getElementById('mountain')
may1 = document.getElementById('may1')
may2 = document.getElementById('may2')
bgtuyet = document.getElementById('bg')

function scrollFuntion(){
    if(document.body.scrollTop>600||document.documentElement.scrollTop>600){
        header.style.transform='translateY(0%)'
        // mountain.style.transform='translateY(0px)'

    }
    else{
        header.style.transform='translateY(-100%)'
        // mountain.style.transform='translateY(100px)'
    }
}


// window.onscroll = function(){
//     scrollFuntion()
// }
// transparent Headers

// smooth scroll
// const attr = document.querySelectorAll('a[href^="#]');

// attr.forEach(function (elm){
//     elm.addEventListener('click', function(e){
//         e.preventDefault();

//         let targetElm = document.querySelector(elm.getAttribute('href'));
//         let targetRange = targetElm.getBoundingClientRect().top;

//         let smoothScroll = function (range) {
//             let position = 0;
//             let progress = 0;
//             let easeInOutQuint = function (time) {
//                 return time < .5 ?
//                 16 * Math.pow(time, 5) :
//                 1-Math.pow(-2 * time + 2, 5) / 2;
//             }
//             let move = function(){
//                 progress++;
//                 position = range * easeInOutQuint(progress/100);

//                 window.scrollTo(0, position);

//                 if(position<range){
//                     requestAnimationFrame(move);
//                 }
//             }
//             requestAnimationFrame(move);
//         }

//         smoothScroll(targetRange)
//     })
// })

// smooth scroll

var mybutton = document.getElementById('myBtn')
var page_1 = document.getElementById('page1')
var page_2 = document.getElementById('page2')
var adobeToggle = true

function show(){
    // if(page_1.style.display= 'block'){
    //     page_1.style.display= 'none';
    //     page_2.style.display= 'block';
    // }
    // else{
    //     page_1.style.display= 'block';
    //     page_2.style.display= 'none';
    // }
    if(adobeToggle) {
        page_1.style.display= 'none'
        page_2.style.display= 'block'
    } else {
        page_1.style.display= 'block'
        page_2.style.display= 'none'
    }

    adobeToggle = !adobeToggle
    
} 
function showOnClick(){
    onclick.show()
}

// onclick = function show()


// var scroll = document.querySelector('.curve');
//     window.addEventListener('scroll', function(){
//         var value = 1 + window.scrollY/ - 1700;
//         scroll.style.transform = `scaleY(${value})`;
//     })

// const parallax = document.querySelector('.para')

// window.addEventListener('scroll', function(){
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.2 + "px";
// })

document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".po-box").forEach((shift) => {
    const position = shift.getAttribute("data-speed");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
