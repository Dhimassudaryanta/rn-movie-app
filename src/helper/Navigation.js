import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

import { connect } from 'react-redux';
import { GetNowPlaying, GetTvPopular, GetTvTopRated } from '../actions/action';
import DetailScreen from '../screens/DetailScreen';



const Stack = createStackNavigator();


const Navigation = ({ GetNowPlaying, GetTvPopular, GetTvTopRated }) => {

    useEffect(() => {
        GetNowPlaying()
        GetTvPopular()
        GetTvTopRated()
    }, [])

    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}

export default connect(null, { GetNowPlaying, GetTvPopular, GetTvTopRated })(Navigation);