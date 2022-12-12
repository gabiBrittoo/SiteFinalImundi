/* Função do icone cart */
let cart = document.querySelector('.cart');
/* Declarando os eventos ocorridos quando a função de cart é clicada */
document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active'); /* Cart fica ativo */
    loginForm.classList.remove('active'); /* Remove o login */
    navbar.classList.remove('active'); /* Remove a navBar */
}

/* Função do incone de login */
let loginForm = document.querySelector('.login-form');
/* Declarando os eventos ocorridos quando a função de icone é clicada */
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active'); /* Ativa o login */
    cart.classList.remove('active'); /* Fica desativado */
    navbar.classList.remove('active'); /* Fica desativado */
}

/* Função do icone de navBar */
let navbar = document.querySelector('.navbar');
/* Declarando os eventos ocorridos quando a função de navbar é clicada */
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); /* Ativa a navBar */
    cart.classList.remove('active'); /* Fica desativado */
    loginForm.classList.remove('active'); /* Fica desativado */
}

/* Quando a aba é abaixada/movimentada com o mouse o header continua fixo, e a função dos ícones também */
window.onscroll = () =>{
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

/* Função dos slides */
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

/* Função de passar para o próximo slide */
function next(){
    slides[index].classList.remove('active'); 
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

/* Função de passar para o slide anterior */
function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

