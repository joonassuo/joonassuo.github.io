var clientsActive;

clientsActive = false;
$(".clients-link").click(() => {
    if (!clientsActive) {
        $(".bio").fadeOut(200, () => {
            $(".clients").fadeIn(200);
        });
        clientsActive = true;
    } else {
        $(".clients").fadeOut(200, () => {
            $(".bio").fadeIn(200);
        });
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