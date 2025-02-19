import { SafeAreaView, StyleSheet, Text, View, Image, KeyboardAvoidingView, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyTextInput from '../components/MyTextInput'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MyButton from '../components/MyButton';
import { useNavigation } from '@react-navigation/native'

const RegisterScreen = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")

    // Définit les tailles de police en fonction de l'email et du mot de passe
    const fonSizEmail = email ? 16 : 14;
    const fonSizePassword = password ? 16 : 14;
    const fonSizeName = name? 16 : 14;

    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
            <View>
                <Image source={require("../assets/images/gros_logo.png")} style={styles.image} />
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>Créez votre compte</Text>
                </View>
            </KeyboardAvoidingView>

            <View style={{ marginTop: 70 }}>

            <View style={styles.inputContainer}>
                    <AntDesign name="user" size={24} color="gray" />
                    <MyTextInput 
                        style={[styles.textInput, { fontSize:name ? 16 : 16 }]}  // Applique la taille de police dynamique ici
                        placeholder="Entrez votre Nom"
                        value={name}
                        onChangeText={(text) => setName(text)} 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={24} color="gray" /> 
                    <MyTextInput 
                        style={[styles.textInput, { fontSize:email ? 16 : 16 }]}  // Applique la taille de police dynamique ici
                        placeholder="Entrez votre Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)} 
                    />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="lock" size={24} color="gray" /> 
                    <MyTextInput 
                        style={[styles.textInput, { fontSize: password ? 16 : 16 }]}  // Applique la taille de police dynamique ici
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Entrez votre Password" 
                        secureTextEntry 
                    />
                </View>

               

                <View>
                    <MyButton title="Se connecter"/>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>Vous avez pas de compte? Connectez vous</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 110,
        marginTop: 50
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: "#D0D0D0",
        marginTop: 20,
        marginBottom: 20
    },
    textInput: {
        color: "gray",
        width: 300,
        marginLeft: 10,
    },
})
