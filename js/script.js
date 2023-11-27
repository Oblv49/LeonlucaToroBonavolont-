const aboutContainer = document.getElementById('about');
const homepageContainer = document.getElementById('homepage');
const homepageLink = document.getElementById('homepageLink');
const aboutLink = document.getElementById('aboutLink');
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.getElementById('navbarNav');

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

/*HOMEPAGE*/
homepageLink.addEventListener('click', function () {
    if (!aboutContainer.classList.contains('d-none')) {
        aboutContainer.classList.add('d-none');
        homepageContainer.classList.remove('d-none');
        AOS.init();
        // Aggiungi la classe 'active' al link corrente e rimuovi da altri link
        homepageLink.classList.add('active');
        aboutLink.classList.remove('active');
        // Chiudi il menu su mobile
        navbarNav.classList.remove('show');
    }
});

/*ABOUT*/
aboutLink.addEventListener('click', function () {
    if (!homepageContainer.classList.contains('d-none')) {

        homepageContainer.classList.add('d-none');
        aboutContainer.classList.remove('d-none');

        AOS.init();

        aboutLink.classList.add('active');
        homepageLink.classList.remove('active');
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
