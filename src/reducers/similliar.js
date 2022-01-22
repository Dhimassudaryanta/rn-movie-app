export default (state = '', action) => {
    switch (action.type) {
        case "GET_SIMILLIAR_MOVIES":
            return action.payload;

        default:
            return state;
    }
};
