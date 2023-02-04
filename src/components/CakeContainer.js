import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {buyCake} from '../redux';

const CakeContainer = props => {
  return (
    <View>
      <Text style={styles.heading}>Number of cakes : {props.numOfCakes} </Text>
      <Button title="Buy Cake" onPress={props.buyCake} />
    </View>
  );
};

//To access state in component
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//For dispatching action to store
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

//connect = connects component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

const styles = StyleSheet.create({
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
