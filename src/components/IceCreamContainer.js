import React from 'react'
import { connect } from 'react-redux';
import { BuyIceCream } from '../redux';

function IceCreamContainer(props) {
  return (
    <div>
    <h1>Number Of IceCreams- {props.numOfIceCreams}</h1>
    <button onClick={props.buyIceCream} > Buy Cakes </button>
    {/* <button onClick={props.addCake} >Add Cakes</button> */}
  </div>
  )
}


const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCream,
  };
};

// this will provide the method to dispatch
// to the props and you can call the methods
const mapDispatchToProps = (dispath) => {
  return {
    buyIceCream: () => {
      console.log("clicked")
      dispath(BuyIceCream())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);