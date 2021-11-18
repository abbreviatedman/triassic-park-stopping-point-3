import { Component } from "react";

class NewSpeciesForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    clickHandler();
  };

  render() {
    return <form onSubmit={this.handleSubmit}></form>;
  }
}

export default NewSpeciesForm;
