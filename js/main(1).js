'use strict';
{
    // -------------------------------------------------------------------------
    
    const currentURL = window.location.href;   // 현재 페이지의 html주소 가져오기
    //console.log(currentURL);
    
    const menuButton = document.getElementById('logo2'); // 로고
    const menubar = document.getElementById('header');  // 메뉴바
    
    const Team = document.getElementById('Team');  
    const I1 = document.getElementById('I1');
    const I2 = document.getElementById('I2');
    const Photo = document.getElementById('Photo');
    const main = document.getElementById('main');

    let menuVisible = true;

    /*-------------------------------------------------------------------------*/ 
    
    if (window.innerWidth <= 900) {
        main.style.marginLeft = '0'; 
    } else {
        if(currentURL.includes("Photo.html")) {
            menuVisible = false;
            menuVisible_true();
        } else {
            menuVisible_false();
        }        
    }  
    
    // 메뉴바 애니메이션    
    menuButton.addEventListener('click', () => {

        if(menuVisible) {
            menuVisible_true();
        } else {
            menuVisible_false();  
        }

        menuVisible = !menuVisible;
    });

    function menuVisible_true() {
        menubar.style.left = '-180px';
        menuButton.children[0].src = "images/logo2.png";
        menuButton.style.left = '-65px';
        main.style.marginLeft = '0';     
    }

    function menuVisible_false() {
        menubar.style.left = '0';
        menuButton.children[0].src = "images/logo1.png";
        menuButton.style.left = '30px';
        main.style.marginLeft = '180px';  
    }

    
    window.addEventListener("resize", function() {

        if (window.innerWidth <= 900) {
            main.style.marginLeft = '0'; 
        } else {
            if(menuVisible) {
                menuVisible_true();
            } else {
                menuVisible_false();  
            }
        }
    });

    /*-------------------------------------------------------------------------*/ 

    // 현재 위치하는 곳이 어디인지 표시
    if(currentURL.includes("Team.html")) {
        Team.style.backgroundColor = '#fafafa';
    }
    else if(currentURL.includes("Interview1.html")) {
        I1.style.backgroundColor = '#fafafa';
    }
    else if(currentURL.includes("Interview2.html")) {
        I2.style.backgroundColor = '#fafafa';
    }
    else if(currentURL.includes("Photo.html")) {
        Photo.style.backgroundColor = '#fafafa';
    }


}