import React from 'react';
import styles from  './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component {
  
    state = {
      cantidad:0
    }
    agregar = () => {
      this.setState({
        cantidad: this.state.cantidad+1
      })
    }
    quitar = () => {
      this.setState({
        cantidad: this.state.cantidad-1
      })
    }
    limpiar = () => {
      this.setState({
        cantidad: 0
      })
    }
  
    render (){
    const hasItems = this.state.cantidad > 0 
    const activeClass = hasItems ? styles['card-active']: ''
    const classes = styles.tarjetaFruta + '' + activeClass


      return (
          <div className={classes}>
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
            Limpiar
            </button>
            <p>Description....</p>
        </div>
      )
    }
  }

  export default TarjetaFruta