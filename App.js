import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BusinessesListScreen from './src/screens/BusinessesListScreen';
import ArticlesListScreen from './src/screens/ArticlesListScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Businesses" component={BusinessesListScreen} />
        <Stack.Screen name="Articles" component={ArticlesListScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
