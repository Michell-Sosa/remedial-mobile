import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Container} from './styles/appStyles';
import Home from './components/Home';

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}
