import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

export class Register extends Component { 
  constructor(props) {
    super(props);
    this.state= {
      check_textInputChange: false,
      check_textInputChange_name: false,
      password: '',
      password_confirm: '',
      secureTextEntry: true,
      secureTextEntry_confirm: true
    }
  }
   textInputChange_name(value) {
    if(value.length!==0){
      this.setState({
        check_textInputChange_name: true
      });
    }
    else{
      this.setState({
        check_textInputChange_name: false
      });
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
secureTextEntry_confirm() {
  this.setState({
    secureTextEntry_confirm: !this.state.secureTextEntry_confirm
  })
}

  render() {
    return (
      <KeyboardAvoidingView style = {styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.text_Welcome}>Cadastre-se</Text>

        </View>

       <Animatable.View 
       animation = 'fadeInUpBig'
       style = {styles.footer}>
         
         <Text style = {styles.text_N}>Nome</Text>
         <KeyboardAvoidingView style = {styles.action}>
         <FontAwesome5
          name= 'pen'
          color= '#c62a88'
          size= {20}
          />

          <TextInput style = {styles.text_input}
          placeholder= 'Digite seu nome'
          onChangeText={(text) => this.textInputChange_name(text)}
          />

          
          {this.state.check_textInputChange_name ?
          <Animatable.View 
          animation = 'bounceIn'>
            <Feather
            name= 'check'
            color= '#008000'
            size= {20}
            />       
          </Animatable.View>
          :null}
         </KeyboardAvoidingView>

         <Text style = {styles.text_E}>Nome de usuário</Text>
         <KeyboardAvoidingView style = {styles.action}>
          <FontAwesome
          name= 'at'
          color= '#c62a88'
          size= {20}
          />

          <TextInput style = {styles.text_input}
          placeholder= 'Crie um nome de usuário'
          />
         </KeyboardAvoidingView>

         <Text style = {styles.text_E}>E-mail</Text>
         <KeyboardAvoidingView style = {styles.action}>
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
         </KeyboardAvoidingView>

         <Text style = {styles.text_S}>Senha</Text>
         <KeyboardAvoidingView style = {styles.action}>
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
         </KeyboardAvoidingView>

         <Text style = {styles.text_S}>Confirmar senha</Text>
         <KeyboardAvoidingView style = {styles.action}>
          <FontAwesome
          name= 'lock'
          color= '#c62a88'
          size= {20}
          />
          {this.state.secureTextEntry_confirm ?
          <TextInput style = {styles.text_input}
          placeholder= 'Confirme sua senha'
          secureTextEntry={true}
          value={this.state.password_confirm}
          onChangeText={(text) => this.setState({
            password_confirm:text
          })}
          />
          :
          <TextInput style = {styles.text_input}
          placeholder= 'Confirme sua senha'
          value={this.state.password_confirm}
          onChangeText={(text) => this.setState({
            password_confirm:text
          })}
          />
          }

          <TouchableOpacity onPress={() => this.secureTextEntry_confirm()}>
            {this.state.secureTextEntry_confirm ? 
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
         </KeyboardAvoidingView>

         <View>          
        <TouchableOpacity style = {styles.register} 
          onPress = {() => this.props.navigation.navigate('Shared Skills')}>
          <Text style = {styles.text_register}>Criar conta</Text>
        </TouchableOpacity>

        </View>
         <Text style = {{color: '#03c4a1', marginTop: 15, textAlign: 'center'}}>Já tenho conta</Text>
        <View>

         </View>
      
        </Animatable.View >
      </KeyboardAvoidingView>
    );
  }
}


var styles = StyleSheet.create ({
  text_Welcome: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
    position: 'absolute', left: 25
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
    flex:28, 
    backgroundColor: '#FFF', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    paddingHorizontal: 20, 
    paddingVertical: 30
  },
  text_N: {
    color: '#590995',
    fontSize: 18,
  },
  text_E: {
    color: '#590995',
    fontSize: 18,
    marginTop: 35
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
  register: {
    backgroundColor: '#590995', 
    width: '90%', 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 50,
    marginTop: 25
  },
  text_register: {
    color: '#FFF', 
    fontSize: 18
  }

});