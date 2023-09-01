import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { Button, Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const screenWidth = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();

export const TabA: React.FC = () => {
    const navigation = useNavigation()
    return <View style={styles.container}>
        <Text>This is Tab A</Text>
        <Button title="To Screen A" onPress={() => navigation.navigate("ScreenA")} />
    </View>
}

const TabB: React.FC = () => {
    return <View style={styles.container}>
        <Text>This is Tab B</Text>
    </View>
}

const TabC: React.FC = () => {
    return <View style={styles.container}>
        <Text>This is Tab C</Text>
    </View>
}

export const tabOptions = [
    {
        route: "TabA",
        label: "TabA",
        screenComponent: TabA,
    },
    {
        route: "TabB",
        label: "TabB",
        screenComponent: TabB,
    },
    {
        route: "TabC",
        label: "TabC",
        screenComponent: TabC,
    }
]

const TabNavigator: React.FunctionComponent = () => {
    return <Tab.Navigator
        initialRouteName={"TabA"}
        tabBarPosition="bottom"
    >
        {tabOptions.map((tabOption) => (
            <Tab.Screen
                name={tabOption.route}
                component={tabOption.screenComponent}
                key={tabOption.route}
            />
        ))}
    </Tab.Navigator>
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    },
});


export default TabNavigator