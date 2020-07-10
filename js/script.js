// smooth anchor scrolling
document.querySelectorAll('a[href^="#"][href$="Anchor"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // remove all underline from a links
        document.querySelectorAll('a').forEach(link => {
            link.classList.remove('active-nav');
        })

        this.classList.add('active-nav');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        }); 
    });
});

// change css of navbar when reaching certain anchors
window.addEventListener('scroll', function(e) {
    e.preventDefault();

    // only applies if window size is greater than 768 pixels; otherwise, ignore the below
    if (window.innerWidth > 768) {

        if (window.pageYOffset === 0) {
            removeAllActiveNavClasses();
            document.querySelector('.homeNav').classList.add('active-nav');
        } else if (window.pageYOffset >= 594 && window.pageYOffset < 1379) {
            removeAllActiveNavClasses();
            document.querySelector('.aboutNav').classList.add('active-nav');
        } else if (window.pageYOffset >= 1380 && window.pageYOffset < 2000) {
            removeAllActiveNavClasses();
            document.querySelector('.projectsNav').classList.add('active-nav');
        } else if (window.pageYOffset >= 2001 && window.pageYOffset < 2770) {
            removeAllActiveNavClasses();
            document.querySelector('.photosNav').classList.add('active-nav');
        } else if (window.pageYOffset >= 2771) {
            removeAllActiveNavClasses();
            document.querySelector('.contactNav').classList.add('active-nav');
        }
    } 
})

function removeAllActiveNavClasses() {
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active-nav');
    })
}

// for photo gallery section
let pic1 = document.querySelector('.slide1');
let pic2 = document.querySelector('.slide2');
let pic3 = document.querySelector('.slide3');
let pic4 = document.querySelector('.slide4');
let pic5 = document.querySelector('.slide5');
let pic6 = document.querySelector('.slide6');
let pic7 = document.querySelector('.slide7');
let pic8 = document.querySelector('.slide8');
let pic9 = document.querySelector('.slide9');
let pic10 = document.querySelector('.slide10');
let mainSlide = document.querySelector('#mainSlide');
let photoGalleryPics = document.getElementsByClassName('pgPic');

for (let i = 0; i < photoGalleryPics.length; i++) {
    photoGalleryPics[i].addEventListener('click', function(e) {
        e.preventDefault();        
        mainSlide.src='images/photo_gallery/' + (i + 1) + '.jpg';
    })
}

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav-li-items');

burger.addEventListener('click', function(e) {
    e.preventDefault();

    nav.classList.toggle('nav-active');
})

window.addEventListener('resize', function() {
    // console.log(window.innerWidth);

    if (window.innerWidth > 768 && nav.classList.contains('nav-active')) {
        nav.classList.toggle('nav-active');
    } else if (window.innerWidth <= 768 && !(nav.classList.contains('nav-active'))) {
        nav.classList.toggle('nav-active');
    }
})

// adjust padding to contact anchor when window sizing is <= 768

let contactAnchor = document.querySelector('#contactAnchor');

if (window.innerWidth <= 768) {
    contactAnchor.style.paddingTop = "80px";
}

// remove dropdown of navbar when clicking on a link

let navLinks = document.querySelectorAll('.nav-li-items li a');

console.log(navLinks);
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {

        e.preventDefault();
    
        if (window.innerWidth <= 768) {
            nav.classList.toggle('nav-active');
        }
    })
}

window.onload = function() {
    if (window.innerWidth <= 768) {
        nav.classList.toggle('nav-active');
    }
}

