import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View,ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import {getHeroes} from '../helpers/getHeroes';
import { getPlanets } from '../helpers/getPlanets';
import { CardDb } from './CardDb';
export const Personajes = () => {
  
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Personajes</Text>
    </View>
    
  )
}
