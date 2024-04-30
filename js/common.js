let conLength = $('.content').length;
let index = 0;
let state = 1;
let sideIndex;


// 앵커 섹션 이동
$("#sideBtn a").on('click', function(e) {
    e.preventDefault();
    sideIndex = $(this).index();
    $("html, body").stop().animate({ scrollTop: $(".content:eq("+sideIndex+")").position().top })
    $("#sideBtn a").removeClass('on');
    $(this).addClass('on');
})

// 휠이벤트
function scrolling(e) {
    if (e.wheelDelta < 0 && state == 1) {
        state = 0;
        if (index == conLength-1) return;
        index++;
    }
    else if (e.wheelDelta > 0 && state == 1) {
        state = 0;
        if (index == 0) return;
        index--;
    }
    $("html, body").not(":animated").animate({ scrollTop: $(".content:eq("+index+")").position().top }, 1000, 'easeOutQuart', function() {
        state = 1;
    })
    $("#sideBtn a").removeClass('on');
    $("#sideBtn a:eq("+ index +")").addClass('on');
}
document.addEventListener('wheel', function(e) {
    scrolling(e)
})
window.addEventListener('load', function(e){
    this.setTimeout(function() {
        this.scrollTo(0, 0)
    }, performance.now()-10)
})




// 헤더
$('#gnbList').children('li')
.mouseenter(function() {
    $(this).children('.lnb')
    .stop()
    .slideDown(200);
})
.mouseleave(function() {
    $(this).children('.lnb')
    .stop()
    .slideUp(200);
})

$('.lnb').children('li')
.mouseenter(function() {
    $(this).children('.snb')
    .stop()
    .fadeIn(200);
})
.mouseleave(function() {
    $(this).children('.snb')
    .stop()
    .fadeOut(200);
})




// 브랜드 슬라이드
let liWidth = $('#slBrands > li').width();
let liLength = $('#slBrands > li').length;
// let lastPos = liWidth * (liLength - 1);
let num = 0;

$(window).on('resize', function() {
    liWidth = $('#slBrands > li').width();
})

function slBrands(state) { // parameter 매개변수
    if (state) {
        $("#slBrands:not(:animated)").animate({ marginLeft: -liWidth }, 1000, function() {
            $("#slBrands").append($(".slogan:first"))
                         .css({ marginLeft: 0 })
        })
    }
    else {
        $("#slBrands:not(:animated)").prepend($(".slogan:last"))
                                    .css({ marginLeft: -liWidth })
                                    .animate({ marginLeft: 0 }, 1000)
    }
}

let timer = setInterval(function() {
    slBrands(1); // argument 전달인자
}, 3000)

$('.nextSl').on('click', function() {
    clearInterval(timer);
    slBrands(1);
})

$('.prevSl').on('click', function() {
    clearInterval(timer);
    slBrands();
})






// CJ더마켓, NtN, NtT 카드 슬라이드
let cardLength = $('.card').length;
let cardWidth = $('.card').width();

function slCard(a) {
    if (a) {
    num++;
    $('#cardSlider')
        .animate({
            marginLeft: `-=${cardWidth}`
        });
    }
    else {
        num--;
        $('#cardSlider')
            .animate({
                marginLeft: `+=${cardWidth}`
        });
    }
    $(".card").not(`:eq($(num))`).animate({ opacity: 0.3 }, 200)
    $(".card:eq("+num+")").animate({ opacity: 1 }, 200)
}


$('.nextBtn').click(function(e) {
    e.preventDefault();
    if (num === cardLength - 1) return;
    slCard(1);
});

$('.prevBtn').click(function(e) {
    e.preventDefault();
    if (num === 0) return;
    slCard();
});




// 제일제당 연혁
    // 초기
$('.historyImg img').css({
    filter: 'grayscale(100%)',
    zIndex: 0,
    transition: '0.5s ease'
});
$('.historyImg img:first-of-type').css({
    filter: 'none',
    zIndex: 2,
    transition: '0.5s ease'
});
$('.historyImg img:eq(2)').css({
    zIndex: -1
})


$('#hiRight li:first-of-type').css({
    opacity: 1,
    zIndex: 1,
    transition: '0.5s ease'
});

$('.historyA a:first-of-type').css({
    width: '20px',
    height: '10px',
    borderRadius: '30%',
    backgroundColor: '#f20',
    transition: '0.5s ease'
});

function yearFade(targetId) {
    let target = $(targetId);
    let targetIndex = target.index();
    
    $('#hiRight li')
    .css({
        opacity: 0,
        zIndex: 1,
        transition: '0.5s ease'
    });
    
    target.css({ zIndex: 1 }).animate({ opacity: 1}, 500);

    // 연혁 이미지
    $('.historyImg img').css({
        filter: 'grayscale(100%)',
        zIndex: 0,
        transition: '0.5s ease'
    });
    $(`.historyImg img:eq(${targetIndex})`)
    .css({
        filter: 'none',
        zIndex: 2,
        transition: '0.5s ease'
    });

    if ( targetIndex == 0 ) {
        $(".historyImg img:eq(1)").css({ zIndex: 1 })
        $(".historyImg img:eq(2)").css({ zIndex: 0 })
    }
}

$('.historyA a').click(function(e) {
    if ( $(window).innerWidth() > 500 ) {
    e.preventDefault();
    let targetId = $(this).attr('href');
    yearFade(targetId);

    $('.historyA a').css({
        width: '10px',
        height: '10px',
        borderRadius: '100%',
        backgroundColor: '#000',
        transition: '0.5s ease'
    })
    $(this).css({
        width: '20px',
        height: '10px',
        borderRadius: '30%',
        backgroundColor: '#f20',
        transition: '0.5s ease'
    })
    }
});



// CJ블라썸파크, CJ블라썸캠퍼스, 지속가능경영

$('.inno')
.click(function() {

    let innoNum = $(this).index() + 1;
    let innoBg = `url(./images/inno${innoNum}.jpg)`;

    $('.inno').removeClass('on1')
    $(this).addClass('on1')
    $('.innoInner').removeClass('on2')
    $(this).find('.innoInner').addClass('on2')
    $('.inno').parent('#innoList').css({
        'background': 'none',
    })
    $(this).parent('#innoList').css({
        background: `${innoBg} no-repeat center / cover`
    })                
})




// 어사이드

// 초기 상태
$('#conAside')
.delay(1000)
.animate({
    left: 110
});

let pos;
$(window)
.scroll(function() {
    pos = $(window).scrollTop() + 300;
    if ( pos < 450 ) {
        $('#aside')
        .css({
            top: '30%',
            right: '1%'
        })
    }
    else {
        $('#aside')
        .stop()
        .animate({
            top: pos
        }, 0)
    }
})
$("a.back").click(function(e) {
    e.preventDefault();
    $("#conAside").animate({ left: 110  }, 500);
    $("a.back").hide(); 
    $("a.front").show();
});

$("a.front").click(function(e) {
    e.preventDefault();
    $('#conAside').show().animate({ left: 5 })
    $("a.front").hide();
    $("a.back").show();
});