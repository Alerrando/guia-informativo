import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo, EvilIcons } from '@expo/vector-icons';
import Header from "@/components/header";

type DataType = {
    title: string;
    description: string;
    image: string;
}

export default function InfosAll() {
    return (
        <ScrollView style={style.container}>
            <Header title="Informações Gerais" placeholder="informações gerais" />

            <View style={style.contentContainer}>
                <View style={style.card}>
                <Text style={style.cardTitle}>População</Text>
                <Text style={style.cardContent}>
                    Presidente Prudente é um município brasileiro no interior do estado
                    de São Paulo. Segundo o IBGE, a população estimada em 2021 era de
                    aproximadamente 232.000 habitantes.
                </Text>
                </View>

                <View style={style.card}>
                <Text style={style.cardTitle}>Geografia</Text>
                <Text style={style.cardContent}>
                    A cidade está localizada na região oeste do estado de São Paulo, a
                    uma altitude média de 475 metros. Possui uma área total de cerca de
                    562 km².
                </Text>
                </View>

                <View style={style.card}>
                <Text style={style.cardTitle}>Clima</Text>
                <Text style={style.cardContent}>
                    O clima de Presidente Prudente é tropical de altitude, com verões
                    quentes e úmidos e invernos secos e moderadamente frios. A
                    temperatura média anual é de aproximadamente 22°C.
                </Text>
                </View>

                <View style={style.card}>
                <Text style={style.cardTitle}>Economia</Text>
                <Text style={style.cardContent}>
                    A economia de Presidente Prudente é diversificada, com destaque para
                    o comércio, serviços, educação e saúde. A cidade também possui um
                    setor agropecuário significativo e é um importante centro regional
                    de negócios.
                </Text>
                </View>

                <View style={style.card}>
                <Text style={style.cardTitle}>Cultura</Text>
                <Text style={style.cardContent}>
                    Presidente Prudente possui uma rica cena cultural, com teatros, cinemas,
                    galerias de arte e eventos culturais ao longo do ano. A cidade valoriza
                    suas tradições locais e promove uma variedade de atividades culturais para
                    os residentes e visitantes.
                </Text>
                </View>

                <View style={style.card}>
                <Text style={style.cardTitle}>Esportes e Lazer</Text>
                <Text style={style.cardContent}>
                    Os residentes de Presidente Prudente desfrutam de uma ampla gama de opções
                    de esportes e lazer, incluindo parques, clubes esportivos, trilhas para caminhada,
                    campos esportivos e muito mais. A cidade também abriga eventos esportivos locais
                    e competições.
                </Text>
                </View>

                <View style={style.card}>
                <Text style={style.cardTitle}>Segurança Pública</Text>
                <Text style={style.cardContent}>
                    A segurança pública é uma prioridade em Presidente Prudente, com uma rede
                    eficaz de delegacias, policiamento ostensivo e programas comunitários de
                    prevenção ao crime. Os moradores se sentem seguros e protegidos na cidade.
                </Text>
                </View>

                <View style={style.card}>
                <Text style={style.cardTitle}>Turismo Rural</Text>
                <Text style={style.cardContent}>
                    Além das atrações urbanas, Presidente Prudente também oferece oportunidades
                    para turismo rural, com fazendas, sítios históricos, vinícolas e atividades
                    ao ar livre nas áreas rurais circundantes.
                </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    contentContainer: {
      paddingHorizontal: 16,
      paddingBottom: 32,
      paddingTop: '30%', 
    },
    card: {
      backgroundColor: "#F0F0F0",
      borderRadius: 8,
      padding: 16,
      marginBottom: 32,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 8,
      color: "#000",
    },
    cardContent: {
      fontSize: 16,
      color: "#555",
    },
  });