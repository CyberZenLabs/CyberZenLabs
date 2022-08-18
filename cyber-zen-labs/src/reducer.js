

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


function reducer(state, action) {
    switch (action.type) {

        case 'SET_IS_BLACK':
            return setIsBlackBack(state, action);

        default:
            throw new Error();
    }
};


export default reducer;