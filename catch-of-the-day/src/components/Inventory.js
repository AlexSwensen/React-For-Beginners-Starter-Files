import React from "react";
import AddFishFrom from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import firebase from "firebase";
import { firebaseApp } from "../base";

class Inventory extends React.Component {
  authHandler = async authData => {
    console.log(authData);
  };

  authenticate = provider => {
    let authProvider;
    if (provider === "Github") {
      authProvider = new firebase.auth.GithubAuthProvider();
    } else if (provider === "Twitter") {
      authProvider = new firebase.auth.TwitterAuthProvider();
    } else if (provider === "Facebook") {
      authProvider = new firebase.auth.FacebookAuthProvider();
    }

    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };
  render() {
    return <Login authenticate={this.authenticate} />;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            fish={this.props.fishes[key]}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            key={key}
            index={key}
          />
        ))}
        <AddFishFrom addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
