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
                        description: 'Event 1',
                        startDate: this.generateDates(0),
                        endDate: this.generateDates(2),
                        color: 'blue',
                      },
                      {
                        id: 2,
                        description: 'Event 2',
                        startDate: this.generateDates(1),
                        endDate: this.generateDates(4),
                        color: 'red',
                      },
                      {
                        id: 3,
                        description: 'Event 3',
                        startDate: this.generateDates(-5),
                        endDate: this.generateDates(-3),
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
            <Header />
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
                numberOfDays={7}
                onEventPress={(event) => Alert.alert('eventId:' + event.id)}
                headerStyle={styles.headerStyle}
                formatDateHeader="MMM D"
              />
            </View>
            <Button
              title="Add Event"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
            <View style={styles.button}>
            <Button
            title="Add Travel"
            onPress={() => Alert.alert('Simple Button pressed')}
            />
            </View>
            </View>
            <LearnMoreLinks />
            </View>
            </ScrollView>
            </SafeAreaView>
            </>
        );
    }
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
        margin: 10,
    },
    container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 22,
  },
  headerStyle: {
    backgroundColor: '#4286f4',
  },
});


export default CalendarScreen;
