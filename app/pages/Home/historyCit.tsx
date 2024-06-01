import { Fontisto } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

type DataType = {
    title: string;
    description: string;
    image: string;
    data: string;
}

export function HistoryCity(){
    const data: DataType[] = [
        {
            title: 'Fundação',
            description: `A cidade de Presidente Prudente foi fundada em 14/09/1917 por Antônio Sandoval Neto. Ela recebeu o nome em homenagem ao ex-presidente Prudente de Morais, o primeiro presidente civil do Brasil.`,
            image: '../../../assets/images/fundação.jpeg',
            data: "14/09/1917",
        },
        {
            title: 'Diocese de Presidente Prudente',
            description: 'Em 16/02/1968, foi criada a Diocese de Presidente Prudente. Isso representou um importante marco religioso e cultural para a cidade, consolidando-a como um centro regional.',
            image: '../../../assets/images/santuario-nossa-senhora.jpg',
            data: "16/02/1968",
        },
        {
            title: 'Universidade do Oeste Paulista (UNOESTE)',
            description: 'Em 1972, foi fundada a Universidade do Oeste Paulista (UNOESTE), uma das maiores e mais importantes instituições de ensino superior da região.',
            image: '../../../assets/images/unoeste.jpg',
            data: "3/10/1972"
        },
        {
            title: 'Criação do Parque do Povo',
            description: 'O Parque do Povo, inaugurado em 2002, é um dos principais pontos de lazer e esporte da cidade. Este parque urbano se tornou um marco importante na vida social e recreativa dos moradores.',
            image: '../../../assets/images/parque-do-povo.jpg',
        }
    ];

    return(
        <View style={{ height: "auto", position: "relative" }}>
            <View style={style.historic}>
                <Text style={style.sectionText}>Evento Históricos</Text>

                <View style={style.containerScroll}>
                    {data.map((item: DataType, index) => (
                        <View style={style.containerHistoric} key={index}>
                            <Image source={item.image} style={style.image} />
                            <View style={style.overlay} />

                            <View style={style.imageInfos}>
                                <View style={style.infosHeader}>
                                    <Text style={style.infosTitle}>{item.title}</Text>
                                    <View style={style.infosHeaderDate}>
                                        <Text style={style.headerDateTitle}>{item.data}</Text>
                                        <Fontisto name="date" size={14} color="black" />
                                    </View>
                                </View>
                                <Text style={style.infosDescription}>{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100%",
        gap: 18,
        paddingHorizontal: 22,
        paddingVertical: 64,
        width: "100%",
    },
    historic: {
        height: '100%',
        gap: 22,
        paddingHorizontal: 8,
        width: '100%',
    },

    sectionText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },

    containerScroll: {
        flexDirection: 'column',
        height: '100%',
        gap: 18,
        overflow: 'auto',
        width: '100%',
    },

    containerHistoric: {
        flexDirection: "row",
        height: 180,
        gap: 12,
        position: 'relative',
        width: "100%",
    },

    image: {
        borderRadius: 8,
        height: "100%",
        objectFit: "cover",
        position: 'relative',
        width: "35%",
    },

    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        height: "100%",
        left: 4,
        position: "absolute",
        width: '35%',
    },

    imageInfos: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        gap: 8,
        paddingVertical: 4,
        width: "65%",
    },

    infosHeader: {
        flexDirection: "column",
        gap: 4,
    },

    infosTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },

    infosHeaderDate: {
        alignItems: "center",
        flexDirection: 'row',
        gap: 8,
    },

    headerDateTitle: {
        color: '#000',
        fontSize: 12,
    },

    infosDescription: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'semibold'
    }
});
