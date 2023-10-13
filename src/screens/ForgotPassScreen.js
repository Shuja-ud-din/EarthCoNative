import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import logo from '../../assets/images/earthco_logo.png'

const ForgotPassScreen = () => {

    const [isSelected, setSelection] = useState(false);
    const [isChecked, setChecked] = useState(true);
    const [email, setEmail] = useState('');

    return (
        <View style={styles.mainContainer}>
            <View style={styles.innerContainer}>
                <Image
                    style={{
                        width: 100,
                        height: '25%',
                        resizeMode: 'contain',
                    }}
                    source={logo}
                />
                <View style={styles.bottomBox}>
                    <Text style={{ fontSize: 22, fontWeight: '500', color: 'black' }}>Forget Password ?</Text>
                    <Text style={{ fontSize: 17, marginVertical: 5, marginBottom: 10 }}>Enter your e-mail address below to reset your password.</Text>
                    <TextInput placeholder='E-mail...' style={styles.inputStyle} value={email} onChangeText={setEmail} />
                    <TouchableOpacity style={styles.primaryBtn}>
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    primaryBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#7c9c3d'
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        minHeight: '100%',
    },
    innerContainer: {
        width: '85%',
        // minHeight: 300,
        // height: '40%',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    bottomBox: {
        width: '100%',
        height: '70%',
        // marginVertical: 5
    },
    inputStyle: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 7,
        marginVertical: 8
    },
    checkbox: {
        alignSelf: 'center',
    },
    label: {
        margin: 8,
    },
    forgotSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default ForgotPassScreen