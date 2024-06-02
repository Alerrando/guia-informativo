import { Entypo, EvilIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

type HeaderProps = {
    title: string;
    placeholder: string;
}

export default function Header({ title, placeholder }: HeaderProps){
    return (
        <View style={style.header}>
            <Text style={style.titleLocation}>{title}</Text>
            <View style={style.headerTitle}>
                <Text style={style.titleHeader}>Presidente Prudente, SP</Text>
                <Entypo name="location-pin" size={24} color="black" />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'auto',
        gap: 4,
        paddingHorizontal: 16,
        position: 'absolute',
        top: 22,
        width: '100%',
    },

    headerTitle: {
        flexDirection: 'row',
        gap: 8
    },

    titleHeader: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },

    titleLocation: {
        color: '#000',
        fontSize: 14
    },
})