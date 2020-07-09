import React from 'react';
import { View, Button, Text } from 'react-native';

import { useAuth } from '@contexts/auth';

import styles from './styles';

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth();

    const handleSignOut = (): void => {
        signOut();
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Text style={styles.defaultText}>{user?.name}</Text>
            </View>
            <Button title="Logout" onPress={handleSignOut} />
        </View>
    );
};

export default Dashboard;
