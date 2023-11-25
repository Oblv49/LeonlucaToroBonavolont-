const aboutContainer = document.getElementById('about');
const homepageContainer = document.getElementById('homepage');

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

/*HOMEPAGE*/ 
document.getElementById('homepageLink').addEventListener('click', showHomepage);

function showHomepage() {
    if (!aboutContainer.classList.contains('d-none')) {
        aboutContainer.classList.add('d-none');
        homepageContainer.classList.remove('d-none'); 

        // Reinizializza AOS dopo il cambio di sezione
        setTimeout(function () {
            AOS.init();
        }, 100);
    }
}

/*ABOUT*/
document.getElementById('aboutLink').addEventListener('click', showAbout);

function showAbout() {
    if (!homepageContainer.classList.contains('d-none')) {
        homepageContainer.classList.add('d-none');
        aboutContainer.classList.remove('d-none');
        
        // Reinizializza AOS dopo il cambio di sezione
        setTimeout(function () {
            AOS.init();
        }, 100);
    }
}
