import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardPage from '../pages/DashboardPage';
const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name='DashboardPage' component={DashboardPage} 
                      options={{title: '  '}}/>
        </Stack.Navigator>
    );
}

