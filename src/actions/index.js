let nextMsgId = 0
export const addMessage = (text) => ({
  type: 'ADD_MESSAGE',
  id: nextMsgId++,
  text
})