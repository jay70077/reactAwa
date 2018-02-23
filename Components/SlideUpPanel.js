
import React, {Component} from 'react';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import SlidingUpPanel from 'rn-sliding-up-panel';

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
import {visibleHeight} from "rn-sliding-up-panel/libs/layout";

const window = Dimensions.get('window').height;

export default class SlideUppanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            dragPanel: true,
            draggableRange: {top: window + 1000, bottom: 320},
            height: window + 1000,

        }
    }

    render(){
        return(
            <SlidingUpPanel
                height={this.state.height}
                draggableRange={this.state.draggableRange}
                allowDragging={this.state.dragPanel}
                ref={c => this._panel = c}
                visible={this.state.visible}
                showBackdrop={false}
                onRequestClose={() => this.setState({visible: true})}>

                <ScrollView style={{backgroundColor: 'white', margin: 5, padding: 20, zIndex: 3}}
                            onScroll={() => {
                                this.setState({dragPanel: false})
                            }}>
                    <View style={{zIndex: 3}}>

                        <Text>Here is the content inside panel</Text>
                        <Text>Here is the content inside panel</Text>
                        <Text>asdvzdfvds</Text>
                        <Button title='hide' onPress={() => this._panel.transitionTo(320)}/>
                    </View>
                </ScrollView>

            </SlidingUpPanel>


        )
    }

}