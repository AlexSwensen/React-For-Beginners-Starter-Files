import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    // update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    // update state
    this.props.updateFish(this.props.index, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          onChange={this.handleChange}
          type="text"
          placeholder="Name"
          value={this.props.fish.name}
        />
        <input
          name="price"
          onChange={this.handleChange}
          type="text"
          placeholder="Price"
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          name="image"
          onChange={this.handleChange}
          type="text"
          placeholder="Image"
          value={this.props.fish.image}
        />
      </div>
    );
  }
}

export default EditFishForm;
