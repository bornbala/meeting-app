import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login'; // adjust path if needed
import AgendaScreen from './components/agendascreen';
import MeetingDetailScreen from './components/meetingdetailscreen';
import MeetingListScreen from './components/meetinglistscreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
        <Stack.Screen name="MeetingDetail" component={MeetingDetailScreen} />
        <Stack.Screen name="MeetingList" component={MeetingListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
