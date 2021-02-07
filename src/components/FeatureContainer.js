import React from 'react'
import { featureBuy } from '../redux';
import { connect } from 'react-redux';

function FeatureContainer(props) {
    return (
        <div>
            <h2>Number of feature- {props.numOfFeature}</h2>
            <button onClick={props.featureBuy}>Buy Feature</button>
        </div>
    )
}

// NOTE :- name of function could be change but recommended to have same
// access redux state in our component by mapStateToPops function
const mapStateToProps = (state) => {
    return {
        numOfFeature : state.feature.numOfFeature
    }
}

// Dispatch a action using mapDispatchToProps function and allu use to map action creater to over component props
const mapDispatchToProps = (dispatch) => {
    return {
        featureBuy: () => dispatch(featureBuy())
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (FeatureContainer)
