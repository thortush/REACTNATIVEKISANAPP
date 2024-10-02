import { Button, Text, View } from "react-native"

export default function HomeScreen({navigation}) {
    return (<View><Text>HOME</Text>
             <Button title="go to about " onPress={() => navigation?.navigate('About', {
                name: 'tushar'
             })}></Button>
    </View>);
} 