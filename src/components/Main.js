import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import CreateAccount from './CreateAccount';
export default class Main extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="loginScreen"
						component={LoginScreen}
						animation='fade'
						hideNavBar={true}
						title='Login'
						initial={true}
					/>
					<Scene key="secondScreen"
						component={SecondScreen}
						animation='fade'
						hideNavBar={true}
					/>
					<Scene key="register"
						component={CreateAccount}
						animation='fade'
						title='Create Account'
						hideNavBar={false}
					/>
				</Scene>
			</Router>
		);
	}
}