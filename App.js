/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainView from './src/main/main-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CONSTANTS from './src/CONSTANTS';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MainView"
                                 screenOptions={{
                                     title: 'SCOZERA',
                                     headerStyle: {
                                         backgroundColor: CONSTANTS.appBarColor,
                                     },
                                     headerTintColor: CONSTANTS.white,
                                     headerTitleStyle: {
                                         fontWeight: 'bold',
                                         fontSize: CONSTANTS.appBarFontSize
                                     },
                                 }}>
                    <Stack.Screen name="MainView" component={MainView}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
