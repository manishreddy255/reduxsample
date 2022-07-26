import React from "react";
import { AddCake, BuyCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
    console.log(props)
  return (
    <div>
      <h1>Number Of Cakes- {props.numberOfCakes}</h1>
      <button onClick={props.buyCake} > Buy Cakes </button>
      <button onClick={props.addCake} >Add Cakes</button>
    </div>
  );
}

// this will provide numberOfCakes object to 
// props in CakeContainer
const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numOfCakes,
  };
};

// this will provide the method to dispatch
// to the props and you can call the methods
const mapDispatchToProps = (dispath) => {
  return {
    buyCake: () => dispath(BuyCake()),
    addCake: () => dispath(AddCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
