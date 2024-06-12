import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View,ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

import {getHeroes} from '../helpers/getHeroes';
import { CardDb } from './CardDb';

export const Inicio = ({navigation}) => {
  const [Heroes, setHeroes] = useState([]);
  const [Input, setInput] = useState('');
  const getImg = async (name) => {
    const newImg= await getHeroes(name);
    setHeroes(newImg);
    console.log(newImg)
  }
  useEffect( () => {
    getImg(Input);
    console.log(Heroes)
  }, [Input]);
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      <TextInput
        mode="outlined"
        placeholder='Buscar por nombre...'
        label="Nombre"
        value={Input}
        onChangeText={text => setInput(text)}
        style={{width:'90%', marginVertical:10}}
      />
      <ScrollView style={{ width:'100%'}}>
        {
          Heroes ? Heroes.map((heroe) => {
            return <CardDb key={heroe.id} race={heroe.race} name={heroe.name} ki = {heroe.ki} image ={heroe.image} />
          }) : <Text>Sin resultados</Text>
        }
      </ScrollView>
    </View>
  )
}
