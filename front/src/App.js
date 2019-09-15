import React from "react";
import Evento from "./events.js";

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
      <h2>Proximos Eventos</h2>
      <div className="row">
        { this.renderEvents() }
      </div>
    </div>
    );
  }
}

export default Events;