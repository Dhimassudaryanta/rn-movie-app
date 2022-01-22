export default (state = '', action) => {
    switch (action.type) {
        case "GET_TV_POPULAR":
            return action.payload;

        default:
            return state;
    }
};
