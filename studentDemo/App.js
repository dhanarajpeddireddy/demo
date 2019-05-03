import React, { Component } from 'react';  
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import Home from './src/screens/home';
import Add from './src/screens/add';  
import List from './src/screens/list';

const AppNavigator = createStackNavigator(  
  {
    Home: { screen: Home },
    Add: { screen: Add},
    List: { screen: List}
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return <AppContainer />;
  }
}