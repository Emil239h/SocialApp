import AsyncStorage from "@react-native-async-storage/async-storage";

const storeAuth = async (value) => { //TODO lav et interface
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
        // saving error // TODO håndter fejl
    }
}

const getAuth = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value // TODO håndter fejl
    }
}

export {storeAuth, getAuth};