import React, { Component } from 'react';  
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native';
export default class home extends Component {  
    static navigationOptions = {
        title: 'Home',
        
      };

  render() {
    return (
      <View style={styles.root}>

<TouchableHighlight  onPress={() => this.props.navigation.navigate('Add')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Student</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight   onPress={() => this.props.navigation.navigate('List')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>View Students</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

    root: {
      padding: 23
   },
   
   input: {
     borderRadius: 5,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1
   },
  multi:{
  height:100,
  borderRadius: 5,
  borderColor: '#000000',
  borderWidth: 1
  },
  
  
   text: {
    marginTop:12,
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16
  },
  button: {
    marginTop:30,
    borderWidth:1,
    borderRadius:15,
    alignItems: 'center',
    backgroundColor: 'blue',
    borderColor:'white'
    
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
  });