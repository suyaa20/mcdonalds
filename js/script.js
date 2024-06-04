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

    //window 스크롤되면
    window.addEventListener('scroll', function () {
        //html문서를 수직으로 얼마나 스크롤 했는지 값을 구해서 변수에 담는다
        const docScrollTop = document.querySelector('html').scrollTop
        const footOffsetT = document.querySelector('.footer').offsetTop - window.innerHeight
        console.log(footOffsetT, docScrollTop)

        if (docScrollTop > 20 && docScrollTop < footOffsetT) { // docScrollTop 100이상 일때
            aside.style.display = 'block'
            header.classList.add('fixed')
        } else if (docScrollTop > footOffsetT){
            console.log("여기서 사라짐")
            
        }

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