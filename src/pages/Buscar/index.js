import React, {Component} from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import {CustomHeader} from '../components/index'

export class Buscar extends Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1}}>
        <CustomHeader title = 'Buscar' navigation = {this.props.navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Página onde serão exibidos resultados de busca.</Text>
        </View>
      </SafeAreaView>
      );
    }
}