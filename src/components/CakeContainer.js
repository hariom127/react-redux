import React from 'react'
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cake- {props.numOfCake}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
