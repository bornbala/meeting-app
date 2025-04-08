import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import CommentModal from '../components/commentmodal';

const MeetingDetailScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const agendaItems = [
    {
      id: '01',
      title: 'Ensure the completion of committee quorum',
      updatedAt: 'Nov 6, 2023, 12:01 PM',
      documents: [
        { name: 'Doc1.pdf', commentCount: 8 },
        { name: 'Doc2.pdf', commentCount: 8 },
      ],
    },
    {
      id: '02',
      title: 'Ensure the completion of committee quorum',
      updatedAt: 'Nov 6, 2023, 12:01 PM',
      documents: [
        { name: 'Doc.pdf', commentCount: 8 },
      ],
    },
    {
      id: '03',
      title: 'Ensure the completion of committee quorum',
      updatedAt: 'Nov 6, 2023, 12:01 PM',
      documents: [
        { name: 'Doc.pdf', commentCount: 8 },
      ],
    },
    {
      id: '04',
      title: 'Ensure the completion of committee quorum',
      updatedAt: 'Nov 6, 2023, 12:01 PM',
      documents: [
        { name: 'Doc.pdf', commentCount: 8 },
      ],
    },
  ];

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('Agenda')}>
        <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <HeaderText>ARCC Meeting 2023 - Q1 Internal Audit - HIMIS</HeaderText>
      </Header>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {agendaItems.map((item, index) => (
          <Card key={item.id}>
            <ItemRow>
              <ItemId>{item.id}</ItemId>
              <ItemContent>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemTimestamp>Last Updated {item.updatedAt}</ItemTimestamp>
              </ItemContent>
            </ItemRow>
            {item.documents.map((doc, idx) => (
              <DocRow key={idx}>
                <DocIcon><Ionicons name="document" size={20} color="white" /></DocIcon>
                <DocName>{doc.name}</DocName>
                <IconRow>
                  <Ionicons name="eye-outline" size={20} color="#555" style={{ marginHorizontal: 6 }} />
                  <Ionicons name="print-outline" size={20} color="#555" style={{ marginHorizontal: 6 }} />
                  <CommentBadge onPress={() => setModalVisible(true)}>
                    <Ionicons name="chatbubble-ellipses-outline" size={20} color="#ff4d4f" />
                    <CommentCount>{doc.commentCount}</CommentCount>
                  </CommentBadge>
                </IconRow>
              </DocRow>
            ))}
          </Card>
        ))}
      </ScrollView>
      <CommentModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </Container>
  );
};

export default MeetingDetailScreen;

const Container = styled.View`
  flex: 1;
  background-color: #f2f2f2;
`;

const Header = styled.View`
  background-color: #0e31f5;
  padding: 30px 16px 16px 16px;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
`;

const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 16px;
`;

const ItemRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const ItemId = styled.Text`
  background-color: #e0e6ff;
  color: #3b3bff;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
`;

const ItemContent = styled.View`
  flex: 1;
`;

const ItemTitle = styled.Text`
  font-weight: bold;
`;

const ItemTimestamp = styled.Text`
  font-size: 12px;
  color: #888;
`;

const DocRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const DocIcon = styled.View`
  background-color: #00c389;
  border-radius: 20px;
  padding: 6px;
`;

const DocName = styled.Text`
  flex: 1;
  margin-left: 10px;
`;

const IconRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CommentBadge = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: #ffe6e6;
  padding: 4px 6px;
  border-radius: 12px;
`;

const CommentCount = styled.Text`
  color: #ff4d4f;
  font-size: 12px;
  margin-left: 4px;
  font-weight: bold;
`;
