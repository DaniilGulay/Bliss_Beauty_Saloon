
const buttonSpecialists = document.getElementById('specialists');
const buttonGallery = document.getElementById('gallery');
const buttonAbout = document.getElementById('about');

buttonSpecialists.addEventListener('click', () => {
   const lessonSelected = document.querySelector('.slide-container');
    lessonSelected.scrollIntoView( {
        block:"center",
        inline:"nearest",
        behavior:"smooth"
    });
});

buttonGallery.addEventListener('click', () => {
    const lessonSelected = document.querySelector('.gallery');
    lessonSelected.scrollIntoView( {
        block:"center",
        inline:"nearest",
        behavior:"smooth"

    });
buttonAbout.addEventListener('click', () => {
    const lessonSelected = document.querySelector('.flooter');
    lessonSelected.scrollIntoView( {
        block:"center",
        inline:"nearest",
        behavior:"smooth"
    });
});



});