import { FEATURE_BUY } from './featureTypes'

const initialState = {
    numOfFeature : 30
}

const featureReducer = (state = initialState, action) => {
    
        switch (action.type) {
            case FEATURE_BUY: return {
                ...state,
                numOfFeature : state.numOfFeature - 2
            }
            default: return state;
        }
}

export default featureReducer
