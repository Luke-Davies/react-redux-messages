const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        {
          id: action.id,
          text: action.text,
        },
        ...state
      ]
    default:
      return state
  }
}

export default messages