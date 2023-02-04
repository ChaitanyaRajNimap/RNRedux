import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {buyIceCream} from '../redux';

const IceCreamContainer = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={styles.heading}>
        Number of Ice Creams : {numOfIceCreams}{' '}
      </Text>
      <Button title="Buy Ice Cream" onPress={() => dispatch(buyIceCream())} />
    </View>
  );
};

export default IceCreamContainer;

const styles = StyleSheet.create({
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
