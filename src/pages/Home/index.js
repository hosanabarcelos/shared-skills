import React, {Component} from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet, ScrollView, ActivityIndicator, FlatList, Dimensions, TouchableWithoutFeedback, Linking, Share} from 'react-native';
import {CustomHeader} from '../components/index';

const {width, height} = Dimensions.get('window');
console.disableYellowBox = true;


export class Home extends Component {

	state = {
		news : [],
		loading: true
	}
	fetchnews = () => {
		fetch('http://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=78a4e2a1855f4a9f89dd539717b549ae')
		.then((res) => res.json())
		.then((res)=> {
			this.setState({
				news : res.articles,
				loading : false
			})
		})
	}
	componentDidMount(){
		this.fetchnews();
	}
	sharearticle = async article => {
		try {
			await Share.share({
				message : 'Checkout this article' + article
			})
		} catch (error) {
			console.log(error)
		}
	}

  render() {

	if(this.state.loading){
		return (
			
			<View style = {{flex:1, alignItems:"center", justifyContent:"center", backgroundColor: '#590995'}}>
				<ActivityIndicator size = 'large' color = '#FFFFFF'/>
			</View>
		);
	}

	else{
		return (

				<View style = {styles.container}> 
				<CustomHeader isHome = {true} navigation = {this.props.navigation}/>
					<View style = {styles.header}>
						<Text style = {styles.textTopo}>Notícias</Text>
						<Text style = {styles.textTopo}>para você</Text>
					</View>

					<View style = {styles.news}>
						<FlatList
						data = {this.state.news}
						renderItem = {({item}) =>{
							return (
								<TouchableWithoutFeedback onPress={() => Linking.openURL(item.url)}>
								<View style = {{width:width-50, height:180, backgroundColor: '#FFFFFF', marginBottom: 15, borderRadius: 15}}> 
									<Image source = {{uri : item.urlToImage}} style = {[StyleSheet.absoluteFill, {borderRadius: 15}]}/>
									<View style = {styles.gradient}>
										<Text style = {{position: 'absolute', bottom: 0, color: '#FFFFFF', fontSize: 20, padding: 5}}>{item.title}</Text>
										<Text style = {{fontSize: 16, color: '#FFFFFF', position: 'absolute', top: 0, right: 0, padding: 5, fontWeight: 'bold'}} onPress = {() =>this.sharearticle(item.url)}>Compartilhar</Text>
									</View>
								</View>
								</TouchableWithoutFeedback>

							);
						}}
						/>
					</View>
				</View>
		
		);
	}
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#590995'
	},
	header: {
		padding: 30
	},
	textTopo: {
		fontSize: 30,
		color: '#FFFFFF',
		fontWeight: 'bold'
	},
	news: {
		alignSelf: 'center'
	},
	gradient: {
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(80,80,80,0.5)',
		borderRadius: 15
	}
})