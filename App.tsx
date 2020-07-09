import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';

import AppIndex from './src/App';

const App: React.SFC = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <AppIndex />
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;
