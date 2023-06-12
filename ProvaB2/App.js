import LoginPage from './src/pages/LoginPage';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import RegisterPage from './src/pages/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RPGPage from './src/pages/RPGPage';
import DashboardPage from './src/pages/DashBoardPage';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerTitleAlign: 'center', title: 'Itens de troca RPG'}} name='RPGPage' component={RPGPage}/>
            <Stack.Screen options={{headerTitleAlign: 'center'}} name='DashboardPage' component={DashboardPage}/>
            
            <Stack.Screen options={{title: 'Login', headerTitleAlign: 'center'}} name='LoginPage' component={LoginPage}/>
            <Stack.Screen options={{headerShown: false}}  name='RegisterPage' component={RegisterPage}/>
            <Stack.Screen options={{headerTitleAlign: 'center'}} name='ForgotPasswordPage' component={ForgotPasswordPage}/>
            
            
        </Stack.Navigator>
      </NavigationContainer>
  );
}
