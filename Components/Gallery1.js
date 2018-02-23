import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions, Alert,
} from 'react-native';

import {ImageGallery} from '@nlabs/react-native-image-gallery';
import PropTypes from 'prop-types';
import {ImageFit} from "@nlabs/react-native-image-gallery/lib/types/image";

const {width} = Dimensions.get('window');

const images = [
    {
        source: {
            uri: 'https://avatars.mds.yandex.net/get-pdb/49816/d9152cc6-bf48-4e44-b2d5-de73b2e94454/s800',
        },
        title: 'London',
        imageWidth: 1000,
        imageHeight: 500,
        id:'0',
        containerWidth:806,
        scale:806,
        x:806,
        y:806,
        mode:'fit',
    },
    {
        source:{
            uri: 'https://avatars.mds.yandex.net/get-pdb/49816/d9152cc6-bf48-4e44-b2d5-de73b2e94454/s800',
        },
        title: 'St-Petersburg',
        imageWidth: 1000,
        imageHeight: 800,
        id:'1',
        containerWidth:806,
        scale:806,
        x:806,
        y:806,
        mode:'fit',
    },
    {
        source: {
            uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
        },
        title: 'Parishh',
        imageWidth: 1000,
        imageHeight: 720,
        id:'2',
        containerWidth:806,
        scale:806,
        x:806,
        y:806,
        mode:'fit',
    },
    {
        source: {
            uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
        },
        title: 'Parisgg',
        imageWidth: 1000,
        imageHeight: 720,
        id:'3',
        containerWidth:806,
        scale:806,
        x:806,
        y:806,
        mode:'fit',
    },

];



export default class Gallery1 extends Component {

    render() {
        //const {images} = this.props;
        const imageUrls = images.map((img) => ({
                url: img.source.uri,
                //mode:img.mode,
                id: img.id,
            imageWidth:img.imageWidth,
                title: img.title,


            })
        );
        return <ImageGallery images={imageUrls} />;
    }
}
