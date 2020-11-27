import React, {Component} from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from 'react-native-vector-icons/FontAwesome';
import {CustomHeader} from '../components/index';
import {IMAGE} from '../../constants/image';

export class Profile extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
        <CustomHeader isHome = {true} navigation = {this.props.navigation}/>
            <ScrollView showsVerticalScrollIndicator={false}>
            
                <View style={{ alignSelf: "center" }}>
                <View style = { styles.add}>
                <MaterialIcons name="add" size={30} color="#FFF" style={{ marginTop: 2, marginLeft: 2}} />
                </View>
                    <View style={styles.profileImage}>
                        <Image source={IMAGE.ICON_PROFILE} style={styles.image} resizeMode="center" />
                    </View>

                    <View style={styles.active}></View>
                    <View style={styles.message}>
                    <MaterialIcons name="chat" size={30} color="#FFF" style={{ marginTop: 6, marginLeft: 2 }} />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>João Paulo</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>@jotape</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>30</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>joaopaulo@gmail.com</Text>
                    <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Nova Iguaçu, Rio de Janeiro</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}><MaterialIcons name="work" size={30} color = '#c62a88' /></Text>
                        <Text style={[styles.text, styles.subText]}>Professor</Text>
                    </View>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}><MaterialIcons name="local-library" size={30} color = '#c62a88' /></Text>
                        <Text style={[styles.text, styles.subText]}>Humorista</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}><MaterialIcons name="local-library" size={30} color = '#c62a88' /></Text>
                        <Text style={[styles.text, styles.subText]}>TypeScript</Text>
                    </View>
                </View>

                <View style={{ marginTop: 32 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                      <View style={styles.mediaImageContainer}>
                            <Image source={IMAGE.IMAGEPROFILE3} style={styles.image} resizeMode="cover"></Image>
                      </View>
                        <View style={styles.mediaImageContainer}>
                            <Image source={IMAGE.IMAGEPROFILE2} style={styles.image} resizeMode="cover"></Image>
                        </View>
                      <View style={styles.mediaImageContainer}>
                            <Image source={IMAGE.IMAGEPROFILE1} style={styles.image} resizeMode="cover"></Image>
                      </View>

                    </ScrollView>

                </View>
                <Text style={[styles.subText, styles.caract]}>Sobre</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.about}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                            Sou professor de tecnologia na Unigranrio e desejo aprender TypeScript em conjunto.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.about}>
                        <View style={styles.activityIndicator}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                             Estou me aperfeiçoando como humorista, sou fascinado por linguagem humorística e procuro colegas que queiram crescer junto comigo nesse ramo.
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text: {
        fontFamily: 'Roboto',
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        borderRadius: 20
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },

    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    message: {
        backgroundColor: "#590995",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    add: {
        backgroundColor: "#590995",
        position: "absolute",
        width: 45,
        height: 45,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginLeft: 8
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    caract: {
        marginLeft: 90,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 12
    },
    about: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#808080",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    }
});