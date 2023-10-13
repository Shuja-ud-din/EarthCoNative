import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import logo from '../../assets/images/earthco_logo.png'

const SignUp = ({ navigation }) => {

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
                        height: '20%',
                        resizeMode: 'contain',
                    }}
                    source={logo}
                />
                <View style={styles.bottomBox}>
                    <Text style={{ fontSize: 22, fontWeight: '500', color: 'black' }}>Sign Up</Text>
                    <Text style={{ fontSize: 17, marginVertical: 5, marginBottom: 10 }}>Enter your personal details below:</Text>
                    <TextInput placeholder='Full Name' style={styles.inputStyle} value={email} onChangeText={setEmail} />
                    <TextInput placeholder='User Name' style={styles.inputStyle} />
                    <TextInput placeholder='Email Adress' style={styles.inputStyle} />
                    <TextInput secureTextEntry={true} placeholder='Password...' style={styles.inputStyle} passwordRules={true} />
                    <View style={{ display: 'inline' }}>
                        <Text style={styles.label}>I agree to the Terms of Service Privacy Policy</Text>
                    </View>
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
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
    },
    innerContainer: {
        width: '85%',
        // minHeight: 530,
        // height: '50%',
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    bottomBox: {
        width: '100%',
        height: '78%',
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

export default SignUp