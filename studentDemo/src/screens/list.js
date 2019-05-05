import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet,Alert,ScrollView } from 'react-native'

class List extends Component {
    static navigationOptions = {
        title: 'Students',
      };
     
       
   alertItemName = (item) => {
  alert("name :"+item.name + " , group :"+item.Group + " , Roll num :"+item.Roll +" , Address :"+item.Address+" , Mobile :"+item.mobile)
         }
   render() {

      const { navigation } = this.props;
    let data = navigation.getParam('data', 'NO-ID');

      return (
         <View>
           <ScrollView>
            {
              data.map((item, index) => (
                  <TouchableOpacity
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                     <Text style = {styles.text2}>
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
   },
   text2: {
      paddingLeft: 10,
      fontSize: 18,
      height: 42,
     }
})
