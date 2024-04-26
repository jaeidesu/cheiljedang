// 휠이벤트
let conLength = $('.content').length;
let index = 0;
let state = 1;
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
}
document.addEventListener('wheel', function(e) {
    scrolling(e)
})
window.addEventListener('load', function(e){
    this.setTimeout(function() {
        this.scrollTo(0, 0)
    }, performance.now())
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
let lastPos = liWidth * (liLength - 1);
let num = 0;


function autoSlide(state) {
    // 좌측버튼
    if (state) {
        if ( $('#slBrands').css('marginLeft') == "0px" ) {
            $('#slBrands:not(:animated)').animate({ marginLeft: -lastPos })
        }
        else {
            $('#slBrands:not(:animated)').animate({ marginLeft: `+=${liWidth}px` })
        }
    }
    // 우측버튼
    else {
        if ( $('#slBrands').css('marginLeft') == `-${lastPos}px` ) {
            $('#slBrands:not(:animated)').animate({ marginLeft: 0 })
        }
        else {
            $('#slBrands:not(:animated)').animate({ marginLeft: `-=${liWidth}px` })
        }
    }
}

let timer = setInterval(function() {
   autoSlide();
}, 3000)

$('.prevSl')
.click(function(e) {
    e.preventDefault();
    clearInterval(timer);
    autoSlide(1);
})
$('.nextSl')
.click(function(e) {
    e.preventDefault();
    clearInterval(timer);
    autoSlide();
})




// CJ더마켓, NtN, NtT 카드 슬라이드
let cardLength = $('.card').length;

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

$('#hiRight li').css({
    opacity: 0,
    zIndex: 1,
    transition: '0.5s ease'
});
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
});




// 블로썸파크, 블로썸캠퍼스, 지속가능경영

$('.imgWrap').css({
    filter: 'grayscale(100%)'
});
$('.imgWrap:first-of-type').css({
    filter: 'none'
});

$('.inno').css({
    opacity: 0,
    transition: '0.5s ease'
});
$('.inno:first-of-type').css({
    opacity: 1,
    zIndex: 4,
    transition: '0.5s ease'
});

// 이미지 클릭 이벤트
$('.imgWrap').click(function(e) {
    e.preventDefault();
    let clickedIndex = $(this).index();
    
    $('.innoImg').append($(this).prev());
    $(".innoImg").prepend($(this));
    $('.imgWrap').css({
        filter: `grayscale(100%)`
    });
    $(this).css({
        filter: 'none'
    });

    // 우측 내용(li) 변경
    
    let innoClass = $('.imgWrap').attr('src').substr(9, 5);
    $('.inno').css({
        opacity: 0,
        transition: '0.5s ease'
    });
    $(`.${innoClass}`).css({
        opacity: 1,
        transition: '0.5s ease'
    });
    
});


// 어사이드
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