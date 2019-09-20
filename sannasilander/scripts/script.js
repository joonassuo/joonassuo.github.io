const showColcade = () => {
    $(".grid-col").show();
}
$("body").imagesLoaded(showColcade());

//-----------------------DESKTOP--------------------------------------

var clientsActive;

clientsActive = false;
$(".clients-link").click(() => {
    if (!clientsActive) {
        $(".bio").fadeOut(200, () => {
            $(".clients").fadeIn(200);
        });
        $(".clients-link").css('text-shadow', '0.1px 0.1px 2px');
        clientsActive = true;
    } else {
        $(".clients").fadeOut(200, () => {
            $(".bio").fadeIn(200);
        });
        $(".clients-link").css('text-shadow', '');
        clientsActive = false;
    }
});

// ----------------------MOBILE-------------------------------------



$(".hamburger-icon").click(() => {
    $(".menu-container").slideToggle();
});

$(".portfolio-menu").click(() => {
    $(".menu-container").slideToggle();
    $(".clients").fadeOut(300);
    $(".bio").fadeOut(300, () => {
        $(".grid").fadeIn(300);
    });
});
/*
$(".bio-menu").click(() => {
    $(".menu-container").slideToggle();
    $(".clients").fadeOut(300);
    $(".grid").fadeOut(300, () => {
        $(".bio").fadeIn(300);
    });
});
*/
$(".clients-menu").click(() => {
    $(".menu-container").slideToggle();
    $(".grid").fadeOut(300);
    $(".bio").fadeOut(300, () => {
        $(".clients").fadeIn(300);
    });
});

$(".insta").click(() => {
    event.preventDefault();
    location.href = "https://www.instagram.com/silandersanna/?hl=en";
});

$(".mail").click(() => {
    event.preventDefault();
    var email = 'sanna.silander@gmail.com';
    window.location = 'mailto:' + email;
});