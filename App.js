import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Container} from './styles/appStyles';
import Home from './components/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}
