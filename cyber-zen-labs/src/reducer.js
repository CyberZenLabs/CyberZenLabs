

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

const setIsAboutBack = (state, action) => {

    const {
        status
    } = action

    return {
        ...state,
        isAboutBack: status
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

const setIsPage = (state, action) => {

    const {
        status
    } = action

    return {
        ...state,
        isPage: status
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

        case 'SET_IS_PAGE':
        return setIsPage(state, action);

        case 'SET_IS_ABOUT_BACK':
        return setIsAboutBack(state, action);
        default:
            throw new Error();
    }
};


export default reducer;