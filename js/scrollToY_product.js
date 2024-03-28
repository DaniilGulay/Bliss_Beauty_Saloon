const buttonSpecialists = document.getElementById('specialists');
const buttonAbout = document.getElementById('about');

buttonSpecialists.addEventListener('click', () => {
    const lessonSelected = document.querySelector('.team-slider');
    lessonSelected.scrollIntoView( {
        block:"center",
        inline:"nearest",
        behavior:"smooth"
    });
});
buttonAbout.addEventListener('click', () => {
    const lessonSelected = document.querySelector('.flooter');
    lessonSelected.scrollIntoView( {
        block:"center",
        inline:"nearest",
        behavior:"smooth"
    });
});