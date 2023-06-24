import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import RegisterPage from '../pages/RegisterPage';
import MoviesDetaisPage from '../pages/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='MoviesPage' component={MoviesPage} 
                      options={{title: 'Filmes em Cartaz', headerTitleAlign: 'center'}}/>
            <Stack.Screen name='DetaisPage' component={MoviesDetaisPage} 
                      options={{title: '  '}}/>
            <Stack.Screen name='LoginPage' component={LoginPage}
                      options={{title: 'Login', headerTitleAlign: 'center'}} />
            <Stack.Screen name='RegisterPage' component={RegisterPage}
                      options={{headerShown: false}}  />
            <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage}
                      options={{headerTitleAlign: 'center', title: 'Esqueci a senha'}} />
        </Stack.Navigator>
    );
}
