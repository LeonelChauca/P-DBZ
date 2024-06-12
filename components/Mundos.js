import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View,ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import {getHeroes} from '../helpers/getHeroes';
import { getPlanets } from '../helpers/getPlanets';
import { CardDb } from './CardDb';
import { CardP } from './CardP';
export const Mundos = () => {
  const [Planets, setPlanets] = useState([]);
  const [Input, setInput] = useState('');
  const getImg = async (name) => {
    const newImg= await getPlanets(name);
    setPlanets(newImg);
    console.log(newImg)
  }
  useEffect( () => {
    getImg(Input);
    console.log(Planets)
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
          Planets ? Planets.map((heroe) => {
            return <CardP key={heroe.id} name={heroe.name} descr = {heroe.description} image ={heroe.image} />
          }) : <Text>Sin resultados</Text>
        }
      </ScrollView>
    </View>
    
  )
}
