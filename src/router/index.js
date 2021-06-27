import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Splash,Login, Register, UploadPhoto, Doctor, Messages, Hospitals, ChooseDoctor, UserProfile, UpdateProfile, DoctorProfile } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import Chat from '../pages/Chat';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator  {...props}/>}>
            <Tab.Screen name="Doctor" component={Doctor}/>
            <Tab.Screen name="Messages" component={Messages}/>
            <Tab.Screen name="Hospitals" component={Hospitals}/>
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="DoctorProfile">
            <Stack.Screen
                name = "Splash"
                component={Splash}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "GetStarted"
                component={GetStarted}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "Login"
                component={Login}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "Register"
                component={Register}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "UploadPhoto"
                component={UploadPhoto}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "MainApp"
                component={MainApp}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "ChooseDoctor"
                component={ChooseDoctor}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "Chatting"
                component={Chat}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "UserProfile"
                component={UserProfile}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "UpdateProfile"
                component={UpdateProfile}
                options= {{headerShown: false}}
            />
            <Stack.Screen
                name = "DoctorProfile"
                component={DoctorProfile}
                options= {{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Router;
