const aboutContainer = document.getElementById('about');
const homepageContainer = document.getElementById('homepage');
const workContainer = document.getElementById('work');
const homepageLink = document.getElementById('homepageLink');
const aboutLink = document.getElementById('aboutLink');
const workLink = document.getElementById('workLink');
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.getElementById('navbarNav');

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

/*HOMEPAGE*/
homepageLink.addEventListener('click', function () {
    if (!aboutContainer.classList.contains('d-none') || !workContainer.classList.contains('d-none')) {
        if (!aboutContainer.classList.contains('d-none')) {
            aboutContainer.classList.add('d-none');
            homepageContainer.classList.remove('d-none');
        } else if (!workContainer.classList.contains('d-none')) {
            workContainer.classList.add('d-none');
            homepageContainer.classList.remove('d-none');
        }    
        
        AOS.init();

        homepageLink.classList.add('active');
        aboutLink.classList.remove('active');
        workLink.classList.remove('active');
        navbarNav.classList.remove('show');
    }
});

/* WORK */
workLink.addEventListener('click', function () {
    if (!homepageContainer.classList.contains('d-none') || !aboutContainer.classList.contains('d-none')) {
        if (!homepageContainer.classList.contains('d-none')) {
            homepageContainer.classList.add('d-none');
            workContainer.classList.remove('d-none');
        } else if (!aboutContainer.classList.contains('d-none')) {
            aboutContainer.classList.add('d-none');
            workContainer.classList.remove('d-none');
        }

        AOS.init();

        workLink.classList.add('active');
        homepageLink.classList.remove('active');
        aboutLink.classList.remove('active');
        navbarNav.classList.remove('show');
    }
});

/*ABOUT*/
aboutLink.addEventListener('click', function () {
    if (!homepageContainer.classList.contains('d-none') || !workContainer.classList.contains('d-none')) {
        if (!homepageContainer.classList.contains('d-none')) {
            homepageContainer.classList.add('d-none');
            aboutContainer.classList.remove('d-none');
        } else if (!workContainer.classList.contains('d-none')) {
            workContainer.classList.add('d-none');
            aboutContainer.classList.remove('d-none');
        }

        AOS.init();

        aboutLink.classList.add('active');
        homepageLink.classList.remove('active');
        workLink.classList.remove('active');
        navbarNav.classList.remove('show');
    }
});

//gestione menù mobile
navbarToggle.addEventListener('click', function () {
    navbarNav.classList.toggle('show');
});
document.addEventListener('click', function (event) {
    if (!navbarNav.contains(event.target) && navbarNav.classList.contains('show')) {
        navbarNav.classList.remove('show');
    }
});
