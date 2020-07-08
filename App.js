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
import DesignConstants from './src/design-constants';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MainView"
                                 screenOptions={{
                                     title: 'SCOZERA',
                                     headerStyle: {
                                         backgroundColor: DesignConstants.appBarColor,
                                     },
                                     headerTintColor: DesignConstants.white,
                                     headerTitleStyle: {
                                         fontWeight: 'bold',
                                         fontSize: DesignConstants.appBarFontSize
                                     },
                                 }}>
                    <Stack.Screen name="MainView" component={MainView}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
