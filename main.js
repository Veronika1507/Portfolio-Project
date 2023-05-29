/*Dark Mode #1*/
function darkmode() {
    const body = document.body 
    const wasDarkmode = localStorage.getItem('darkmode')==='true'

    localStorage.setItem ('darkmode', !wasDarkmode)
    body.classList.toggle('dark-mode', !wasDarkmode)
}

document.querySelector('.switch').addEventListener('click', darkmode)

function onload() {
    document.body.classList.toggle('dark-mode',localStorage.getItem('darkmode')==='true')
}
document.addEventListener('DOMContentLoaded', onload) 

/*Dark Mode #2*/

/*let SwitchButton = document.getElementById('.switch');
switch.onclick = function () {
    let theme = document.getElementById('theme');

    if (theme.getAttribute("href") == "./resources/css/style.css") {
        theme.href = "dark-mode.css";
    } else {
        theme.href = "./resources/css/style.css";
    }
} */