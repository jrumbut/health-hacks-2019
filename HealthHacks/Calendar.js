import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, {Component} from 'react';
import WeekView from 'react-native-week-view';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Alert,
    Text,
    StatusBar,
    Button,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class CalendarScreen extends Component{
    //state object
    state = { toggle: false };
    selectedDate = new Date();

    generateDates = (hours, minutes) => {
      const date = new Date();
      date.setHours(date.getHours() + hours);
      if (minutes != null) {
        date.setMinutes(minutes);
      }
      return date;
    };

    render() {
      const events = [
                      {
                        id: 1,
                        description: 'Sleep',
                        startDate: this.generateDates(10),
                        endDate: this.generateDates(18),
                        color: 'blue',
                      },
                      {
                        id: 2,
                        description: 'Sleep',
                        startDate: this.generateDates(34),
                        endDate: this.generateDates(42),
                        color: 'blue',
                      },
                      {
                        id: 3,
                        description: 'Sleep',
                        startDate: this.generateDates(58),
                        endDate: this.generateDates(66),
                        color: 'blue',
                      },
                      {
                        id: 4,
                        description: 'Sleep',
                        startDate: this.generateDates(82),
                        endDate: this.generateDates(90),
                        color: 'blue',
                      },
                      {
                        id: 5,
                        description: 'Sleep',
                        startDate: this.generateDates(106),
                        endDate: this.generateDates(114),
                        color: 'blue',
                      },
                      {
                        id: 6,
                        description: 'Sleep',
                        startDate: this.generateDates(130),
                        endDate: this.generateDates(138),
                        color: 'blue',
                      },
                      {
                        id: 7,
                        description: 'Sleep',
                        startDate: this.generateDates(154),
                        endDate: this.generateDates(162),
                        color: 'blue',
                      },
                      {
                        id: 8,
                        description: 'Sleep',
                        startDate: this.generateDates(178),
                        endDate: this.generateDates(186),
                        color: 'blue',
                      },
                      {
                        id: 9,
                        description: 'Sleep',
                        startDate: this.generateDates(-14),
                        endDate: this.generateDates(-6),
                        color: 'blue',
                      },
                      {
                        id: 10,
                        description: 'Sleep',
                        startDate: this.generateDates(154),
                        endDate: this.generateDates(162),
                        color: 'blue',
                      },
                      {
                        id: 17,
                        description: 'Traveling',
                        startDate: this.generateDates(-5),
                        endDate: this.generateDates(-2),
                        color: 'aqua',
                      },
                      {
                        id: 11,
                        description: 'HealthHacks',
                        startDate: this.generateDates(0),
                        endDate: this.generateDates(6),
                        color: 'aqua',
                      },
                      {
                        id: 12,
                        description: 'Traveling',
                        startDate: this.generateDates(6),
                        endDate: this.generateDates(8),
                        color: 'aqua',
                      },
                      {
                        id: 23,
                        description: 'Lunch',
                        startDate: this.generateDates(-1),
                        endDate: this.generateDates(0),
                        color: 'green',
                      },
                      {
                        id: 13,
                        description: 'Dinner',
                        startDate: this.generateDates(8),
                        endDate: this.generateDates(9,45),
                        color: 'green',
                      },
                      {
                        id: 14,
                        description: 'Studying',
                        startDate: this.generateDates(20),
                        endDate: this.generateDates(30),
                        color: 'aqua',
                      },
                      {
                        id: 15,
                        description: 'EAS501',
                        startDate: this.generateDates(30),
                        endDate: this.generateDates(32,15),
                        color: 'aqua',
                      },
                      {
                        id: 16,
                        description: 'Gym',
                        startDate: this.generateDates(32,30),
                        endDate: this.generateDates(33,30),
                        color: 'green',
                      },
                      {
                        id: 18,
                        description: 'Meeting',
                        startDate: this.generateDates(44),
                        endDate: this.generateDates(45,30),
                        color: 'red',
                      },
                      {
                        id: 19,
                        description: 'ECE570',
                        startDate: this.generateDates(48),
                        endDate: this.generateDates(50,15),
                        color: 'aqua',
                      },
                      {
                        id: 20,
                        description: 'CIS560',
                        startDate: this.generateDates(52,30),
                        endDate: this.generateDates(54,45),
                        color: 'aqua',
                      },
                      {
                        id: 21,
                        description: 'Gym',
                        startDate: this.generateDates(55),
                        endDate: this.generateDates(56,30),
                        color: 'green',
                      },
                      {
                        id: 22,
                        description: 'Lunch',
                        startDate: this.generateDates(46),
                        endDate: this.generateDates(46,45),
                        color: 'green',
                      },
                    ];
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style = {styles.titleBackground}>
            <Text style={styles.title}>Personal Sleep Advisor</Text>
            </View>
            <View style={styles.body}>
            <View style={styles.sectionContainer}>
            <Calendar
            // Initially visible month. Default = Date()
            current={'2019-10-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2022-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {console.log('selected day', day)}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Hide month navigation arrows. Default = false
            hideArrows={true}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={(direction) => (<Arrow />)}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
            />
            <View style={styles.button}>
            </View>
            <View style={styles.container}>
              <WeekView
                events={events}
                selectedDate={this.selectedDate}
                numberOfDays={3}
                onEventPress={(event) => Alert.alert('eventId:' + event.id)}
                headerStyle={styles.headerStyle}
                formatDateHeader="MMM D"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Add Event"
                onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            <View style={styles.button}>
              <Button
              title="Add Travel"
              onPress={() => Alert.alert('Simple Button pressed')}
              />
            </View>
            </View>
            </View>
            </ScrollView>
            </SafeAreaView>
            </>
        );
    };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
    button: {
        margin: 30,
        marginBottom: 10,
    },
    container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 22,
  },
  headerStyle: {
    backgroundColor: '#4286f4',
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "cornflowerblue",
  },
  titleBackground: {
    backgroundColor: "white",
  },
});


export default CalendarScreen;
