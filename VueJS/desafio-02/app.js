new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertaBotao() {
            alert('Alerta do botão')
        },
        ex2(event) {
            this.valor = event.target.value
        }
    }
})