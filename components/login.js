// App.js
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TextInput, TouchableOpacity, Switch, Image, View } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export default function Login({ navigation }) {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <BackButton>
          <Feather name="arrow-left" size={24} color="black" />
        </BackButton>
        <Logo source={require('../assets/logo.png')} resizeMode="contain" />
        <Title><Bold>Alpha </Bold><Red>Meeting</Red> <Plus>++</Plus></Title>
      </Header>

      <Form>
        <Input placeholder="User Name" placeholderTextColor="#999" />
        <Input placeholder="Password" placeholderTextColor="#999" secureTextEntry />
        <OfflineRow>
          <OfflineText>Offline</OfflineText>
          <Switch
            value={isOffline}
            onValueChange={setIsOffline}
            thumbColor={isOffline ? '#fff' : '#fff'}
            trackColor={{ false: '#ccc', true: 'blue' }}
          />
        </OfflineRow>
        <LoginButton onPress={() => navigation.navigate('Agenda')}>
          <LoginButtonText>LOGIN</LoginButtonText>
        </LoginButton>

        <ForgotPassword>
          <ForgotText>Forgot Password?</ForgotText>
        </ForgotPassword>

        <DividerContainer>
          <Divider />
          <OrText>Or</OrText>
          <Divider />
        </DividerContainer>

        <Fingerprint>
          <FingerprintImage source={require('../assets/fingerprint.png')} />
        </Fingerprint>
      </Form>

      <Footer>
        <PrivacyText>Privacy Policy</PrivacyText>
        <FooterRow>
          <FooterLeft>©2023 Alpha Meeting++</FooterLeft>
          <FooterRight>v 6.4.1</FooterRight>
        </FooterRow>
      </Footer>
    </Container>
  );
}

// Styled Components

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  justify-content: space-between;
`;

const Header = styled.View`
  align-items: center;
  margin-top: 10px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 0;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
`;

const Title = styled.Text`
  font-size: 22px;
  margin-bottom: 20px;
`;

const Bold = styled.Text`
  font-weight: bold;
  color: #000;
`;

const Red = styled.Text`
  color: red;
  font-weight: 500;
`;

const Plus = styled.Text`
  color: red;
  font-size: 18px;
`;

const Form = styled.View`
  flex: 1;
  margin-top: 10px;
`;

const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 14px;
  font-size: 16px;
  margin-bottom: 16px;
`;

const OfflineRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const OfflineText = styled.Text`
  font-size: 16px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #1434cb;
  padding: 14px;
  border-radius: 25px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4.65px;
  elevation: 8;
  margin-bottom: 10px;
`;

const LoginButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const ForgotPassword = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 20px;
`;

const ForgotText = styled.Text`
  color: #1434cb;
`;

const DividerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

const Divider = styled.View`
  flex: 1;
  height: 1px;
  background-color: #ccc;
`;

const OrText = styled.Text`
  margin-horizontal: 10px;
  color: #555;
`;

const Fingerprint = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

const FingerprintImage = styled.Image`
  width: 60px;
  height: 60px;
`;

const Footer = styled.View`
  align-items: center;
`;

const PrivacyText = styled.Text`
  color: #1434cb;
  margin-bottom: 10px;
`;

const FooterRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const FooterLeft = styled.Text`
  font-size: 12px;
  color: #444;
`;

const FooterRight = styled.Text`
  font-size: 12px;
  color: #444;
`;
