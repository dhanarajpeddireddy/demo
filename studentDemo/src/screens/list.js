import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,Alert,ScrollView } from 'react-native'
import * as firebase from "firebase";   
class List extends Component {
    static navigationOptions = {
        title: 'Students',
      };

      
      constructor(props) {
         super(props);
       this.state = {
            names: []
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

       componentDidMount()
          {
          
           firebase.database().ref('students/') .once('value', function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
         
              var childData = childSnapshot.val();
                 alert("name :"+childData.name + " , group :"+childData.group + " , Roll num :"+childData.roll)

            });
          });
          }
       

       
   alertItemName = (item) => {
    Alert.alert(item.name)
   }
   render() {
      return (
         <View>
           <ScrollView>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                     <Text style = {styles.text}>
                        {item.Roll}
                     </Text>
                  </TouchableOpacity>
               ))
            }
            </ScrollView>
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
    flex: 1,
    paddingTop: 22
   },
   text: {
    padding: 10,
    fontSize: 18,
    height: 44,
   }
})
