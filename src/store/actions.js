export const toggleGood = (goodId) => {
    return {
        type: 'TOGGLE_GOOD',
        payload: goodId
    }
};

export const book = () => {
    return {
        type: 'BOOK'
    }
};