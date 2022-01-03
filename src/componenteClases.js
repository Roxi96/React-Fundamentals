import React from 'react';
import ReactDom from 'react-dom';

class TarjetaFruta extends React.Component {
  constructor (){
    super()

    this.state = {
      cantidad:5
    }
  }
  render (){
    return (
      <div>
      <h3>{this.props.name}</h3>
      <hr />
      <div>Cantidad:{this.state.cantidad}</div>
      <button onClick={( )=> {
        this.setState({cantidad: this.state.cantidad+1})
      }}>
        Agregar
        </button>
      <p>Description....</p>
  </div>
    )
  }
}



const App = () =>(
  <div>
    <TarjetaFruta name='Roxi'/>
    <TarjetaFruta name='andy'/>
    <TarjetaFruta name='leo'/>
  </div>
)


ReactDom.render(<App />, document.getElementById('root'))

