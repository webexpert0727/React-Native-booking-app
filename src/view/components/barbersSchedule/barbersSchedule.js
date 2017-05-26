import React, { Component } from 'react';
import {
	View
} from 'react-native';

import Schedule from '../appointmentSchedule/appointmentSchedule';

export default class bookAppointment extends Component {
  static navigationOptions = {
    // title: 'Welcome',
    headerMode: 'none',
    header: null,
  };
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
    	<View>
	    	{this.props.value=='barber1'?
		      <View>
		     		<Schedule time="09:00" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
		     		<Schedule time="09:30" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
		     		<Schedule time="11:00" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
		     		<Schedule time="11:30" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
		     		<Schedule time="12:00" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
		     		<Schedule time="12:30" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
		      </View>:
			      <View>
			     		<Schedule time="09:00" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
			     		<Schedule time="09:30" timeAvailabilityOrName="Time is free"  openOrService="Booking appointment open" nextPage={this.props.bookModal}/>
			 			</View>}
		 	</View>
    );
  }
}