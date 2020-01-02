import React, { Component } from 'react'
import { Button, Input } from 'antd'
import { connect } from "react-redux"
import request from './utils/request'

import { add, changeValue, del } from './store/createAction'

class App extends Component {

  onKeyPress = e => {
    if ( e.nativeEvent.keyCode === 13 ) {
      this.props.addItems( this.props.inputValue )
    }
  }

  componentDidMount () {
    request.post( 'ProjectManage/GetProjectManageData' ).then( res => {
      console.log( res )
    } )
  }

  render () {
    const { inputValue, list, addItems, delItems, onChange } = this.props
    return (
      <div className="todo-list">
        <Input value={ inputValue } onInput={ onChange } onKeyPress={ this.onKeyPress } />
        <Button onClick={ () => addItems( inputValue ) }>提交</Button>
        <div>
          <ul>
            {
              list.map( ( item, index ) => {
                return ( <li key={ item.id+index } onClick={ () => delItems( item.id ) }>{ item.title }</li> )
              } )
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapState = ( state ) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatch = ( dispatch ) => {
  return {
    onChange: e => {
      dispatch( changeValue( e.target.value ) )
    },
    addItems: value => {
      dispatch( add( value ) )
    },
    delItems: value => {
      dispatch( del( value ) )
    }
  }
}

export default connect( mapState, mapDispatch )( App )
