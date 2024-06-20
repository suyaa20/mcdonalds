//window.onload = function(){}
window.addEventListener('load', function () {
    //변수들 선언 초기화
    const header = document.querySelector('.header')
    const hMenu = document.querySelector('.hMenu')
    const topSearch = document.querySelector('.topSearch')
    const srch = document.querySelector('.topSearch .srch')
    const close = document.querySelector('.topSearch .close')
    const aside = document.querySelector('.aside')
    const btnTop = document.querySelector('.btnTop')
    const ftHeight =  document.querySelector('.footer').clientHeight + 50

    //hMenu에 마우스가 들어가면 header에 open클래스 적용
    hMenu.addEventListener('mouseenter', function () {
        header.classList.add('open');
    })

    //header에서 마우스가 떠나면 header에 open클래스 제거
    header.addEventListener('mouseleave', function () {
        header.classList.remove('open');
    })

    //srch를 클릭하면 topSearch에 open클래스 적용
    srch.addEventListener('click', function () {
        topSearch.classList.add("open");
    })

    //close를 클릭하면 topSearch에 open클래스 제거
    close.addEventListener('click', function () {
        topSearch.classList.remove("open");
    })

    console.log( document.querySelector('.footer'))


    //window 스크롤되면
    window.addEventListener('scroll', function () {
        //html문서를 수직으로 얼마나 스크롤 했는지 값을 구해서 변수에 담는다
        const docScrollTop = document.querySelector('html').scrollTop
        const footOffsetT = document.querySelector('.footer').offsetTop - window.innerHeight
        
        

        console.log(footOffsetT, docScrollTop ,ftHeight)

        if (docScrollTop > 20 && docScrollTop < footOffsetT) { // docScrollTop 100이상 일때
            header.classList.add('fixed')
            aside.style.display = 'block'
            aside.style.position = 'fixed'
            aside.style.bottom = '50px'
        } else if (docScrollTop > footOffsetT + 150 ){
           aside.style.position = 'absolute'
           aside.style.bottom = ftHeight + "px"

        }




        
    // $(window).on('scroll', function () {
    //     const scrollTop = $(window).scrollTop();
    //     const windowHeight = $(window).height();
    //     const ftHeight = $('#footer').height();

    //     if (scrollTop + windowHeight >= ftOffsetTop) {
    //         $(quick).css({
    //             position: 'absolute',
    //             bottom : ftHeight + 30
    //         })
    //     }else{
    //         $(quick).css({
    //             position: 'fixed',
    //             bottom : 30
    //         })
    //     }

    // })

        console.log("html 문서를 수직으로 얼마나 스크롤 했는지 ", docScrollTop)
        console.log("윈도우(브라우저)를 수직으로 얼마나 스크롤 했는지 ", window.scrollY)
    })//window 스크롤 끝부분

    //btnTop을 클릭하면 윈도우 맨 위로 가기 smooth 움직임
    btnTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    //스와이퍼 슬라이드 설정
    var swiper = new Swiper(".mainSlide", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // 클릭할수 있게 설정
        },
    });

})//window load 끝부분