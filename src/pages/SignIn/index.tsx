import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../contexts/auth';

import styles from './styles';

const SignIn: React.FC = () => {
    const { signIn } = useAuth();

    const handleSignIn = async () => {
        await signIn();
    };

    return (
        <View style={styles.container} >
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    );
};

export default SignIn;
