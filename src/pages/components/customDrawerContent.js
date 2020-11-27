import React, {Component} from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import {IMAGE} from '../../constants/image';

export class CustomDrawerContent extends Component {
    render () {
      return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
          <DrawerContentScrollView>
          <View style={styles.topContainer}>
          <Image
            source={IMAGE.ICON_PROFILE}
            style={styles.profile}
          />
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.title}>João Paulo</Text>

          </View>

            <Text style={styles.username}>@jotape</Text>
            <View style={styles.data}>
            <View style={styles.connections}>
            <Text style={styles.number}>79</Text>
            <Text style={styles.text}> Conexões </Text>
            <Icon name="user-plus" size={18} color="#03c4a1" />

            </View>
          </View>
          </View>

          <DrawerItem 
            label={() => <Text style={styles.label}>Início</Text>}
            onPress={() => this.props.navigation.navigate('Tela inicial')}
            icon={() => <Icon name="home" size={22} color="#590995" />}
          />

          <DrawerItem 
            label={() => <Text style={styles.label}>Buscar</Text>}
            onPress={() => this.props.navigation.navigate('Buscar')}
            icon={() => <Icon name="search" size={22} color="#590995" />}
          />
       
          <DrawerItem style ={{paddingTop: 280}}
            label={() => <Text style={styles.label}>Sair</Text>}
            onPress={() => this.props.navigation.navigate('Acessar')}
            icon={() => <Icon name="sign-out" size={22} color="#590995"/>}
          />
          
          </DrawerContentScrollView>
          </View>
        
      );
  }
}

const styles = StyleSheet.create({

  topContainer: {
    padding: 15,
    borderBottomWidth: 0.2,
    borderBottomColor: '#2b353c',
    paddingTop: 25
  },
  profile: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 18,
    color: '#898f93',
  },
  data: {
    flexDirection: 'row',
    marginTop: 15,
  },
  connections: {
    flexDirection: 'row',
    marginRight: 15,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  text: {
    fontSize: 16,
    color: '#898f93',
  },
  label: {
    fontSize: 18,
    color: '#000000',
  },
})