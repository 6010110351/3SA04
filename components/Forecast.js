import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
 render() {
 return (
 <View style={styles.container}>
 <Text style={styles.welcome}>{this.props.main}</Text>
 <Text style={styles.welcome}>{this.props.description}</Text>
 <Text style={styles.welcome}>{this.props.temp} °C</Text>
 </View>
 );
 }
}

const styles = StyleSheet.create({
    container: { backgroundColor: '#55912d',
                 flexDirection: 'column',
                 justifyContent: 'space-evenly',
                 alignItems: 'center',
                },
    welcome: { marginTop:30,marginBottom:30, fontSize: 15 },
   });
   

