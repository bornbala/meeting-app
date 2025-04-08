import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import BottomNav from './bottomnav';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const MeetingListScreen = () => {
  const [activeTab, setActiveTab] = useState('Opened');

  const meetings = [
    {
      id: '1',
      title: 'Q1 Resolution',
      date: 'Nov 6, 2023',
      team: 'Board of Directors',
    },
    { id: '2', title: 'Q1 Resolution', date: 'Nov 6, 2023', team: 'Board of Directors' },
    { id: '3', title: 'Q1 Resolution', date: 'Nov 6, 2023', team: 'Board of Directors' },
    { id: '4', title: 'Q1 Resolution', date: 'Nov 6, 2023', team: 'Board of Directors' },
  ];

  return (
    <Container>
      <Header>
        <GreetingText>Hi John Doe</GreetingText>
        <ProfileImage source={{ uri: 'https://i.pravatar.cc/100' }} />
      </Header>

      <Title>Approvals</Title>

      <TabContainer>
        <TabButton active={activeTab === 'Opened'} onPress={() => setActiveTab('Opened')}>
          <TabText active>Opened</TabText>
          <Badge><BadgeText>6</BadgeText></Badge>
        </TabButton>
        <TabButton active={activeTab === 'Closed'} onPress={() => setActiveTab('Closed')}>
          <TabText>Closed</TabText>
        </TabButton>
      </TabContainer>

      <FlatList
        data={meetings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <InfoRow>
              <InfoBlock>
                <Ionicons name="calendar-outline" size={14} color="#f43f5e" />
                <InfoText>{item.date}</InfoText>
              </InfoBlock>
              <InfoBlock>
                <FontAwesome5 name="users" size={14} color="#f43f5e" />
                <InfoText>{item.team}</InfoText>
              </InfoBlock>
            </InfoRow>
          </Card>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <BottomNav />
    </Container>
  );
};

export default MeetingListScreen;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px 16px 0 16px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GreetingText = styled.Text`
  font-size: 16px;
  color: #64748b;
`;

const ProfileImage = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 8px;
`;

const TabContainer = styled.View`
  flex-direction: row;
  background-color: #f1f5f9;
  border-radius: 14px;
  padding: 4px;
  margin-bottom: 16px;
`;

const TabButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ active }) => (active ? '#f43f5e' : 'transparent')};
  border-radius: 12px;
  padding: 6px 14px;
  margin-right: 6px;
  width:50%
`;

const TabText = styled.Text`
  color: ${({ active }) => (active ? '#fff' : '#0f172a')};
  font-weight: 600;
  align-self:center;
`;

const Badge = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 2px 6px;
  margin-left: 6px;
`;

const BadgeText = styled.Text`
  font-size: 12px;
  color: #f43f5e;
  font-weight: bold;
`;

const Card = styled.View`
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 10px;
  border: 1px solid #e2e8f0;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 1;
`;

const CardTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const InfoBlock = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InfoText = styled.Text`
  font-size: 12px;
  color: #334155;
  margin-left: 4px;
`;
