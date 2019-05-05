import React, { Component } from 'react';  
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native';
import * as firebase from "firebase";   
var dataArray = [] ;
export default class home extends Component {  
    static navigationOptions = {
        title: 'Home',
        
      };



      constructor(props) {
        super(props);
      
        var firebase = require("firebase");
        const config = {
          apiKey: "AIzaSyA58VWic9JWxqBBi72ILJbVBrbtpuZ4Ivg",
          authDomain: "studentdemo-123.firebaseapp.com",
          databaseURL: "https://studentdemo-123.firebaseio.com",
          projectId: "studentdemo-123",
          storageBucket: "studentdemo-123.appspot.com",
          messagingSenderId: "868386055442",
          appId: "1:868386055442:web:67e5e366ca994fc9"
        };
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
      }
      }

      componentDidMount()
         {
          firebase.database().ref('students/') .on('value', function(snapshot) {
           snapshot.forEach(function(childSnapshot) {
             var childKey = childSnapshot.key;
             var childData = childSnapshot.val();
             dataArray.push( { name:childData.name ,Roll:childData.roll,Group:childData.group,Address:childData.address,mobile:childData.mobile});
           });
         });

        
         }





  render() {
    return (
      <View style={styles.root}>

<TouchableHighlight  onPress={() => this.props.navigation.navigate('Add')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Student</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight   onPress={() => this.props.navigation.navigate('List',{data:dataArray})} underlayColor="white">
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
