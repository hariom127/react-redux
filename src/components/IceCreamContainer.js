import React from 'react'
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of iceCream- {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy iceCream</button>
        </div>
    )
}

// NOTE :- name of function could be change but recommended to have same
// access redux state in our component by mapStateToPops function
const mapStateToProps = (state) => {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

// Dispatch a action using mapDispatchToProps function and allu use to map action creater to over component props
const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)
