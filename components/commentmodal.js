import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const CommentModal = ({ visible, onClose }) => {
  const [commentText, setCommentText] = useState('');
  const [commentType, setCommentType] = useState('Private');
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [comments, setComments] = useState([
    { id: '1', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '2', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Public' },
    { id: '3', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '4', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '5', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Public' },
    { id: '6', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '7', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '8', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Public' },
    { id: '9', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '10', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '11', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Public' },
    { id: '12', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '13', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
    { id: '14', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Public' },
    { id: '15', text: 'Comment text comes here', time: 'Nov 6, 2023, 12:01 PM', type: 'Private' },
  ]);

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        id: (comments.length + 1).toString(),
        text: commentText,
        time: 'Nov 6, 2023, 12:01 PM',
        type: commentType,
      };
      setComments([newComment, ...comments]);
      setCommentText('');
    }
  };

  const handleDeleteComment = (id) => {
    setCommentToDelete(id);
    setDeleteConfirmationVisible(true);
  };
  
  const confirmDeleteComment = () => {
    setComments(comments.filter(comment => comment.id !== commentToDelete));
    setCommentToDelete(null);
    setDeleteConfirmationVisible(false);
  };
  

  const filteredComments = comments.filter(comment => comment.type === commentType);

  const renderCommentItem = ({ item }) => (
    <CommentCard>
      <CommentHeader>
        <CommentIndex>{item.id.padStart(2, '0')}</CommentIndex>
        <CommentText>{item.text}</CommentText>
        <TouchableOpacity onPress={() => handleDeleteComment(item.id)}>
          <TrashIcon name="trash" size={20} color="#f87171" />
        </TouchableOpacity>
      </CommentHeader>
      <Timestamp>Last Updated  {item.time}</Timestamp>
    </CommentCard>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <Overlay>
        <Container>
          <Header>
            <Title>Comments</Title>
            <Badge>{filteredComments.length}</Badge>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close-circle-outline" size={28} color="#1e3a8a" />
            </TouchableOpacity>
          </Header>

          <SubTitle>Doc 1.pdf</SubTitle>

          <TextArea
            placeholder="Add comment"
            multiline
            value={commentText}
            onChangeText={setCommentText}
          />

          <RadioGroup>
            <RadioOption onPress={() => setCommentType('Private')}>
              <RadioCircle selected={commentType === 'Private'} />
              <RadioLabel>Private</RadioLabel>
            </RadioOption>
            <RadioOption onPress={() => setCommentType('Public')}>
              <RadioCircle selected={commentType === 'Public'} />
              <RadioLabel>Public</RadioLabel>
            </RadioOption>
          </RadioGroup>

          <ButtonGroup>
            <CancelButton onPress={onClose}>
              <ButtonTextCancel>Cancel</ButtonTextCancel>
            </CancelButton>
            <AddButton onPress={handleAddComment}>
              <ButtonText>Add</ButtonText>
            </AddButton>
          </ButtonGroup>

          <FlatList
            data={filteredComments}
            keyExtractor={item => item.id}
            renderItem={renderCommentItem}
            style={{ marginTop: 10 }}
          />
        </Container>
      </Overlay>
      {deleteConfirmationVisible && (
  <Modal transparent visible={deleteConfirmationVisible} animationType="fade">
    <Overlay>
      <ConfirmBox>
        <WarningIconWrapper>
          <Ionicons name="warning-outline" size={40} color="#facc15" />
        </WarningIconWrapper>
        <ConfirmText>Are you sure you want to delete this comment?</ConfirmText>

        <ButtonGroup>
          <CancelButton onPress={() => setDeleteConfirmationVisible(false)}>
            <ButtonTextCancel>Cancel</ButtonTextCancel>
          </CancelButton>
          <AddButton onPress={confirmDeleteComment}>
            <ButtonText>Ok</ButtonText>
          </AddButton>
        </ButtonGroup>
      </ConfirmBox>
    </Overlay>
  </Modal>
)}

    </Modal>
  );
};

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 16px;
  padding: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Badge = styled.Text`
  background-color: #ef4444;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: 8px;
  font-size: 12px;
`;

const SubTitle = styled.Text`
  margin-top: 12px;
  font-weight: bold;
`;

const TextArea = styled.TextInput`
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  height: 100px;
  padding: 10px;
  margin-top: 10px;
`;

const RadioGroup = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

const RadioOption = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

const RadioCircle = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #1e3a8a;
  background-color: ${props => (props.selected ? '#1e3a8a' : 'transparent')};
  margin-right: 6px;
`;

const RadioLabel = styled.Text`
  font-size: 14px;
`;

const ButtonGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const CancelButton = styled.TouchableOpacity`
  padding: 10px 20px;
  border: 1px solid #1e3a8a;
  border-radius: 20px;
`;

const AddButton = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #1e3a8a;
  border-radius: 20px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const ButtonTextCancel = styled.Text`
  color: #1e3a8a;
  font-weight: bold;
`;

const CommentCard = styled.View`
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 10px;
  margin-top: 10px;
`;

const CommentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CommentIndex = styled.Text`
  font-weight: bold;
  color: #3b82f6;
  margin-right: 8px;
`;

const CommentText = styled.Text`
  flex: 1;
  font-size: 14px;
`;

const Timestamp = styled.Text`
  font-size: 10px;
  color: #6b7280;
  margin-top: 4px;
`;

const TrashIcon = styled(Ionicons)``;

const ConfirmBox = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  align-items: center;
`;

const WarningIconWrapper = styled.View`
  background-color: #fef3c7;
  padding: 16px;
  border-radius: 50px;
  margin-bottom: 12px;
`;

const ConfirmText = styled.Text`
  font-size: 14px;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 500;
`;


export default CommentModal;
