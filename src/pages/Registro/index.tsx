import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Área em manutenção</Text>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}  // Volta pro Login
        style={{ backgroundColor: '#666', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}