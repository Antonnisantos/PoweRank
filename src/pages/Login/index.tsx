import React, { useState } from "react";
<<<<<<< HEAD
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { style } from "./styles";  // Seu import

const Logo = require("../../assets/Logo_Power.png");
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import type { RootStackParamList } from '../../../App';
import type { StackNavigationProp } from "@react-navigation/stack";

export default function Login() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
=======
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';  // Touchable (errado) → TouchableOpacity (certo)
import { style } from "./styles";
const Logo = require("../../assets/Logo_Power.png");
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);  // Novo estado pro olho
>>>>>>> b5026a81f747335880c8fb26a3763140165947cd

    function getLogin(){
        try{
            if(!email || !password){
                return Alert.alert("Atenção", "Informe os campos obrigatórios")            
            }
            Alert.alert("Logado com sucesso")
        } catch (error){
           console.log(error)    
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={{ width: 200, height: 200, resizeMode: "contain" }}
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.TitleInput}>ENDEREÇO DE EMAIL</Text>
                <View style={[style.BoxInput, { flexDirection: 'row', alignItems: 'center' }]}>
                    <MaterialIcons name="email" size={24} color="#666" style={{ marginRight: 10 }} />
                    <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={(e) => setEmail(e)}
                        placeholder="Digite seu email"
                    />
                </View>
                
                <Text style={style.TitleInput}>SENHA</Text>
                <View style={[style.BoxInput, { flexDirection: 'row', alignItems: 'center' }]}>
                    <MaterialIcons name="lock" size={24} color="#666" style={{ marginRight: 10 }} />
                    <TextInput 
                        style={[style.input, { flex: 1 }]}
                        value={password}
                        onChangeText={(e) => setPassword(e)}
                        secureTextEntry={!showPassword}
                        placeholder="Digite sua senha"
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons 
                            name={showPassword ? "visibility" : "visibility-off"} 
                            size={24} 
                            color="#666" 
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLogin()}>
                    <Text style={style.textbutton}>Entrar</Text>
                </TouchableOpacity>
            </View>
<<<<<<< HEAD

            {/* Rodapé clicável */}
            <View style={style.footerRow || { flexDirection: 'row', justifyContent: 'center', paddingBottom: 20 }}>  // Fallback se não tiver o estilo
                <Text style={style.textbottom}>Não tem conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                    <Text style={style.textbottomcreate}>crie uma agora</Text>
                </TouchableOpacity>
            </View>
=======
            <Text style={style.textbottom}>Não tem conta? <Text style={style.textbottomcreate}>crie uma agora</Text></Text>
>>>>>>> b5026a81f747335880c8fb26a3763140165947cd
        </View>
    );
}