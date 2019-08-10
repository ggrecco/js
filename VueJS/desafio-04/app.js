new Vue({
	el: '#desafio',
	data: {
		meuCSS: '',
		digitado: '',
		digitado2: 'b0',
		digitado3: false,
		cor: 'red',
		porcento: 400,
		nome_btn: 'Iniciar'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => { this.meuCSS = 'encolher' }, 3000),
				setInterval(() => { this.meuCSS = 'destaque' }, 5000)
		},
		iniciarProgresso() {
			let contador = setInterval(() => {
				if (this.porcento == '500') {
					clearInterval(contador)
					this.nome_btn = 'Reiniciar'
					// console.log(contador)
					// console.log(this.porcento)
					// console.log('esse código finaliza o contador')
				} else {
					this.porcento++;
				}
			}, 10)
		}
	}
})
