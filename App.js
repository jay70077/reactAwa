/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import Gallery from './Components/Gallery'
import Gallery1 from './Components/Gallery1'

import {
    Platform,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Alert,
    TouchableOpacity, ScrollView,
    TouchableHighlight,
    Button
} from 'react-native';

import SlideUppanel from "./Components/SlideUpPanel";

export default class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }
    }


    press() {

        this.setState({
            visible: false,

        });

    }

    mainTest() {
        this.setState({

            visible: true,

        });

    }

    render() {

        if (this.state.visible) {
            return (
                <View style={styles.container}>

                    <TouchableOpacity style={{backgroundColor: 'black', opacity: 1}} onPress={this.press.bind(this)}>
                        <Text style={styles.testDevice}></Text>
                        <ScrollView>
                            <Gallery1/>

                        </ScrollView>
                    </TouchableOpacity>


                    <SlideUppanel/>

                </View>
            );
        } else {

            return (
                <View style={styles.container}>


                    <ScrollView>
                        <Gallery1/>

                    </ScrollView>
                    <View style={{zIndex: 2}}>
                        <TouchableOpacity onPress={this.mainTest.bind(this)}>
                            <Text style={{height: 30}}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    titleStyle: {
        fontSize: 16,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    testDevice: {
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
    }
});
