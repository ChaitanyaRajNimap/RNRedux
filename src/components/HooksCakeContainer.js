import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../redux';

const HooksCakeContainer = () => {
  //useSelector = use to access state store in redux store
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  //useDispatch = use to dispatch an action to reducer
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.heading}>Hooks Number of cakes : {numOfCakes} </Text>
      <Button title="Hooks Buy Cake" onPress={() => dispatch(buyCake())} />
    </View>
  );
};

export default HooksCakeContainer;

const styles = StyleSheet.create({
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
