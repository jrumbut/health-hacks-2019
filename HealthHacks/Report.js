import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React from 'react';
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


const ReportScreen: () => React$Node = () => {
    return (
        <View>
            <Text>Yeah text Report</Text>
            <Button
              title="Daily Report"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Weekly Report"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Monthly Report"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Overview"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
};

export default ReportScreen;
