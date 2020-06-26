//sem react
// const container = document.querySelector('#App')

// const App = document.createElement("h2")
// App.innerHTML = "Contador com JS"

// container.appendChild(App)

const container = document.querySelector("#App")

// createElement("elemento", "propiedades p elemento", "conteudos e filhos para o elemento" )
// const App = React.createElement("h2", null, "contador com react")

function App(props) {

    // const Title = React.createElement("h2", null, props.title)
    // const Contador = React.createElement("h3", null, 0)
    // return React.createElement("div", { className: props.className }, [Title, Contador])

    const [contagem, setContagem] = React.useState(0)

    function increment(){
        setContagem(anterior => anterior + 1)        
    }

    function decrement(){
        setContagem(anterior => anterior - 1) 
    }

    return (
    <div className={props.className}>
        <h2>{props.title}</h2>
        <h3>{contagem}</h3>
        <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        </div>
    </div>
    )
}

//para renderizar dentro do container
// ReactDOM.render(App({ title: "contador com reaxt" }), container)
// ReactDOM.render(
//     React.createElement(App, { title: "Trabalhando com react", className: "contador" }, null),
    // container)
ReactDOM.render(
    <App title="Contador" className={'contador'} />,
    container)