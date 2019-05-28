const whitePawn = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/800px-Chess_plt45.svg.png);'
const whiteRook = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png);'
const whiteKnight = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png);'
const whiteBishop = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png);'
const whiteQueen = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png);'
const whiteKing = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png);'
const blackPawn = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/800px-Chess_pdt45.svg.png);'
const blackRook = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png);'
const blackKnight = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png);'
const blackBishop = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png);'
const blackQueen = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/68px-Chess_qdt45.svg.png);'
const blackKing = 'background-image:url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/68px-Chess_kdt45.svg.png);'



//--------------------------SET BOARD----------------------------------

// universal function for setting pieces in their places
function selectorFunction(id, piece) {
    document.querySelector(id).style.cssText = piece;
}

// populate board when startButton is clicked
$('.startButton').click(() => {
    startPosition = true;
    // pawns
    for (let i = 97; i < 105; i++) {
        document.querySelector('#' + String.fromCharCode(i) + 2).style.cssText = whitePawn;
        document.querySelector('#' + String.fromCharCode(i) + 7).style.cssText = blackPawn;
    }
    // rooks
    selectorFunction('#a1', whiteRook);
    selectorFunction('#h1', whiteRook);
    selectorFunction('#a8', blackRook);
    selectorFunction('#h8', blackRook);
    // knights
    selectorFunction('#b1', whiteKnight);
    selectorFunction('#g1', whiteKnight);
    selectorFunction('#b8', blackKnight);
    selectorFunction('#g8', blackKnight);
    // bishops
    selectorFunction('#c1', whiteBishop);
    selectorFunction('#f1', whiteBishop);
    selectorFunction('#c8', blackBishop);
    selectorFunction('#f8', blackBishop);
    // queens
    selectorFunction('#d1', whiteQueen);
    selectorFunction('#d8', blackQueen);
    // kings
    selectorFunction('#e1', whiteKing);
    selectorFunction('#e8', blackKing);
})

// reset board
$('.clearButton').click(() => {
    $('div > div').css('background-image', 'none');
})





//---------------------------MOVE PIECES---------------------------------
var activePiece;
var isActive = false;
var prevLocation;
var startPosition = false;

function makeMove(square) {
    if (square.css('background-image') !== 'none') {
        if (!isActive) {
            square.css('background-color', 'green');
            isActive = true;
            activePiece = square.css('background-image');
            prevLocation = square.attr('id');
        }
    } else {
        if (isActive) {
            square.css('background-image', activePiece);
            $('#' + prevLocation).css('background-color', '');
            $('#' + prevLocation).css('background-image', '');
            isActive = false;
        }
    }
}

$('div').on('click', 'div > div', function () {
    makeMove($(this));
});





//-------------------------TEST METHOD------------------------------------

const berlinDefence = [
    'e2', 'e4',
    'e7', 'e5',
    'g1', 'f3',
    'b8', 'c6',
    'f1', 'b5',
    'g8', 'f6'
];

// loop with delay
var i = 0;

function loop() {
    setTimeout(() => {
        makeMove($('#' + berlinDefence[i]));
        i++;
        if (i < berlinDefence.length) {
            loop()
        }
    }, 500)
}

// testbutton onclick event
$('.demoButton').click(() => {
    if (startPosition) {
        i = 0;
        loop();
        startPosition = false;
    } else {
        alert('Pieces need to be in starting position!');   
    }
});