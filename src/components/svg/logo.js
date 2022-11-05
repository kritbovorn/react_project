import React from "react";
import { Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface LogoProps {
    color?: String,
    width?: Number,
    height?: Number
}

const Logo = (props: LogoProps) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <View style={{ flex: 1 }}></View>
            <Svg style={{flex: 1}} viewBox="0 0 132 48" fill="#EC1B25" >
                <Path d="M75.4936 47.7813C87.5389 47.7813 92.7012 40.0778 92.7012 30.5536V9.36417H81.3762V32.0543C81.3762 35.2757 78.755 37.9369 75.4936 37.9369C72.2321 37.9369 69.6109 35.2757 69.6109 32.0543V14.8066C69.6109 11.7852 67.1899 9.36417 64.1885 9.36417H58.3059V30.5536C58.3059 40.0778 63.4482 47.7813 75.5136 47.7813H75.4936Z" fill="#EC1B25" />
                <Path d="M113.33 47.7813C120.514 47.7813 126.736 43.7595 129.978 37.8769L119.653 35.1557C118.393 37.0765 115.992 38.3171 113.27 38.3171C109.209 38.3171 105.947 35.4558 105.867 31.9542H131.619C131.619 31.414 131.619 30.0334 131.619 29.4931C131.538 17.7079 125.116 8.44376 113.25 8.44376C101.385 8.44376 94.8221 16.7274 94.8221 28.0925C94.8221 39.4576 102.285 47.6012 113.33 47.7813ZM113.27 17.8279C117.332 17.8279 120.614 20.6692 120.654 24.2108H105.867C105.927 20.7092 109.189 17.8279 113.27 17.8279Z" fill="#EC1B25" />
                <Path d="M5.32237 31.7942C5.32237 41.2984 13.0058 47.3611 22.53 47.3611H29.213V37.4767H22.51C19.2486 37.4767 16.6274 34.8355 16.6274 31.5741V19.6888H23.9907C26.892 19.5487 29.213 17.1676 29.213 14.2263V9.36417H16.6274V0H5.32237V9.36417H0V19.6888H5.32237V31.7942Z" fill="#EC1B25" />
                <Path d="M43.0992 25.5914C43.0992 22.35 45.7603 19.7088 49.0218 19.7088H55.6447V9.36417H47.5211C38.8573 9.36417 31.8342 16.3673 31.8342 25.0311V47.3411H43.0992V25.5914Z" fill="#EC1B25"/>
            </Svg>
            <View style={{ flex: 1 }}></View>
        </View>
    );
}

export default Logo;



