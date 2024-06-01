import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Entypo, FontAwesome6, Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import { useColorScheme } from '@/hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './pages/Home';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { InfosAll } from './pages/InfosAll';
import { CustomTabBar } from '@/components/CustomTabBar';
import { Contacts } from './pages/Contacts';
import { Attractions } from './pages/Attractions';

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
      >
        <Tab.Screen 
          name="home" 
          component={Home} 
          options={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            title: 'Home',
            tabBarIcon: () => (
              <View>
                <Entypo name="home" size={18} color="white" />
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="attractions"
          component={Attractions}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            title: 'Pontos',
            tabBarIcon: () => (
              <View>
                <FontAwesome6 name="signs-post" size={18} color="white" />
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="infos-all" 
          component={InfosAll} 
          options={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            title: 'Infos',
            tabBarIcon: () => (
              <View>
                <AntDesign name="infocirlce" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="contacts" 
          component={Contacts} 
          options={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            title: 'Contatos',
            tabBarIcon: () => (
              <View>
                <AntDesign name="contacts" size={24} color="white" />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

