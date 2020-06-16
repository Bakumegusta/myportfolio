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