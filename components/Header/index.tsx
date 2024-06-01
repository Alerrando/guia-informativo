import { Entypo, EvilIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";

type HeaderProps = {
    title: string;
    placeholder: string;
    searchVisible: boolean;
}

export function Header({ title, placeholder, searchVisible = true }: HeaderProps){
    return (
        <View style={style.header}>
            <Text style={style.titleLocation}>{title}</Text>
            <View style={style.headerTitle}>
                <Text style={style.titleHeader}>Presidente Prudente, SP</Text>
                <Entypo name="location-pin" size={24} color="black" />
            </View>

            {searchVisible && (
                <View style={style.search}>
                    <EvilIcons name="search" size={24} color="black" />
                    <TextInput placeholder={placeholder} style={style.searchInput} />
                </View>
            )}

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
        top: 12,
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

    search: {
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderColor: '#F2F2F2',
        borderRadius: 8,
        borderWidth: 2,
        height: 'auto',
        flexDirection: 'row',
        gap: 12,
        marginTop: 32,
        paddingHorizontal: 8,
        paddingVertical: 6,
        width: '100%',
    },

    searchInput: {
        borderWidth: 0,
        color: '#444',
        fontSize: 16,
        fontWeight: 'bold',
        outlineWidth: 0,
        width: '100%',
    },
})