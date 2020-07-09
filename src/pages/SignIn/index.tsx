import React from 'react';
import { View, Button, Text } from 'react-native';

import styles from './styles';
import { useAuth } from '@contexts/auth';

const SignIn: React.FC = () => {
    const { signIn } = useAuth();

    const handleSignIn = async () => {
        await signIn();
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.defaultText}>Connect With Your Account</Text>
            </View>
            <Button title="Sign In" onPress={handleSignIn} />
        </View>
    );
};

export default SignIn;
