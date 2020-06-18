// onload animation
window.sr = ScrollReveal();
sr.reveal('.header', {
  duration: 2000,
  origin:'top',
  distance:'300px'

});
sr.reveal('.dataleft', {
  duration: 2000,
  origin:'left',
  delay: 1000,
  distance:'300px'
});
sr.reveal('.dataright', {
  duration: 2000,
  delay: 2000,
  origin:'right',
  distance:'300px'
});
sr.reveal('.widgeticon', {
    duration: 2000,
    delay: 2000,
    origin:'bottom',
    distance:'300px'
  });
// animaton end



$('.nav-item').on('click', () => {
    $('.home').removeClass('active');
})

$('.nav-item').on('click', (e) => {
    var x = document.getElementById("sound");

    x.play();
    console.log(e.target.id);
    var id = e.target.id;
    if (id == 'me') {
        $('#aboutme').show();
        $('#hobbies').hide();
        $('#contact').hide();
    } else if (id == 'mehobbies') {
        $('#hobbies').show();
        $('#contact').hide();
        $('#aboutme').hide();
    } else if (id == 'mecontact') {
        $('#contact').show();
        $('#aboutme').hide();
        $('#hobbies').hide();
    } else {
        $('#aboutme').hide();
        $('#hobbies').hide();
        $('#contact').hide();
    }
})


$('.cross').on('click', () => {
    $('.aboutme').hide();
    var x = document.getElementById("sound");
    x.play();

})