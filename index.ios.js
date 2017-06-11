import React from 'react'
import {AppRegistry} from 'react-native'
import App from './src/App'

export default class TheApp extends React.Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('TheApp', () => TheApp)
