$(document).ready(function(){
    $(window).scroll(function(){            
        $(".togo").addClass('active');
        $(".ticket").addClass('show');
        if($(window).scrollTop()==0){       
            $(".togo").removeClass('active');
            $(".ticket").removeClass('show');
        }
    });

    
    $('.togo').click(function(){
        $('html').animate({scrollTop:"0px"},500);
    });

    // 헤더 스크롤시 고정
    $(window).scroll(function(){            
        $("#scroll").slideDown(500);
        if($(window).scrollTop()==0){       
            $("#scroll").fadeOut(100);
        }
    });

    // 서브 메뉴 등장
    $('.menu1 > li > a').mouseenter(function(){
        $(this).siblings('.sub').stop().fadeIn(100);
    });
    
    $(".menu1 > li, .sub").mouseleave(function(){
        $('.sub').stop().fadeOut(100);
    });

    //스크롤 헤더에 서브메뉴
    $("#scroll li a").mouseenter(function(){
        $(this).siblings('.sub').stop().fadeIn(100);
    });
    $("#scroll > li, .sub").mouseleave(function(){
        $('.sub').stop().fadeOut(100);
    });

    // 비주얼 슬라이더
    $('.main_visual_imgs').slick({
        centeredSlides: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        autoplaySpeed:5000,
        arrow:true,               
        dots:true,
    });

    //섹션1 탭

$(".content .content_wrap:gt(0)").hide();

$(".tab li").click(function(){
    var nn = $(this).index();              
    console.log(nn+"번째 li를 클릭했습니다");

    $(".tab li").removeClass("select");
    $(this).addClass("select");

    $(".content .content_wrap").hide();
    $(".content .content_wrap").eq(nn).show();

    $('.content_wrap').slick('setPosition');
    // slick tap과 silder를 같이 사용할때 셋 포지션을 적용시킨다.

});

//섹션1 슬라이드
    $('.content_wrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:2
    });

//섹션4 슬라이드
    $('.s4_boxwrap1').slick({
        autoplay: true,           
        autoplaySpeed:2000,
    });
    $(".s4_boxwrap1 button.slick-arrow").remove();
});

//섹션3 이메일입력
document.getElementById("email_input").setAttribute("action", ""); 


