import React from 'react'
import { buyCake } from '../redux/index'
import { useSelector, useDispatch } from 'react-redux';

// Note::-
// useSelector is redux hook that help us to access redux state and dispatch action without make mapStateToProps and dispatchActionToprpse function as mention in CakeContainer.js file
// useSelector function recive redux state as argument

// useDispatch is a redux hook , it's return a refrance  to dispatch function from the redux store and then save refrance in variable

function HookCakeContainer() {

    const numOfCake = useSelector(state => state.cake.numOfCake)

     const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cake- {numOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
