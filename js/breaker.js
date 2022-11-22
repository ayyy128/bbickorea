$(document).ready(function () { //문서준비이벤트
    //모바일 메뉴 시험에 나옴

    $('.mgnb_wrap').hide();

    $('.ham').click(function () {
        $('.mgnb_wrap').fadeIn();
        $('body').css({ 'overflow': 'hidden' }); //스크롤바 없애기
    });

    $('.close').click(function () {
        $('.mgnb_wrap').fadeOut();
        $('body').css({ 'overflow': 'auto' }); //스크롤바 나타내기
    });

    //search
    $('.search').hide();

    $('.gnb li:nth-child(4)').click(function () {
        $('.search').fadeIn();
    });

    $('.search_close').click(function () {
        $('.search').fadeOut();
    });

    //breaker
    const day_list = new Swiper('.day_list', {

        centeredSlides: false,  // 첫번째 슬라이드 가운데 배치
        slidesPerView: '1.3',  // 한 슬라이드에 보여줄 갯수
        spaceBetween: 10,  // 슬라이드 사이 여백

        navigation: {
            nextEl: '.swiper-button-next',  // 다음 버튼
        },

        breakpoints: {

            1920: {
                slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 30,  // 슬라이드 사이 여백
            },


            1200: {
                slidesPerView: '2',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 20,  // 슬라이드 사이 여백
            },

            768: {
                slidesPerView: '1.7',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 20,  // 슬라이드 사이 여백
            },

            428: {
                slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 10,  // 슬라이드 사이 여백
            },

            390: {
                slidesPerView: '1.5',  // 한 슬라이드에 보여줄 갯수
                spaceBetween: 10,  // 슬라이드 사이 여백
            },

        },

        loop: true,  // 슬라이드 반복 여부
        speed: 1000, // 슬라이드 동작 속도 기본이 300인데 부드럽게 넘기기 위해 1000으로 사용

    });

    //juge
    $('.juges > li:nth-child(1)').addClass('active');
    $('.juges > li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.juges > li:nth-child(1)').addClass('active_2');
    $('.juges > li').click(function () {
        $(this).addClass('active_2').siblings().removeClass('active_2');
    });

});//끝

