// src/screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button, Appbar } from 'react-native-paper';

function HomeScreen({ navigation }) {

  useEffect(()=>{
    const colRef = collection(db, "usuarios");
    const querySnapshot = (colRef);
    querySnapshot.forEach(
      (doc)=> {
        console.log(doc)
      }
    )
  },[]);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View>
        <Button mode="contained" onPress={() => navigation.navigate('Details')}>
          Go to Details
        </Button>
      </View>
    </>
  );
}

export default HomeScreen;