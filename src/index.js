import React from "react"
import ReactDOM from "react-dom"
import store from './store'
import { Provider } from "react-redux"
import App from "./App"

const Root = function () {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  )
}

ReactDOM.render( <Root />, document.getElementById( "root" ) )
