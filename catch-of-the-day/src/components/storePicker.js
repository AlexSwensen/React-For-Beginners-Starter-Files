import React from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          required
          placeholder="enter store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;