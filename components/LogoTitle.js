import React from 'react'
import { Image, View, StyleSheet } from 'react-native';
import { useAssets } from 'expo-asset';

export const LogoTitle = () => {
  const [assets, error] = useAssets([require('../assets/logo.png')]);
  return (
    <View style={styles.headerContainer}>
      <Image
        style={styles.logo}
        source={assets[0]}
      />
    </View>
  ) 
}
const styles = StyleSheet.create({
    headerContainer: {
    flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 2,
    },
    logo: {
      width: 190,
      height: 80,
    },
  });
