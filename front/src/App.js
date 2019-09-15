import React from "react";
import Evento from "./events.js";
import Form from "./form.js";

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    fetch("/eventos")
      .then(res => res.json())
      .then( events => this.setState({
        events: events
      }));
  }

  renderEvents() {
    return this.state.events.map( e => <Evento e={e}></Evento>);
  }

  render() {
    return ( <div>
      <div>
        <h2>Proximos Eventos</h2>
        <div className="row">
          { this.renderEvents() }
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div id="form2">
        <Form></Form>
      </div>
    </div>
    );
  }
}

export default Events;