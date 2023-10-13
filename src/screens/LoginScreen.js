import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import logo from '../../assets/images/earthco_logo.png'

const LoginScreen = ({ navigation }) => {

    const [isSelected, setSelection] = useState(false);
    const [isChecked, setChecked] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

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
                    <Text style={{ fontSize: 22, fontWeight: '500', color: 'black' }}>Personal Information</Text>
                    <Text style={{ fontSize: 17, marginVertical: 5, marginBottom: 10 }}>Enter your e-mail address and your password.</Text>
                    <TextInput placeholder='E-mail...' style={styles.inputStyle} value={email} onChangeText={setEmail} />
                    <TextInput secureTextEntry={true} placeholder='Password...' style={styles.inputStyle} passwordRules={true} />
                    <View style={{ display: 'inline' }}>
                        <Text style={styles.label}>Remember me</Text>
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('Forgot Password')}>
                            <Text style={{ color: '#7c9c3d' }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.primaryBtn}>
                        <Text style={{ color: 'white' }}>Sign Me in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnText} onPress={() => navigation.navigate('Sign Up')}>
                        <Text style={{ color: '#7c9c3d' }}>Create an Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
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
        justifyContent: 'center',
        minHeight: '100%',
        backgroundColor: 'white',
    },
    innerContainer: {
        width: '85%',
        // minHeight: 520,
        // height: '50%',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    bottomBox: {
        width: '100%',
        height: '70%',
        marginVertical: 5
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

export default LoginScreen