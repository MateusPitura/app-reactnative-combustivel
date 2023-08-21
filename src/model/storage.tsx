import AsyncStorage from "@react-native-community/async-storage";

export const create = async (key: any, value: any) => {
    try{
        await AsyncStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error){
        console.log(error);
        return false;
    }
}

export const read = async (key: any) => {
    try{
        const response = await AsyncStorage.getItem(key);
        const data = response ? JSON.parse(response) : null;
        return data;
    } catch (error){
        console.log(error)
        return null;
    }
}

export default { create, read };