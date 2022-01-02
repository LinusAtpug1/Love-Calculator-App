import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
class Inputs extends Component {
   state = {
      height: '',
      weight: '',
      bmi: '',
      BmiResult: '',
   }
   handleHeight = (text) => {
      this.setState({ height: text })
   }
   handleWeight = (text) => {
      this.setState({ weight: text })
   }
   calculate = (height, weight) => {
      //calculation
      var result = (parseFloat(weight)*10000)/(parseFloat(height)*parseFloat(height));
      result = result.toFixed(2);
      //display result
      this.setState({ bmi: result })
      if(result>399){
         this.setState({BmiResult:'...Distractive Love...'})
      }
      else if(result>=550){
         this.setState({BmiResult:'...Innocent Love...'})
      }
      else if(result>300){
         this.setState({BmiResult:'...Sensible Love...'})
      }
      else if(result>239){
         this.setState({BmiResult:'...Eternal Love...'})
      }
      else if(result>200){
         this.setState({BmiResult:'...Family Love...'})
      }
      else if(result>150){
         this.setState({BmiResult:'...Community Love...'})
      }
      else if(result>100){
         this.setState({BmiResult:'...Hopeless Love...'})
      }
      else{
         alert('Incorrect Input!');
         this.setState({BmiResult:''})
      }
   }
   render() {
      return (
         <View style = {styles.container}>
<Text style={styles.title}>Calculator</Text>
            <Text  style = {styles.label}>Age        (Husband/BF)</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               //placeholder = "Husband/BF"
               autoCapitalize = "none"
               onChangeText = {this.handleHeight}/>
<Text  style = {styles.label}>Age              (Wife/GF)</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               //placeholder = "Wife/GF"
               autoCapitalize = "none"
               onChangeText = {this.handleWeight}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.calculate(this.state.height, this.state.weight)
               }>
               <Text style = {styles.submitButtonText}> Calculate </Text>
            </TouchableOpacity>
<Text style = {styles.output}>{this.state.bmi}</Text>
            <Text style = {styles.resultText}>{this.state.BmiResult}</Text>
            
</View>
      )
   }
}
export default Inputs
const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      backgroundColor:'black',
      height: '100%',
      
   },
   input: {
      margin: 15,
      height: 60,
      borderWidth: 1,
      padding: 10,
      borderRadius: 30,
      fontWeight:"bold",
      fontSize: 36,
      color: "white",
      borderColor: 'white',
      backgroundColor: 'red',
      marginTop: 10,

   },
   submitButton: {
      backgroundColor: 'red',
      padding: 10,
      margin: 69,
      height: 69,
      borderRadius: 39,
   },
   submitButtonText:{
      textAlign: "center",
      color: 'white',
      fontWeight:"bold",
      fontSize: 18,
      paddingBottom:6,
      fontSize:36,
   },
   output:{
      textAlign: "center",
      fontSize: 30,
      fontStyle:'italic',
      color: 'white',
   },
   title:{
      paddingTop:0,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 49,
      fontWeight:"bold",
      color: 'white',
      letterSpacing: 1,
      marginTop: 10,
      
   },
   resultText:{
      paddingTop:20,
      paddingBottom:10,
      textAlign: "center",
      fontSize: 30,
      color: 'white',
      fontWeight:"bold",
   },
   label:{
      marginLeft: 15,
      fontSize: 30,
      fontWeight:"bold",
      fontStyle: 'italic',
      letterSpacing: 3,
      color: 'white',
      paddingTop: 30,
      marginTop: 0,
      
      
      
   }
})
