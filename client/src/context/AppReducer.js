export default (state, action) => {
  switch (action.type) {
    case 'INPUT_GAME':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      }
    default:
      return state
  }
}
