import React from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  myInput = React.createRef(); // reference for a binding that a form element will be bound to

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="enter store name"
          defaultValue={getFunName()}
          ref={this.myInput}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
