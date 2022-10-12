# react-native-dialogflow (react-native-api-ai)

## Upgraded to DialogFlow CX V3, for Expo Managed React Native Apps by Stuart Mainwaring

# Additions dialogflowConfig parameters in your env.js file are:
locationId
agentId


## To install
yarn install from GitHub

## Example usage

### Create a env.js file that contains your Service Account JSON and add in the following additional parameters:
locationId
agentId


### Example App with react-native-gifted-chat

import React, { Component } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V3 } from 'react-native-dialogflow';

import { dialogflowConfig } from './env';

const BOT_USER = {
	_id: 2,
	name: 'FAQ Bot',
	avatar: 'https://i.imgur.com/7k12EPD.png'
};

class App extends Component {
	state = {
    msgCounter:1,
		messages: [
			{
				_id: 1,
				text: `Hi! I am the FAQ bot 🤖 from Jscrambler.\n\nHow may I help you with today?`,
				createdAt: new Date(),
				user: BOT_USER
			}
		]
	};

	componentDidMount() {
		Dialogflow_V3.setConfiguration(
			dialogflowConfig.client_email,
			dialogflowConfig.private_key,
			Dialogflow_V3.LANG_ENGLISH_US,
			dialogflowConfig.project_id,
            dialogflowConfig.locationId,
            dialogflowConfig.agentId
		);
	}

	handleGoogleResponse(result) {
    // Text Response
    try {

      let text = result.queryResult.responseMessages[0].text.text[0];

      let msg = {
        _id: this.state.messages.length + 1,
        text,
        createdAt: new Date(),
        user: BOT_USER
      };

      this.sendBotResponse(msg);

    } catch {
      let payload = result.queryResult.responseMessages[0].payload;
      payload._id = this.state.messages.length + 1;
      this.sendBotResponse(payload);
    }
  }


	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages)
		}));

		let message = messages[0].text;
		Dialogflow_V3.requestQuery(
			message,
			result => this.handleGoogleResponse(result),
			error => console.log("err:",error)
		);
	}

	sendBotResponse(msg) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, [msg])
		}));
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<GiftedChat
					messages={this.state.messages}
					onSend={messages => this.onSend(messages)}
					user={{
						_id: 1
					}}
				/>
			</View>
		);
	}
}

export default App;