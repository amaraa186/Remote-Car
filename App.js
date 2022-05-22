import React from 'react';
import Controller from './src/modules/Controller';
import 'react-native-gesture-handler';
import { IPAddress } from './context/IPContext'

const App = () => {
  return (
    <IPAddress>
      <Controller />
    </IPAddress>
  )
};

export default App;
