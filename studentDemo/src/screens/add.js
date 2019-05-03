import React, {Component} from 'react';
import {ToolbarAndroid,StyleSheet, Text,TextInput ,View,TouchableHighlight,Alert,ToastAndroid} from 'react-native';
import * as firebase from "firebase";

export default class add extends Component<Props> {
    static navigationOptions = {
        title: 'Add',
       
      };
  constructor(props) {
    super(props);
   this.state = {
      name: '',
      group: '',
      roll: '',
      address: '',
      mobile: '',
    
    };
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
  handleName = (text) => {
    this.setState({ name: text })
 }

 handleGroup = (text) => {
  this.setState({ group: text })
}
handleRoll = (text) => {
  this.setState({ roll: text })
}

handleMobile = (text) => {
  this.setState({mobile: text })
}
handleAddress = (text) => {
  this.setState({ address: text })
}
save= () =>{
  if(this.state.group==''|| this.state.name=='' || this.state.roll=='' || this.state.mobile=='' || this.state.address==''){
  Alert.alert('All Fields Required')
}
  else{
 
 firebase.database().ref('students/').child(this.state.roll).set({
  name:this.state.name,group:this.state.group,roll:this.state.roll,address:this.state.address,mobile:this.state.mobile
 
}).then((data)=>{
  console.log('data ' , data)
}).catch((error)=>{
  console.log('error ' , error)
})
  this.props.navigation.goBack();

  ToastAndroid.show("success",ToastAndroid.SHORT);
  }
}



  render() {
    return (

      <View style={styles.root}>
        <Text style={styles.text}>Student Name</Text>
        <TextInput style = {styles.input}
      
               onChangeText = {this.handleName}/>
                <Text style={styles.text}>Student Group</Text>
        <TextInput style = {styles.input}
               onChangeText = {this.handleGroup}/>
                <Text style={styles.text}>Student RollNumber</Text>
        <TextInput style = {styles.input}
               onChangeText = {this.handleRoll}/>
                <Text style={styles.text}>Student Mobile</Text>
        <TextInput  keyboardType={'phone-pad'} style = {styles.input}
               onChangeText = {this.handleMobile}/>
                <Text style={styles.text}>Student Address</Text>
        <TextInput  multiline={true} textAlignVertical='top'
        style = {styles.multi}
               onChangeText = {this.handleAddress}/>
<TouchableHighlight  onPress={this.save} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>create</Text>
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