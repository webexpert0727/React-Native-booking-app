import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './view/logIn/logIn';
import SignUp from './view/signUp/signUp';
import SignIn from './view/signIn/signIn';
import ResetPassword from './view/resetPassword/resetPassword'
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
	login: {screen: Login},
  signUp: {screen: SignUp},
	signIn: {screen: SignIn},
	resetPassword: {screen: ResetPassword}
});

AppRegistry.registerComponent('Barber', () => App);
