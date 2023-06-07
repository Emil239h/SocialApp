import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function LoginForm({route, swapForm} : any) {
    const { setUserToken } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Text>E-mail</Text>
            <TextInput />
            <Text>Adgangskode</Text>
            <TextInput />
            <Text>Ikke oprettet endnu? 
                <Button title='Opret dig nu' onPress={() =>
                    swapForm()
                }/>
            </Text>
            <Button title='Login' onPress={() => setUserToken('test')} />
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 50,
    },
    link:{
        color: 'blue'
    },
    container: {
        marginTop: 50,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
  });
  