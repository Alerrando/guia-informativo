import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Entypo, FontAwesome6, Ionicons, Feather, AntDesign, Fontisto } from '@expo/vector-icons';
import Header from "@/components/header";
import ImportantFigures from "@/components/importantFigures";
import HistoryCity from "@/components/historyCit";
import CityFormation from "@/components/cityFormation";

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: '#fff' }} >
            <Header title="Histórico da Cidade" placeholder="Buscar Atividades" />

            <ImportantFigures />
            <HistoryCity />
            <CityFormation />
        </ScrollView>
    )
}
