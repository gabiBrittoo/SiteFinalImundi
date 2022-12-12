/* Variáveis */
let modalKey = 0
let quantProdutos = 1
let cart = []

/* Funções */
const seleciona = (elemento) => document.querySelector(elemento)
const selecionaTodos = (elemento) => document.querySelectorAll(elemento)

/* Formato válido equivale aos valores padrões do Brasil */
const formatoReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
const formatoMonetario = (valor) => {
    if(valor) {
        return valor.toFixed(2) /*  */
    }
}

/* Função para abertura da janela lateral de compra/pedidos */
const abrirModal = () => {
    seleciona('.produtoWindowArea').style.opacity = 0 /* Opacidade equivale a transparência */
    seleciona('.produtoWindowArea').style.display = 'flex' /* Define que o layout é flexível */
    setTimeout(() => seleciona('.produtoWindowArea').style.opacity = 1, 150) /* Quando selecionado, recebe opacidade/visibilidade */
}

/* Função para fechamente da janela lateral */
const fecharModal = () => {
    seleciona('.produtoWindowArea').style.opacity = 0 /* Opacidade nula */
    setTimeout(() => seleciona('.produtoWindowArea').style.display = 'none', 500) /* Quando selecionado, modifica o layout */
}

/* Função dos botões de fechamento */
const botoesFechar = () => {
    /* Declarando que a cada vez que os botões informados forem clicados 'click', a função fecharModal é ativada, e a janela lateral fecha */
    selecionaTodos('.produtoInfo--cancelButton, .produtoInfo--cancelMobileButton').forEach( (item) => item.addEventListener('click', fecharModal) )
}

/* Função de preenchimento de dados do produto */
const preencheDadosDosProdutos = (produtoItem, item, index) => {
    /* Declarando que os elementos dispostos à seguir equivalem a um dado do produto */
	produtoItem.setAttribute('data-key', index) /* data-key, guarda os itens à seguir */
    produtoItem.querySelector('.produto-item--img img').src = item.img /* Imagem */
    produtoItem.querySelector('.produto-item--price').innerHTML = formatoReal(item.price[2]) /* Preço */
    produtoItem.querySelector('.produto-item--name').innerHTML = item.name /* Nome */
    produtoItem.querySelector('.produto-item--desc').innerHTML = item.description /* Descrição */
}

/* Função de preenchimento de dados do modal */
const preencheDadosModal = (item) => {
    seleciona('.produtoBig img').src = item.img /* Declara que os dados do html, equivalem a um item do modal - Imagem */
    seleciona('.produtoInfo h1').innerHTML = item.name /* Nome */
    seleciona('.produtoInfo--desc').innerHTML = item.description /* Descrição */
    seleciona('.produtoInfo--actualPrice').innerHTML = formatoReal(item.price[2]) /* Preço */
}

/* Função para usar o data-key */
const pegarKey = (e) => {
    let key = e.target.closest('.produto-item').getAttribute('data-key') /* Retornando o item mais perto da classe produto-item */
    console.log('Produto Clicado ' + key) /* Informando a chave do produto clicado */
    console.log(produtoJson[key]) /* A chave está declarada em produtoJson na área de 'produto.js' */
    /* Declarando que a quantidade inicial/apresentada de produtos padrão, será sempre 1 */
    quantProdutos = 1
    /* Declando que a chave do modal, equivale ao item clicado */
    modalKey = key
    /* Retornando o item */
    return key
}

/* Função de preenchimento dos tamanhos/tipo de embalagem - esqueci de mudar o nome durante o vídeo de apoio que assisti */
const preencherTamanhos = (key) => {
    /* Ao um tipo de embalagem ser clicado, os outros são cancelados */
    seleciona('.produtoInfo--size.selected').classList.remove('selected')
    /* Função de seleção */
    selecionaTodos('.produtoInfo--size').forEach((size, sizeIndex) => {
        /* Declarando que é válido que todos os tipos sejam selecionados individualmente */
        (sizeIndex == 2) ? size.classList.add('selected') : ''
        size.querySelector('span').innerHTML = produtoJson[key].sizes[sizeIndex] /* Linkando o pordutos.js aos tipos de embalagem */
    })
}

/* Função de valor */
const escolherTamanhoPreco = (key) => {
    selecionaTodos('.produtoInfo--size').forEach((size, sizeIndex) => {
        size.addEventListener('click', (e) => {
            /* Se os dois primeiros tipos não estiverem sido clicados, declara que o padrão é o 3° tipo estar considerado como válido */
            /* Declara que se um item foi clicado, os outros são cancelados */
            seleciona('.produtoInfo--size.selected').classList.remove('selected')
            /* Quando um tipo de embalagem é selecionado, informa o programa da seleção */
            size.classList.add('selected')
            /* Preço das embalagens */
            seleciona('.produtoInfo--actualPrice').innerHTML = formatoReal(produtoJson[key].price[sizeIndex])
        })
    })
}

/* Função de alteração da quantidade do produto */
const mudarQuantidade = () => {
    /* Aumentar a quantidade */
    seleciona('.produtoInfo--qtmais').addEventListener('click', () => {
        quantProdutos++ /* Soma */
        seleciona('.produtoInfo--qt').innerHTML = quantProdutos
    })

    /* Diminuir a quantidade */
    seleciona('.produtoInfo--qtmenos').addEventListener('click', () => {
        if(quantProdutos > 1) {
            quantProdutos-- /* Subtrai, caso for um número maior ou igual a 1 */
            seleciona('.produtoInfo--qt').innerHTML = quantProdutos
        }
    })
} 

/* Função de adição de produtos ao carrinho */
const adicionarNoCarrinho = () => {
    /* Declarando a função de adicionar ao carrinho, quando o botão de adição é clicado */
    seleciona('.produtoInfo--addButton').addEventListener('click', () => {
        console.log('Adicionar no carrinho')

        /* Produto */
    	console.log("Produto " + modalKey)
    	/* Tamanho */
	    let size = seleciona('.produtoInfo--size.selected').getAttribute('data-key')
	    console.log("Tamanho " + size)
	    /* Quantidade */
    	console.log("Quant. " + quantProdutos)
        /* Preço */
        let price = seleciona('.produtoInfo--actualPrice').innerHTML.replace('R$&nbsp;', '')
    
        /* Declarando uma função para mostrar o tipo de embalagem selecionado para cada produto */
	    let identificador = produtoJson[modalKey].id+'t'+size

        /* Adicionando no carrinho a identificação do produto e o tipo de embalagem selecionado */
        let key = cart.findIndex( (item) => item.identificador == identificador )
        console.log(key)

        /* Adicionando os produtos ao carrinho vazio */
        if(key > -1) {
            cart[key].qt += quantProdutos
        } else {
            /* Características dos produtos */
            let produto = {
                identificador, /* Qual o produto e embalagem selecionados */
                id: produtoJson[modalKey].id, /* Identificação */
                size, /* Tipo de embalagem */
                qt: quantProdutos, /* Quantidade */
                price: parseFloat(price) /* Preço */
            }
            /* Adiciona o produto ao carrinho */
            cart.push(produto)
            console.log(produto)
            /* Declara que o subtotal equivale a quantidade de produto x o preço do produto */
            console.log('Sub total R$ ' + (produto.qt * produto.price).toFixed(2))
        }

        /* Funções */
        fecharModal()
        abrirCarrinho()
        atualizarCarrinho()
    })
}

/* Função de abertura do carrinho */
const abrirCarrinho = () => {
    /* Declara a quantidade de itens no carrinho */
    console.log('Qtd de itens no carrinho ' + cart.length)
    if(cart.length > 0) {
	    seleciona('aside').classList.add('show') /* Exibe o carrinho quando requesitado */
        seleciona('header').style.display = 'flex' /* Layout do cabeçalho */
    }

    /* Mesma função, mas com responsividade adaptada a celulares e etc. */
    seleciona('.menu-openner').addEventListener('click', () => {
        if(cart.length > 0) {
            seleciona('aside').classList.add('show')
            seleciona('aside').style.left = '0'
        }
    })
}

/* Função de fechamento do carrinho */
const fecharCarrinho = () => {
    seleciona('.menu-closer').addEventListener('click', () => {
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}

/* Função de atualização do carrinho conforme modificado */
const atualizarCarrinho = () => {
	seleciona('.menu-openner span').innerHTML = cart.length

	if(cart.length > 0) {
		/* Declarando que o carrinho está visível */
		seleciona('aside').classList.add('show')
		/* Impede repetição de um mesmo comando já declarado */
		seleciona('.cart').innerHTML = ''

        /* Variáveis de subtotal e total */
		let subtotal = 0
		let total    = 0

        // para preencher os itens do carrinho, calcular subtotal
		for(let i in cart) {
			/* Declarando qual o produto selecionado e o seu id */
			let produtoItem = produtoJson.find( (item) => item.id == cart[i].id )
			console.log(produtoItem)

            /* O subtotal equivale ao preço de cada produto adicionado ao carrinho */
        	subtotal += cart[i].price * cart[i].qt

			//Exibir as informações do produto na tela, para preenchimento do carrinho
			let cartItem = seleciona('.models .cart--item').cloneNode(true)
			seleciona('.cart').append(cartItem)

			let produtoSizeName = cart[i].size /* Tipo de embalagem */
			let produtoName = `${produtoItem.name} (${produtoSizeName})` /* Nome do tipo de embalagem */

			/* Informações */
			cartItem.querySelector('img').src = produtoItem.img /* Imagem */
			cartItem.querySelector('.cart--item-nome').innerHTML = produtoName /* Nome */
			cartItem.querySelector('.cart--item--qt').innerHTML = cart[i].qt /* Quantidade */

			/* Declarando o método de adição de quantidade de um produto */
			cartItem.querySelector('.cart--item-qtmais').addEventListener('click', () => {
				console.log('Clicou no botão mais')
				cart[i].qt++
				/* Atualiza a quantidade do carrinho de acordo como foi ordenado */
				atualizarCarrinho()
			})

            /* Declarando o método de subtração de quantidade de um produto */
			cartItem.querySelector('.cart--item-qtmenos').addEventListener('click', () => {
				console.log('Clicou no botão menos')
				if(cart[i].qt > 1) {
					cart[i].qt--
				} else {
					/* Caso o cliente subtraia o valor até 0, o item é removido do carrinho */
					cart.splice(i, 1)
				}
                /* Caso o cliente subtraia o valor até 0, o item é removido do carrinho */
                (cart.length < 1) ? seleciona('header').style.display = 'flex' : ''
                /* Atualiza a quantidade do carrinho de acordo como foi ordenado */
				atualizarCarrinho()
			})

			seleciona('.cart').append(cartItem)

		}

		/* Declarando o valor total da compra */
		total = subtotal /* Total equivale a soma do subtotal */
		seleciona('.subtotal span:last-child').innerHTML = formatoReal(subtotal)
		seleciona('.total span:last-child').innerHTML    = formatoReal(total)

	} else {
		/* Fecha o carrinho */
		seleciona('aside').classList.remove('show')
		seleciona('aside').style.left = '100vw'
	}
}

/* Função de finalização da compra */
const finalizarCompra = () => {
    seleciona('.cart--finalizar').addEventListener('click', () => {
        console.log('Finalizar compra')
        /* Quando a compra é finalizada o carrinho se fecha */
        seleciona('aside').classList.remove('show')
        seleciona('aside').style.left = '100vw'
        seleciona('header').style.display = 'flex'
    })
}

/* Função de mapeamento da lista presente em produtos.js */
produtoJson.map((item, index ) => {
    let produtoItem = document.querySelector('.models .produto-item').cloneNode(true)
    seleciona('.produto-area').append(produtoItem) /* Os itens devem estar presentes na classe indicada */
    /* Preenchimento dos dados de cada produto */
    preencheDadosDosProdutos(produtoItem, item, index)
    /* Função de declaração e identificação do produto selecionado */
    produtoItem.querySelector('.produto-item a').addEventListener('click', (e) => {
        e.preventDefault()
        console.log('Clicou no produto')

        /* Seleciona a chave */
        let chave = pegarKey(e)
        /* Função de abertura do modal */
        abrirModal()
        /* Função de preenchimento dos dados de acordo com o item/produto selecionado */
        preencheDadosModal(item)
        /* Função do tipo de embalagem */
        preencherTamanhos(chave)
        /* Quantidade padrão de produtos deve ser 1 */
		seleciona('.produtoInfo--qt').innerHTML = quantProdutos
        /* Preço */
        escolherTamanhoPreco(chave)
    })

    /* Método de fechamento */
    botoesFechar()

}) 

/* Funções */
mudarQuantidade() 
adicionarNoCarrinho()
atualizarCarrinho()
fecharCarrinho()
finalizarCompra()
