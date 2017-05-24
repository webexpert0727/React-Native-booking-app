import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './view/logIn/logIn';
import SignUp from './view/signUp/signUp';
import ShopHours from './view/shopHours/shopHours';
import SignIn from './view/signIn/signIn';
import ResetPassword from './view/resetPassword/resetPassword';
import MyBarbers from './view/myBarbers/myBarbers';
import MyProfile from './view/customer/myProfile/myProfile';
import EditProfile from './view/customer/editProfile/editProfile';
import UploadPhoto from './view/customer/uploadPhoto/uploadPhoto';
import Home from './view/customer/home/home';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
	login: {screen: Login},
	signUp: {screen: SignUp},
	signIn: {screen: SignIn},
	home: {screen: Home},
	shopHours: {screen: ShopHours},
	uploadPhoto: {screen: UploadPhoto},
	myProfile: {screen: MyProfile},
	editProfile: {screen: EditProfile},
	myBarbers:{screen:MyBarbers},
	resetPassword: {screen: ResetPassword}
});

AppRegistry.registerComponent('Barber', () => App);
