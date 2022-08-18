
const setIsBlackBack = (state, action) => {
    const {
        status
    } = action

    return {
        ...state,
        isBlackBack: status === 'black' ? '' : 'black'
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