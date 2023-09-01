import { useNavigation } from '@react-navigation/native';
import { View, Button, StyleSheet } from 'react-native';

const ScreenA: React.FunctionComponent = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("ScreenB")} title={"To Screen B"} />
            <View style={{ marginTop: 10 }}>
                <Button onPress={() => navigation.navigate("TabB")} title={"To Tab B"} />
            </View>
        </View>
    );
};

const ScreenB: React.FunctionComponent = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("ScreenC")} title={"To Screen C"} />
            <View style={{ marginTop: 10 }}>
                <Button onPress={() => navigation.navigate("TabB")} title={"To Tab B"} />
            </View>
        </View>
    );
};


const ScreenC: React.FunctionComponent = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate("TabB")} title={"To tab B"} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
});

export { ScreenA, ScreenB, ScreenC };
