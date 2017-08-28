import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    //indica si el contenido estara en columna o en fila
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

export  {CardSection};
