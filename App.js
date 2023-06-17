import React, {useState} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
// import SwitchBtn from "./components/Btn/Switch";
import SimpleBtn from './components/Btn/Simple';

// import SwitchBtn from "./components/btn/Switch";

// import Buttons from "./components/Buttons"

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Hi It's Sanket Patil</Text> 
      <Text>Different types of button</Text>
      <SwitchBtn />

      <SimpleBtn />
    </View>
  );
};

const SwitchBtn = () => {
  const [selectedtab, setSelectedTab] = useState(true);

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
      }}>
      <Text>Switch Buttons </Text>
      <View
        style={{
          width: '90%',
          borderWidth: 0.5,
          borderRadius: 15,
          height: 60,
          paddingLeft: 5,
          paddingRight: 5,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '96%',
            backgroundColor: selectedtab ? 'blue' : 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 18,
          }}
          onPress={
            (changeTab = () => {
              setSelectedTab(true);
            })
          }>
          <Text
            style={{
              color: !selectedtab ? '#000' : '#fff',
              fontSize: 18,
              fontWeight: 600,
            }}>
            Movie Show
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '50%',
            height: '96%',
            backgroundColor: !selectedtab ? 'blue' : 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 18,
          }}
          onPress={
            (changeTab = () => {
              setSelectedTab(false);
            })
          }>
          <Text
            style={{
              color: selectedtab ? '#000' : '#fff',
              fontSize: 18,
              fontWeight: 600,
            }}>
            TV Show
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{color:"red", fontSize:30}}>{selectedtab ? "Watch Movie Show" : "Watch TV Show" }</Text>

    </View>
  );
};

export default App;
