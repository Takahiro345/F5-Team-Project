'use strict';
{
    const lbut = document.getElementById('left-button');
    const rbut = document.getElementById('right-button');

    const but = document.getElementsByClassName('but');
    const images = document.getElementsByClassName('image');

    
    let gap;
    if (window.innerWidth <= 900) {
        gap = 100;
    } else {
        gap = 35.5;
    }
    let x = 0;

    // 초기 위치 설정
    for (let i = 0; i < images.length; i++) images[i].style.left = `-${x}%`;      
    console.log(x);

    // 이미지 이동
    function image_x() {
        x += gap;
        xpos();       
    }

    //자동 슬라이드
    setInterval( () => {
        image_x();
    }, 2500);

    window.addEventListener("resize", function() {

        x = 0;
        if (window.innerWidth <= 900) {
            gap = 100;    
        } else {
            gap = 35.5;
        }
    });

    function xpos() {
        if (window.innerWidth <= 900) {
            if(x >= 900) x = 0;
            if(x < 0) x = 900;
        } else {
            if(x > 213) x = 0;
            if(x < 0) x = 212.5;
        }        
        for (let i = 0; i < images.length; i++) images[i].style.left = `-${x}%`;
        // 버튼 색상 지정
        if (x > 212) set_button_color(6);
        else if (x > 177) set_button_color(5);
        else if (x > 141) set_button_color(4);
        else if (x > 106) set_button_color(3);
        else if (x > 70) set_button_color(2);
        else if (x > 35) set_button_color(1);
        else set_button_color(0);
        console.log(x);   
    }

    lbut.addEventListener('click', () => {
        x -= gap;
        xpos(); 
    })

    rbut.addEventListener('click', () => {
        x += gap;
        xpos(); 
    });

    function set_button_color(pos) {
        for(let i = 0; i < but.length; i++) {
            if(i === pos) but[i].style.color = "#c0b083";  // 해당 이미지 위치
            else but[i].style.color = "#ecc102";
        }
    }

    // 버튼 클릭 이벤트
    for (let i = 0; i < but.length; i++) {
        but[i].addEventListener('click', function () {
            const buttonIndex = i; // 현재 클릭한 버튼의 인덱스
            x = gap * buttonIndex; // 클릭한 버튼의 위치로 x 값 변경
            xpos();
        });
    }
}