import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../../assets/images/favicon.png'
import Icon from 'react-native-vector-icons/AntDesign'

const Dashboard = () => {
    return (
        <View style={styles.headerBox}>
            <View style={{
                flexDirection: 'row',
                flex: 13
            }}>
                <View style={{
                    width: '15%',
                    height: '100%',
                    backgroundColor: 'white',
                    padding: 2
                }}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View style={styles.hamburger}>
                    <Icon name='codesquare' size={30} />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                flex: 12,
                backgroundColor: 'white'
            }}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: 'black'
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    hamburger: {
        width: 45,
        height: '100%',
        backgroundColor: '#789a3d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Dashboard