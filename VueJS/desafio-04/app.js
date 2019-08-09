new Vue({
	el: '#desafio',
	data: {
		meuCSS: '',
		digitado: 'hue'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => { this.meuCSS = 'encolher' }, 3000),
				setInterval(() => { this.meuCSS = 'destaque' }, 5000)
		},
		iniciarProgresso() {

		}
	}
})
