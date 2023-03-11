const hamburgerMenu = document.querySelector(`.hamb`);
const menu = document.querySelector('.navMobile');
const lineWmenu = document.querySelectorAll(`.line`);


const lineHamburgerBtnW100 = () =>{
    lineWmenu.forEach(line => {
        line.classList.toggle('HambBtnW100p');
    });
}


const showMenu = ()=>{
menu.classList.toggle(`showHideNav`);
// lineWmenu.classList.toggle('HambBtnW100p');
lineHamburgerBtnW100()
}



hamburgerMenu.addEventListener(`click`,showMenu );