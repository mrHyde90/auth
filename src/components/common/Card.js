import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle} >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    //primero comenzamos con los borders
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    //segundo las sombras
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    //elevation
    elevation: 1,
    //Ahora los margenes
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export {Card};
