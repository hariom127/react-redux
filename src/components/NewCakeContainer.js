import React, { useState } from 'react'
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>Number of cake- {props.numOfCake}</h2>
            <input type="text" value={number} onChange = {e => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

// NOTE :- name of function could be change but recommended to have same
// access redux state in our component by mapStateToPops function
const mapStateToProps = (state) => {
    return {
        numOfCake : state.cake.numOfCake
    }
}

// Dispatch a action using mapDispatchToProps function and allu use to map action creater to over component props
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
