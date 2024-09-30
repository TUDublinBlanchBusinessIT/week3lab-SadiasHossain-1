import { View, Text, TextInput, Button, Alert } from 'react-native';
import Logo from './components/logo';
import React, {useState} from 'react';



export default function App(){

  function buttonClicked() {
    Alert.alert("button clicked");
}
  const [fname, setFname] = useState("Joe");
  const [lname, setLname] = useState("Bloggs");
  const [dob, setDob] = useState("22 August 1990");

  return(
    <View>
      <Logo/>
      <TextInput placeholder="Enter your firstname" onChangeText={(val) => setFname(val)}/>
      <TextInput placeholder="Enter your lastname" onChangeText={(val) => setLname(val)}/>
      <TextInput placeholder="Enter your date of birth" onChangeText={(val) => setDob(val)}/>
      <Text>Hello {fname} {lname}. You were born on {dob}</Text>
      <Button title="SUBMIT" onPress={buttonClicked}/>
    </View>  
  )
}


