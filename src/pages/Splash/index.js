import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { IMAGE } from '../../constants/image';


export class Splash extends Component {
    render() {
      return (
        <View style = {styles.container}>
        <View style = {styles.header}>
        <Animatable.Image 
            animation="bounceIn"
            duraton="1500"
            source={IMAGE.LOGO}
            style={styles.logo}
            resizeMode="stretch"
            />
        </View>

       <Animatable.View 
       animation = 'fadeInUpBig'
       style = {styles.footer}>

            <Text style={styles.title}>Você aprende ensinando ou ensina quando aprende?</Text>

        <TouchableOpacity style = {styles.login} 
        
        onPress = {() => this.props.navigation.navigate('Acessar')}>
          <Text style = {styles.text_Login}>Começar</Text>
        </TouchableOpacity>

      
        </Animatable.View >
      </View>
        );
      }
  }

var styles = StyleSheet.create ({

  container: {
    flex:1, 
    backgroundColor: '#590995'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex:0.5, 
    backgroundColor: '#FFF', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    paddingHorizontal: 20, 
    paddingVertical: 30
  },
  login: {
    backgroundColor: '#590995',
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    marginTop: 50
  },
  text_Login: {
    color: '#FFF', 
    fontSize: 18,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold'
},
logo: {
    width: 350,
    height: 350
}

});