import ReactDom from 'react-dom';



const TarjetaFruta = () => {
  return (
    <div>
      <h3>Titulo</h3>
      <hr />
      <p>Description....</p>
  </div>
  )
}

const App = () =>(
  <div>
    <TarjetaFruta />
    <TarjetaFruta />
    <TarjetaFruta />
  </div>
)


ReactDom.render(<App />, document.getElementById('root'))

