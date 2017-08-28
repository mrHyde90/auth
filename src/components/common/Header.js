import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//functional component, cant handle fetching data, static data, easy to write
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle} >{props.headerText}</Text>
      </View>
    );
  };

//justifyContent alinea en vertical, alignItems alinea en horizontal
const styles = StyleSheet.create({
  textStyle: { fontSize: 20 },
  viewStyle: { backgroundColor: '#F8F8F8',
    justifyContent: 'center', //alinea el contenido de manera vertical
    alignItems: 'center', //alinea el contenido de manera horizontal
    height: 60, //le agrega una altura de 60
    paddingTop: 15 //le agrega un padding de 15
    //shadowColor: '#000', //el color de la sombra, solo para ios
    //shadowOffset: { width: 0, height: 20 }, //la altura de la sombra
    //shadowOpacity: 0.9 //la fuerza del color
  }
});

export {Header};
