import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../../assets/images/favicon.png'
import Icon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ProfileImg from '../../assets/images/adminDp.png'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Header = () => {
    return (
        <View style={styles.headerBox}>
            <View style={{
                flexDirection: 'row',
                height: '100%'
            }}>
                <View style={{
                    width: 60,
                    height: '100%',
                    backgroundColor: 'white',
                    padding: 5
                }}>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View style={styles.hamburger}>
                    <Icon name='menu' size={30} color='white' />
                </View>
            </View>
            <View style={styles.iconsBox}>
                <View style={styles.icon}>
                    <AntDesign name="setting" size={20} color='#464a53' />
                </View>
                <View style={[styles.icon]}>
                    <Icon name="bell" size={20} color='#464a53' />
                </View>
                <View style={styles.icon}>
                    <Fontisto name="email" size={20} color='#464a53' />
                </View>
                <View style={styles.icon}>
                    <Image
                        style={styles.profImg}
                        source={ProfileImg} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 55,
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
        justifyContent: 'center',
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconsBox: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    icon: {
        fontWeight: '100',
        paddingHorizontal: 12
    },
    profImg: {
        height: 35,
        width: 35,
    }
})

export default Header