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


const AdviceScreen: () => React$Node = () => {
    return (
        <View>
            <Text>Yeah text advice</Text>
            <Button
              title="Groups"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Following"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Physician Recommendation"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Your Physician"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <Button
              title="Your Story"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    );
};

export default AdviceScreen;
