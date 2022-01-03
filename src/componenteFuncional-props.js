import ReactDom from 'react-dom';



const TarjetaFruta = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <hr />
      <p>Description....</p>
  </div>
  )
}

const App = () =>(
  <div>
    <TarjetaFruta name='Roxi'/>
    <TarjetaFruta name='andy'/>
    <TarjetaFruta name='leo'/>
  </div>
)


ReactDom.render(<App />, document.getElementById('root'))

