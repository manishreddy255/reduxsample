import React, { useState } from "react";
import { AddCake, BuyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    console.log(props)
  return (
    <div>
      <h1>Number Of Cakes- {props.numberOfCakes}</h1>
      <input type={"text"} value={number} onChange={(e) => setNumber(e.target.value)} />

      <button onClick={() => props.buyCake(number)} > Buy {number} Cakes </button>
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
    buyCake: (number) => dispath(BuyCake(number)),
    addCake: () => dispath(AddCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
