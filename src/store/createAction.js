import { INPUT_ACTION, ADD_ACTION,DELETE_ACTION } from './actionTypes'

const changeValue = value => ( {
  type: INPUT_ACTION,
  value
} )

const add = value => ( {
  type: ADD_ACTION,
  value
} )

const del = value => ( {
  type: DELETE_ACTION,
  value
} )

export {
  changeValue,
  add,
  del
}
