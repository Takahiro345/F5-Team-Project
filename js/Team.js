'use strict';
{
    const team = document.getElementById('TEAM-image');
    const page = document.getElementById('page');
    const pageHeight = page.scrollHeight - page.clientHeight;

    /*
    const gu = document.getElementById('GU-image');
    const se = document.getElementById('SE-image');
    const so = document.getElementById('SO-image');
    const ku = document.getElementById('KU-image');
    const le = document.getElementById('LE-image');
*/
    let y = 0;
    const gapPercentage = 19.5; // 이동할 퍼센트

    team.addEventListener('click', () => {
        y += (gapPercentage / 100) * pageHeight;
        page.scrollTop = y;
    })
}