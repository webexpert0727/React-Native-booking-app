import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Login from './view/logIn/logIn';
import SignUp from './view/signUp/signUp';
import ShopHours from './view//admin/shopHours/shopHours';
import SignIn from './view/signIn/signIn';
import ResetPassword from './view/resetPassword/resetPassword';
import MyBarbers from './view/admin/myBarbers/myBarbers';
import Calender from './view/admin/calendar/calender';
import Appointments from './view/barber/appointments/appointments';
import MyProfile from './view/customer/myProfile/myProfile';
import EditProfile from './view/customer/editProfile/editProfile';
import UploadPhoto from './view/customer/uploadPhoto/uploadPhoto';
import BookAppointment from './view/customer/bookAppointment/bookAppointment';
import Home from './view/customer/home/home';
import MyCustomers from './view/admin/myCustomers/myCustomers';
import Profile from './view/admin/profile/profile';
import { StackNavigator } from 'react-navigation';
import SecretaryCalender from './view/secretary/calender/calender';

const App = StackNavigator({
	login: {screen: Login},
	calender: {screen: Calender},
	secretaryCalender: {screen: SecretaryCalender},
	appointments: {screen: Appointments},
	myCustomers: {screen: MyCustomers},
	profile: {screen: Profile},
	myBarbers:{screen:MyBarbers},
	signUp: {screen: SignUp},
	signIn: {screen: SignIn},
	home: {screen: Home},
	myProfile: {screen: MyProfile},
	shopHours: {screen: ShopHours},
	uploadPhoto: {screen: UploadPhoto},
	editProfile: {screen: EditProfile},
	resetPassword: {screen: ResetPassword},
	bookAppointment: {screen: BookAppointment}
});

AppRegistry.registerComponent('Barber', () => App);
