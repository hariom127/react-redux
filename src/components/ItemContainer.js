import React from 'react'
import { connect } from 'react-redux'
import { buyCake,buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

/*
| mapStateToPops function take two peramiter first redux state and second component ownProps or other props
*/ 
const mapStateToPops = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCake : state.iceCream.numOfIceCream 
    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 const dispatchFunction =  ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
 return {
    buyItem : dispatchFunction
 }
}

export default connect(mapStateToPops, mapDispatchToProps)(ItemContainer)
