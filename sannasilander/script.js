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
        $(".clients-link").css('text-shadow', 'initial');
        clientsActive = false;
    }
});

$(".name").click(() => {
    if (clientsActive) {
        $(".clients").fadeOut(200, () => {
            $(".bio").fadeIn(200);
        });
        clientsActive = false;
    }
})

$(".portfolio-menu").click(() => {
    $(".menu-container").fadeOut(200, () => {
        $(".grid").fadeIn(200);
    })
})