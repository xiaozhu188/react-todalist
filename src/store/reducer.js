import uuidv1 from 'uuid/v1'
import { INPUT_ACTION, ADD_ACTION, DELETE_ACTION } from './actionTypes'

const defaultState = {
  inputValue: '默认值',
  list: []
}

export default ( state = defaultState, action ) => {
  // console.log( action )
  let newState = JSON.parse( JSON.stringify( state ) )
  switch ( action.type ) {
    case INPUT_ACTION:
      newState.inputValue = action.value
      return newState
    case ADD_ACTION:
      newState.inputValue = ''
      if ( action.value !== '' ) {
        newState.list.push( {
          id: uuidv1,
          title: action.value
        } )
      }
      return newState
    case DELETE_ACTION:
      let id = action.value
      let index = newState.list.findIndex( item => item.id === id )
      newState.list.splice( index, 1 )
      return newState
    default:
      return state
  }
}
