import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import CakeContainer from './src/components/CakeContainer';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.rootContainer}>
        <CakeContainer />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
