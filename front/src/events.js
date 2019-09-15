import React from "react";


const Event = (props) => {
  return (
    <div class="col-sm-4">
      <div class="card">
        <img class="card-img-top" src="https://m.eldiario.es/fotos/Fiesta-Time-Out_EDIIMA20171219_0147_19.jpg" alt="Card image cap"></img>
        <div class="card-body">
          <h5 class="card-title">{props.e.name}</h5>
          <p class="card-text">{props.e.bar}</p>
          <p class="card-text">{props.e.date}</p>
          <a href="#" class="btn btn-primary">Reservar</a>
        </div>
      </div>
    </div>
  );
};

export default Event;