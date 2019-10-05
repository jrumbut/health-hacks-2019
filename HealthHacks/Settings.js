import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, {Component} from 'react';
import ToggleSwitch from 'toggle-switch-react-native'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Alert,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createBottomTabNavigator } from 'react-navigation-tabs';


class SettingsScreen extends Component{
  //state object
  state = { toggle: false };

  render() {
    return (
        <View>
            <Text>Yeah text</Text>
            <ToggleSwitch
              isOn={this.state.toggle}
              onColor="green"
              label="Notification"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="large"
              onToggle={isOn => this.setState({ toggle: isOn })}
            />
            <Button
              title="Alarm"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Smarthome Link"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Darkmode"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Font Size"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Font Color"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Calendar Background Color"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Date Format"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Week Start"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
  }
}

export default SettingsScreen;
