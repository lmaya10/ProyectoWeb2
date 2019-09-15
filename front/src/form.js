import React from 'react';
import './form.css';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="form">
        <p>Escribenos!</p>
        <div>
          <form action="#" >
            <label>Nombre</label>
            <input type="text" id="fname" name="firstname" placeholder="Tu nombre.."
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}/> 

            <label>Apellido</label>
            <input type="text" id="lname" name="lastname" placeholder="Tu apellido.."
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}/>

            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Tu email.."
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}/>

            <label>Mensaje</label>
            <textarea id="message" name="message" placeholder="Escribe tu mensaje.."
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}></textarea>

            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
          </form >
        </div>
      </div>
    );
  }
}


export default Form;