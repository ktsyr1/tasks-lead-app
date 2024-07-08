import { StyleSheet, Platform, View, Text } from 'react-native';


export default function HomeScreen() {
    return (
        <View   >
             
            <View style={styles.stepContainer}>
                <Text >Step 1: Try it</Text>
                <Text>
                    Edit <Text  >app/(tabs)/index.tsx</Text> to see changes.
                    Press{' '}
                    <Text  >
                        {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
                    </Text>{' '}
                    to open developer tools.
                </Text>
            </View>
            <View>
                <Text>app test</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    titleContainer: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 20,
        display: "flex",

    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
