import { Button, Text, View } from "react-native"

export default function AboutScreen({route, navigation}) {
    const {name} = route?.params;
    return (<View><Text>AboutScreen {name}</Text>
            <Button title="Update name to tash" onPress={() => navigation?.setParams({
                name: 'tash'
             })}></Button>
    </View>);
} 