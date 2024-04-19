
// 브랜드 슬라이드
let liLength = $('#slBrands > li').length;
let num = 0;

function slider() {
    num++;
    if (num === liLength) {
        num = 0;
        $('#slBrands')
            .append($('#slBrands li:eq(0)'))
            .css({
                marginLeft: -(liLength - 1) * 100 + "%"
            });
    } else {
        $('#slBrands')
            .animate({
                marginLeft: '-=100%'
            });
    }
}

function slider2() {
    if (num === 0) return;
    num--;
    $('#slBrands')
        .animate({
            marginLeft: '+=100%'
        });
}

$('.nextSl').click(function(e) {
    e.preventDefault();
    if (num === liLength - 1) return;
    slider();
});

$('.prevSl').click(function(e) {
    e.preventDefault();
    slider2();
});



// CJ더마켓, NtN, NtT 카드 슬라이드

let cardLength = $('.card').length;
// console.log(cardLength)

function slCard1() {
    num++;
    if (num === cardLength) {
        num = 0;
        $('#cardSlider')
            .append($('#cardSlider li:eq(0)'))
            .css({
                marginLeft: -(cardLength - 1) * 1200 + "px"
            });
    } else {
        $('#cardSlider')
            .animate({
                marginLeft: '-=1200px'
            });
    }
}

function slCard2() {
    if (num === 0) return;
    num--;
    $('#cardSlider')
    .animate({
        marginLeft: '+=1200px'
    });
}

$('.nextBtn').click(function(e) {
    e.preventDefault();
    if (num === cardLength - 1) return;
    slCard1();
});

$('.prevBtn').click(function(e) {
    e.preventDefault();
    slCard2();
});
