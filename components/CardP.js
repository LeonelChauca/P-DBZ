import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

export const CardP = ({ name, descr, image }) => {
  return (
    <Card style={styles.card}>
      <ImageBackground source={{uri: image}} style={styles.imageBackground}>
      </ImageBackground>
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph> Descripcion: {descr}</Paragraph>
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

export default CardP;
