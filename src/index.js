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
import BookAppointment from './view/customer/bookAppointment/bookAppointment';
import Home from './view/customer/home/home';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
	login: {screen: Login},
	myBarbers:{screen:MyBarbers},
	bookAppointment: {screen: BookAppointment},
	signUp: {screen: SignUp},
	signIn: {screen: SignIn},
	home: {screen: Home},
	myProfile: {screen: MyProfile},
	shopHours: {screen: ShopHours},
	uploadPhoto: {screen: UploadPhoto},
	editProfile: {screen: EditProfile},
	resetPassword: {screen: ResetPassword}
});

AppRegistry.registerComponent('Barber', () => App);
