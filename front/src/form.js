import React from 'react';
import './form.css';
import axios from 'axios';

const API_PATH = 'http://localhost:3001/ProyectoWeb2/api/contact/index.php';

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

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
  };

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
            <div>
              {this.state.mailSent &&
                <div>Gracias por comunicarte con nosotros.</div>
              }
            </div>
          </form >
        </div>
      </div>
    );
  }
}


export default Form;