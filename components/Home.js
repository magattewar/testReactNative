import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Dakar"
        };
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />

                <button text="test" />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 40,
    }
});

export default Home;