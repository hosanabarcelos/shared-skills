import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

export class Login extends Component { 
  constructor(props) {
    super(props);
    this.state= {
      check_textInputChange: false,
      password: '',
      secureTextEntry: true
    }
  }

  textInputChange(value) {
    if(value.length!==0){
      this.setState({
        check_textInputChange: true
      });
    }
    else{
      this.setState({
        check_textInputChange: false
      });
  }
}

secureTextEntry() {
  this.setState({
    secureTextEntry: !this.state.secureTextEntry
  })
}

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.text_Welcome}>Bem vindo!</Text>

        </View>

       <Animatable.View 
       animation = 'fadeInUpBig'
       style = {styles.footer}>
         <Text style = {styles.text_E}>E-mail</Text>
         <View style = {styles.action}>
          <FontAwesome
          name= 'user'
          color= '#c62a88'
          size= {20}
          />

          <TextInput style = {styles.text_input}
          placeholder= 'Digite seu e-mail'
          onChangeText={(text) => this.textInputChange(text)}
          />

          {this.state.check_textInputChange ?
          <Animatable.View 
          animation = 'bounceIn'>
            <Feather
            name= 'check'
            color= '#008000'
            size= {20}
            />
          </Animatable.View>
          :null}
         </View>

         <Text style = {styles.text_S}>Senha</Text>
         <View style = {styles.action}>
          <FontAwesome
          name= 'lock'
          color= '#c62a88'
          size= {20}
          />
          {this.state.secureTextEntry ?
          <TextInput style = {styles.text_input}
          placeholder= 'Digite sua senha'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({
            password:text
          })}
          />
          :
          <TextInput style = {styles.text_input}
          placeholder= 'Digite sua senha'
          value={this.state.password}
          onChangeText={(text) => this.setState({
            password:text
          })}
          />
          }

          <TouchableOpacity onPress={() => this.secureTextEntry()}>
            {this.state.secureTextEntry ? 
          <Feather
          name= 'eye-off'
          color= '#808080'
          size= {20}
          />
          :
          <Feather
          name= 'eye'
          color= '#808080'
          size= {20}
          />
          }
          </TouchableOpacity>

         </View>
         <Text style = {{color: '#03c4a1', marginTop: 15}}>Esqueci minha senha</Text>

         <View>
           
        <TouchableOpacity style = {styles.login} 
        
        onPress = {() => this.props.navigation.navigate('Shared Skills')}>
          <Text style = {styles.text_Login}>Entrar</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style = {styles.register} 

        onPress = {() => this.props.navigation.navigate('Criar conta')}>
          <Text style = {styles.text_Register}>Criar conta</Text>          
        </TouchableOpacity>


         </View>
      
        </Animatable.View >
      </View>
    );
  }
}


var styles = StyleSheet.create ({
  text_Welcome: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30
  },
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
    flex:3, 
    backgroundColor: '#FFF', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    paddingHorizontal: 20, 
    paddingVertical: 30
  },
  text_E: {
    color: '#590995',
    fontSize: 18
  },
  text_S: {
    color: '#590995',
    fontSize: 18,
    marginTop: 35
},
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 5
  },
  text_input: {
    flex:1,
    paddingLeft: 10,
    color: '#590995'
  },
  login: {
    backgroundColor: '#590995', 
    width: '90%', 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 50,
    marginTop: 25
  },
  text_Login: {
    color: '#FFF', 
    fontSize: 18,
    alignItems: 'center', 
    justifyContent: 'center'

  },
  register: {
    marginTop: 12, 
    width: '90%', 
    height: 40,
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 50,
    borderWidth: 1, 
    borderColor: '#c62a88'
  },
    text_Register: {
      color: '#c62a88', 
      fontSize: 17,
      alignItems: 'center', 
      justifyContent: 'center'
    }

});