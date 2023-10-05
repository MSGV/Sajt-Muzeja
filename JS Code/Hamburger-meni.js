let meni = document.querySelector('#meni-bar');
let navigacioniBar = document.querySelector('.navigacioni-bar');
meni.addEventListener('click', () =>{
    meni.classList.toggle('fa-times');
    navigacioniBar.classList.toggle('active');
});