import React, { Component } from 'react';
import {
	View,
	Image,
	Text,
  Modal
} from 'react-native';

import BackNavbar from '../backNavbar/backNavbar';
import TabView from '../tabBarLink/tabBarLink';
import BarberScheduleDetails from '../barbersSchedule/barbersSchedule';
import styles from './appointmentCalenderStyle';
import CustomerpopUp from '../bookingModal/servicePicker/servicePicker';
import BarberpopUp from '../bookingModal/photos/photos';
import PopUp from '../bookingModal/appointmentInfo/appointmentInfo';
import SecretaryPopUp from '../bookingModal/appointInfo/appointInfo';
import Calendar from 'react-native-calendar';

const customDayHeadings = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let menuIcon= require('../../assets/menu.png');
let calendarIcon= require('../../assets/calendarBooking.png');

export default class appointmentCalender extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      barber1Active:true,
      barber2Active:false,
      modalVisible: false,
      calender: false,
      selectedDate: '',
    };
  }

  _navigateToAction(){
    return(
        this.setState({calender:true})
      )
  }
  _navigateToModal(){
    this.setState({modalVisible:true})
  }

  onBarber1Appointment(){
    this.setState({barber2Active:false})
    this.setState({barber1Active:true})
  }
  
  onBarber2Appointment(){
    this.setState({barber1Active:false})
    this.setState({barber2Active:true})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <BackNavbar backPage={this.props.backPage} imageLeft={menuIcon} imageRight={calendarIcon} action={()=>{this._navigateToAction()}}/>
        <View style={styles.tabView}>
          <TabView value="Barber1" active={this.state.barber1Active} nextPage={()=>{this.onBarber1Appointment()}} />
        	<TabView value="Barber2" active={this.state.barber2Active} nextPage={()=>{this.onBarber2Appointment()}}/>
        </View>
        {this.state.calender? 
        <View style={styles.calender}>
          <Calendar
            ref="calendar"
            eventDates={['2016-07-03', '2016-07-05', '2016-07-28', '2016-07-30']}
            events={[{date: '2016-07-04', hasEventCircle: {backgroundColor: 'powderblue'}}]}
            scrollEnabled
            showControls
            dayHeadings={customDayHeadings}
            monthNames={customMonthNames}
            titleFormat={'MMMM YYYY'}
            prevButtonText={'Prev'}
            nextButtonText={'Next'}
            onDateSelect={(date) => this.setState({ selectedDate: date })}
            onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
            onTouchNext={(e) => console.log('onTouchNext: ', e)}
            onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
            onSwipeNext={(e) => console.log('onSwipeNext', e)}
          />
        </View>:null}
        <BarberScheduleDetails value={this.state.barber1Active?'barber1':'barber2'} bookModal={()=>{this._navigateToModal()}}/>
        <Modal 
          animationType={"none"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => alert("modal is closed")}>
          {this.props.page=='customer'?
          	<CustomerpopUp onClose={(val) => this.setState({modalVisible : val})} />:this.props.page=='admin'?
          		<PopUp onClose={(val) => this.setState({modalVisible : val})} />:this.props.page=='secretary'?
                  <SecretaryPopUp onClose={(val) => this.setState({modalVisible : val})} />:
          				<BarberpopUp onClose={(val) => this.setState({modalVisible : val})} />
        	}
        </Modal>
      </View>
    );
  }
}