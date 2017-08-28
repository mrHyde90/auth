import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

 export default class LoginForm extends Component {
   state = {email: "", password: "", error: "", loading: false};

   onButtonPress(){
     const {email, password} = this.state;
     this.setState({error: '', loading: true});
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(this.onLoginSuccess.bind(this))
     .catch(() => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(this.onLoginSuccess.bind(this))
       .catch(this.onLoginError.bind(this));
     });
   }

  onLoginError(){
    this.setState({error: "Authentication error", loading: false});
  }

   onLoginSuccess(){
      this.setState({
        email: "",
        password: "",
        error: "",
        loading: false
      });
   }

   renderButton(){
    if(this.state.loading){
      return <Spinner size="small" />;
    }

    return(
        <Button onPress={this.onButtonPress.bind(this)}>
            Login!!
        </Button> // /
      );
   }

   render(){
     return(
       <Card>

        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value = {this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="password"
            value = {this.state.password}
            onChangeText={password => this.setState({password})}
           />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
       </Card>
     );
   }
 }

 const styles = StyleSheet.create({
   errorTextStyle: {
     fontSize: 20,
     color: 'red',
     alignSelf: 'center'
   }
 });
