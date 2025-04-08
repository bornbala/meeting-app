import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';

const meetingData = [
  {
    id: '1',
    title: 'ARCC Meeting 2023 - Q1\nInternal Audit - HIMIS',
    department: 'Audit Risk and Compliance',
    commentary: 'Q2 Discussion Goals',
    date: 'Nov 6, 2023',
    duration: '1 hr',
    organizer: 'Badmin',
    attendees: ['R', 'S', 'T'],
    moreAttendees: 5,
  },
  {
    id: '2',
    title: 'Q3 Budget Review',
    department: 'Finance Department',
    commentary: 'Focus on revised forecasts',
    date: 'Dec 12, 2023',
    duration: '1.5 hr',
    organizer: 'FinanceLead',
    attendees: ['A', 'L', 'Z'],
    moreAttendees: 2,
  },
  {
    id: '3',
    title: 'Strategy Alignment Meeting',
    department: 'Executive Board',
    commentary: 'Annual goals & roadmaps',
    date: 'Jan 15, 2024',
    duration: '2 hr',
    organizer: 'CEO',
    attendees: ['X', 'Y', 'Z'],
    moreAttendees: 3,
  },
];

export default function AgendaScreen() {
  const renderMeetingCard = ({ item }) => (
    <MeetingCard>
      <MeetingTitle>{item.title}</MeetingTitle>
      <SubText>{item.department}</SubText>

      <Label>Commentary</Label>
      <Commentary>{item.commentary}</Commentary>

      <MeetingDetails>
        <DetailRow>
          <Feather name="calendar" size={16} color="#f24e8e" />
          <DetailText>{item.date}</DetailText>
        </DetailRow>
        <DetailRow>
          <Feather name="clock" size={16} color="#f24e8e" />
          <DetailText>{item.duration}</DetailText>
        </DetailRow>
      </MeetingDetails>

      <OrganizerAttendeeRow>
        <View>
          <Label>Organizer</Label>
          <OrganizerRow>
            <AvatarCircle>
              <AvatarText>{item.organizer[0]}</AvatarText>
            </AvatarCircle>
            <DetailText style={{ marginLeft: 6 }}>{item.organizer}</DetailText>
          </OrganizerRow>
        </View>

        <View>
          <Label>Attendees</Label>
          <AttendeeRow>
            {item.attendees.map((a, index) => (
              <AttendeeCircle key={index} color={['green', 'orange', 'purple'][index % 3]}>
                <AttendeeText>{a}</AttendeeText>
              </AttendeeCircle>
            ))}
            <MoreAttendees>+{item.moreAttendees}</MoreAttendees>
          </AttendeeRow>
        </View>
      </OrganizerAttendeeRow>

      <AgendaButton>
        <AgendaButtonText>Agenda 6</AgendaButtonText>
      </AgendaButton>
    </MeetingCard>
  );

  return (
    <Container>
      <Header>
        <GreetingRow>
          <UserText>Hi John Doe</UserText>
          <HeaderIcons>
            <Feather name="filter" size={20} color="#f24e8e" />
            <Feather name="bell" size={20} color="#f24e8e" style={{ marginLeft: 15 }} />
            <Avatar source={require('../assets/avatar.png')} />
          </HeaderIcons>
        </GreetingRow>
        <Greeting>Good Morning!</Greeting>
      </Header>

      <TabSwitch>
        <TabButton active>
          <TabText active>Agenda Items</TabText>
        </TabButton>
        <TabButton>
          <TabText>Library</TabText>
        </TabButton>
      </TabSwitch>

      <FlatList
        data={meetingData}
        renderItem={renderMeetingCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 20 }}
      />

      <BottomNav>
        <IconButton>
          <Ionicons name="chatbox-outline" size={24} color="#999" />
          <NotifBadge />
        </IconButton>
        <IconButton center>
          <CenterButton>
            <FontAwesome name="users" size={20} color="white" />
          </CenterButton>
        </IconButton>
        <IconButton>
          <Feather name="menu" size={24} color="#999" />
        </IconButton>
      </BottomNav>
    </Container>
  );
}


// --- Styled Components ---

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Header = styled.View``;

const GreetingRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-left: 15px;
`;

const UserText = styled.Text`
  font-size: 16px;
  color: #aaa;
`;

const Greeting = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
`;

const TabSwitch = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

const TabButton = styled.TouchableOpacity`
  flex: 1;
  background-color: ${(props) => (props.active ? '#1434cb' : '#f3f3f3')};
  padding: 10px;
  border-radius: 30px;
  align-items: center;
  margin-right: ${(props) => (props.active ? '8px' : '0')};
`;

const TabText = styled.Text`
  color: ${(props) => (props.active ? 'white' : '#555')};
  font-weight: bold;
`;

const MeetingCard = styled.View`
  background-color: #fff;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 3px;
`;

const MeetingTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
`;

const SubText = styled.Text`
  color: #999;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 12px;
  color: #888;
  margin-top: 10px;
`;

const Commentary = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
`;

const MeetingDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-vertical: 10px;
`;

const DetailRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const DetailText = styled.Text`
  margin-left: 6px;
  font-size: 14px;
`;

const OrganizerAttendeeRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OrganizerRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AvatarCircle = styled.View`
  background-color: #1434cb;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const AvatarText = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const AttendeeRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const AttendeeCircle = styled.View`
  background-color: ${(props) => props.color};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

const AttendeeText = styled.Text`
  color: white;
  font-size: 12px;
`;

const MoreAttendees = styled.Text`
  color: #555;
  font-size: 12px;
`;

const AgendaButton = styled.TouchableOpacity`
  background-color: #1434cb;
  padding: 10px;
  border-radius: 8px;
  margin-top: 12px;
  align-items: center;
`;

const AgendaButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const BottomNav = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-vertical: 10px;
  background-color: white;
  border-top-width: 1px;
  border-color: #eee;
`;

const IconButton = styled.TouchableOpacity`
  align-items: center;
`;

const CenterButton = styled.View`
  background-color: #1434cb;
  padding: 14px;
  border-radius: 32px;
  margin-top: -30px;
`;

const NotifBadge = styled.View`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 5px;
  position: absolute;
  top: -2px;
  right: -2px;
`;

