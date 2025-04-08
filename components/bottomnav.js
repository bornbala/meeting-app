import React, { useState } from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons, Ionicons, FontAwesome, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNav = ({ onPressIcon1, onPressIcon2, onPressCenter, onPressIcon4, onPressIcon5 }) => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Agenda');
  const handleNavigate = (tabName, routeName) => {
    console.log(tabName)
    setActiveTab(tabName);
    navigation.navigate(routeName);
  };
  return (
    <NavBar>
      <NavIconWrapper onPress={() => handleNavigate('MeetingList', 'MeetingList')}>
        <IconCircle>
          <Ionicons name="checkmark-circle-outline" size={25} color="#555" />
        </IconCircle>
      </NavIconWrapper>

      <NavIconWrapper onPress={onPressIcon2}>
        <Ionicons name="chatbox-ellipses-outline" size={24} color="#555" />
      </NavIconWrapper>

      <CenterIconWrapper onPress={() => handleNavigate('Agenda', 'Agenda')}>
        <CenterCircle style={{backgroundColor:activeTab==='Agenda'?'#1434cb':"#555"}}>
          <FontAwesome name={activeTab === 'Agenda' ? 'users' : 'users'}
            size={24}
            color={activeTab === 'Agenda' ? '#ffffff' : '#1434cb'} />
        </CenterCircle>
      </CenterIconWrapper>

      <NavIconWrapper onPress={onPressIcon4}>
        <Ionicons name="file-tray-full-outline" size={24} color="#555" />
      </NavIconWrapper>

      <NavIconWrapper onPress={onPressIcon5}>
        <Feather name="menu" size={24} color="#555" />
      </NavIconWrapper>
    </NavBar>
  );
};

const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 15px;
  margin: 0 10px 10px;
  background-color: white;
  border-radius: 20px;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 5;
`;

const NavIconWrapper = styled.TouchableOpacity`
  position: relative;
  padding: 8px;
`;

const IconCircle = styled.View`
  background-color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;

const NotificationBadge = styled.View`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: red;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

const CenterIconWrapper = styled.TouchableOpacity`
  position: relative;
  top: -20px;
  justify-content: center;
  align-items: center;
`;

const CenterCircle = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 8;
`;

export default BottomNav;
