import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.title}>A propos de moi</Text>
                <Text>lorem ipsum dolor</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    view: {
        margin: 20,
    }
  });

export default About;