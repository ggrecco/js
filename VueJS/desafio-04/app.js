new Vue({
	el: '#desafio',
	data: {
		meuCSS: 'destaque',
		digitado: '',
		digitado2: 'b0',
		digitado3: false,
		cor: 'red',
		porcento: 0,
		nome_btn: 'Iniciar',
		estilo5: {
			width: '100px',
			height: '100px',
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.meuCSS = this.meuCSS == 'destaque' ? 'encolher' : 'destaque'
			}, 3000)
		},
		iniciarProgresso() {
			this.porcento = 0;
			let contador = setInterval(() => {
				if (this.porcento == '500') {
					clearInterval(contador)
					this.nome_btn = 'Reiniciar'
					// console.log(contador)
					// console.log(this.porcento)
					// console.log('esse código finaliza o contador')
					// se chamar denovo a função 
					// ele fica sempre reiniciando e aumentando a velocidade
					// this.iniciarProgresso()
				} else {
					this.porcento++;
				}
			}, 10)
		}
	}
})
