import React from 'react';
import ReactDom from 'react-dom';

class TarjetaFruta extends React.Component {
  constructor (){
    super()

   this.agregar = this.agregar.bind(this)
   this.quitar = this.quitar.bind(this)

    const METHODS = [
      'agregar',
      'quitar',
      'limpiar'
    ]

    METHODS.forEach((method)=>{
      this[method]= this[method].bind(this)
    })

    this.state = {
      cantidad:0
    }
  }

  agregar(){
    this.setState({
      cantidad: this.state.cantidad+1
    })
  }
  quitar(){
    this.setState({
      cantidad: this.state.cantidad-1
    })
  }
  limpiar(){
    this.setState({
      cantidad: 0
    })
  }

  render (){
    return (
        <div>
          <h3>{this.props.name}</h3>
          <hr />
          <div>Cantidad:{this.state.cantidad}</div>
          <button 
          onClick={this.agregar}>
          +
          </button>
          <button 
          onClick={this.quitar}>
          -
          </button>
          <button 
          onClick={this.limpiar}>
          -
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

