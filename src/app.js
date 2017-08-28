import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, Card, CardSection} from './components/common';
import LoginForm from './components/LoginForm';
/*
*Para poder hacer eso de Header from common
*crear el index y exportarlos hay
*para que se pueda exportar así cambia el export dentro de los components
*export {Header};
*cuando importas se buscara dentro de la carpeta common el index
*/
export default class App extends Component {

  state = {loggedIn: null};

  componentWillMount(){
    //put your firebase.initializeApp({}) here
    firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  });
    //se activa cuando cambia el estado del usuario, login o logout
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        this.setState({loggedIn: true});
      } else{
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent(){

    switch(this.state.loggedIn){
      case true:
        return(  
          <Card>
            <CardSection>
              <Button onPress={()=> firebase.auth().signOut() }> 
                Log Out! 
              </Button>
            </CardSection>
          </Card>
          );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }

  }

  render(){
    return(
      <View>
        <Header headerText={"Authentication"} />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
   buttonContainerStyle: {
     marginTop: 20
   }
 });