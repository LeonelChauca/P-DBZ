import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const CardDb = ({ name, ki, race, image }) => {
  return (
    <Card style={styles.card}>
      <ImageBackground source={{uri:'https://pbs.twimg.com/media/DyvPi4oWkAEo8dz.jpg:large'}} style={styles.imageBackground}>
        <Card.Cover source={{ uri: image }} style={styles.cardCover} resizeMode="contain" />
      </ImageBackground>
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>Ki de poder: {ki}</Paragraph>
        <Paragraph>Raza: {race}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
  },
  imageBackground: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardCover: {
    width: 400,
    height: 400,
    backgroundColor: 'transparent',
  },
});

export default CardDb;
