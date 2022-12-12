/* Criando as constantes do formulário de criação de conta */
const form = document.getElementById('form'); /* Form */
const username = document.getElementById('username'); /* Nome do usuário */
const email = document.getElementById('email'); /* Email */
const password = document.getElementById('password'); /* Senha */
const password2 = document.getElementById('password2'); /* Confirmação de senha */

/* Função de submeter o cadastro */
form.addEventListener('submit', e => {
	e.preventDefault();
	/* Checa os inputs */
	checkInputs();
});

/* Função de checar os dados */
function checkInputs() {
	/* Constantes para checar se os valores estão vazios */
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	/* Se estiver vazio quando o cadastro for submetido, dá erro */
	if(usernameValue === '') {
		setErrorFor(username, 'A área do nome não pode estar vazia'); /* Retorno de mensagem para que seja preenchido */
	} else {
		setSuccessFor(username); /* Caso preenchido, houve sucesso em submeter o cadastro */
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'A área de email não pode estar vazia'); /* Retorno de mensagem para que seja preenchido */
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'O email inserido não é válido'); /* O email inserido é inválido */
	} else {
		setSuccessFor(email); /* Caso preenchido, houve sucesso em submeter o cadastro */
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'A área da senha não pode estar vazia'); /* Retorno de mensagem para que seja preenchido */
	} else {
		setSuccessFor(password); /* Caso preenchido, houve sucesso em submeter o cadastro */
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'A área de confirmação de senha não pode estar vazia'); /* Retorno de mensagem para que seja preenchido */
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'As senhas não condizem'); /* A confirmação de senha deve ser igual a senha inserida, senão dá erro */
	} else{
		setSuccessFor(password2); /* Caso preenchido, houve sucesso em submeter o cadastro */
	}
}

/* Função de retorno de mensagem em caso de erro */
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	/* Caso errado, retorna mensagem */
	formControl.className = 'form-control error';
	small.innerText = message;
}

/* Função de sucesso do cadastro */
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

/* Validação de email */
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

/* Visibilidade e responsividade */
floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});