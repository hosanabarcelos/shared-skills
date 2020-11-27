import React, {Component} from 'react';
import { Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {CustomHeader} from '../components/index';
import {IMAGE} from '../../constants/image';

export class Messages extends Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#590995'}}>
      <CustomHeader title = 'Mensagens' isHome = {true} navigation = {this.props.navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE1} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Carlos da Silva</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Eaí mano, também estou no ramo do humor.</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> Agora mesmo</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE2} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>João Vitor</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Show, combinado!</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 5 minutos atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE2} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Rafael Souza</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>blz.</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 35 minutos atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE2} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Josué Barcelos</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Me add no discord.</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 1 hora atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE1} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Matheus Oliveira</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Ok.</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 2 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE2} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>David Castro</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Começamos as 20h</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 2 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE1} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Caio Lima</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Eu sei o básico do Typescript</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 5 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE2} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Rogério Ferreira</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Chamei você lá mano</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 5 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE1} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Erick Lobo</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>sim.</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 5 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE2} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Lucas Cruz</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Sim, vamos ir </Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 7 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE1} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Natan Junior</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>TOP!!!!!</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 7 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />

      <View style = { styles.row }>
        <Image source = {IMAGE.USERMESSAGE2} style = {styles.cellImage}/>
        <View style = { styles.textContainer}>
          <Text style = {styles.name} numberOfLines={1}>Gabriel Correia</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}>Certo, a partir de semana que vem.</Text>
          <Text style = {styles.lastMessage} numberOfLines={1}> 8 dias atrás</Text>
        </View>
      </View>

      <View style={styles.cellBorder} />


      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: 10
},
textContainer: {
    flex: 1
},
cellImage: {
    height: 60,
    borderRadius: 30,
    marginRight: 5,
    width: 60
},
name: {
  flex: 1,
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 1
},
lastMessage: {
  color: '#999999',
  fontSize: 12
},
cellBorder: {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  height: 1,
  marginLeft: 4
}
})