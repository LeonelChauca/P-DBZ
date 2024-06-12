import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Inicio } from './components/Inicio';
import { Personajes } from './components/Personajes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Mundos } from './components/Mundos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Personajes') {
              iconName = 'accessibility-outline';
            } else if (route.name === 'Filtrar') {
              iconName ='filter-outline';
            }
            else if (route.name === 'Planetas') {
              iconName ='planet-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          activeTintColor: '#F1843E',
          inactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Personajes" component={Inicio} />
        <Tab.Screen name="Planetas" component={Mundos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
