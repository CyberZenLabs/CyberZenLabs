

const setIsBlackBack = (state, action) => {

    const {
        isBlackBack
    } = state

    // console.log('>>>>>>>>', isBlackBack)

    return {
        ...state,
        isBlackBack: isBlackBack === 'black' ? '' : 'black'
    }


}

const setIsHome = (state, action) => {

    const {
        status
    } = action

    return {
        ...state,
        isHome: status
    }


}

const setFalseBlackBack = (state, action) => {



    // console.log('>>>>>>>>', isBlackBack)

    return {
        ...state,
        isBlackBack: ''
    }


}



function reducer(state, action) {
    switch (action.type) {

        case 'SET_IS_BLACK':
            return setIsBlackBack(state, action);

        case 'SET_IS_HOME':
            return setIsHome(state, action);

        case 'SET_FALSE_BLACK_BACK':
            return setFalseBlackBack(state, action);

        default:
            throw new Error();
    }
};


export default reducer;