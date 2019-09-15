import React from "react";


class Event extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cupos: this.props.cupos
    };
  }

  render() {
    return (
      <div class="col-sm-4">
        <div class="card">
          <img class="card-img-top" src="https://m.eldiario.es/fotos/Fiesta-Time-Out_EDIIMA20171219_0147_19.jpg" alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">{this.props.e.name}</h5>
            <p class="card-text">Lugar: {this.props.e.bar}</p>
            <p class="card-text">Fecha: {this.props.e.date}</p>
            <p class="card-text">Hora: {this.props.e.initialTime}</p>
            <p class="card-text">Precio: {this.props.e.price}</p>
            <p class="card-text">Comentarios{this.props.e.additionals}</p>
            <label htmlFor="btnVote">
              <button 
                onClick={ () => {
                  this.setState({
                    cupos: this.state.cupos-1
                  });
                }} 
                id="reservar" className="btn btn-primary">
                Reservar
              </button>
              <span>Cupos: <span id="cupos">{this.state.cupos}</span></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;