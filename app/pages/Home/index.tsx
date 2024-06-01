import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo, FontAwesome6, Ionicons, Feather, AntDesign, Fontisto } from '@expo/vector-icons';
import { Header } from "@/components/Header";
import { HistoryCity } from "./historyCit";
import { ImportantFigures } from "./importantFigures";
import { CityFormation } from "./cityFormation";



export function Home({ navigation }) {
    

    return (
        <ScrollView style={{ backgroundColor: '#fff', height: 'auto' }}>
            <Header title="Histórico da Cidade" placeholder="Buscar Atividades" searchVisible={false} />

            <ImportantFigures />
            <HistoryCity />
            <CityFormation />
        </ScrollView>
    )
}
