import { Header } from "@/components/Header";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type DataType = {
    title: string;
    description: string;
    image: string;
}

export function Contacts() {
    const data: DataType[] = [
        {
            title: 'Estatua da Liberdade',
            description: 'Faça um passeio de barco e suba até a coroa para ter uma vista deslumbrante da cidade de Nova York.',
            image: '',
        },
        {
            title: 'Predio Empire State',
            description: 'Suba até o observatório para uma vista panorâmica de Manhattan e tire fotos inesquecíveis.',
            image: '',
        },
        {
            title: 'Central Park',
            description: 'Aproveite um piquenique, faça uma caminhada pelos belos jardins ou alugue uma bicicleta.',
            image: '',
        },
        {
            title: 'Edifício Flatiron',
            description: 'Visite a região ao redor para fazer compras e conhecer os famosos cafés e restaurantes.',
            image: '',
        }
    ];

    return (
        <ScrollView style={style.container}>
            <Header title="Atividade ao ar livre" placeholder="Buscar Atividades" />

            <View style={style.popularActivities}>
                <Text style={style.sectionText}>Atividades ao Ar Livre</Text>

                <View style={style.containerScroll}>
                    {data.map((item: DataType, index) => (
                        <View style={style.containerPopularActivities} key={index}>
                            <Image source={item.image} style={style.image} />

                            <View style={style.imageInfos}>
                                <Text style={style.infosTitle}>{item.title}</Text>
                                <Text style={style.infosDescription}>{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        gap: 32,
        flex: 1,
        paddingVertical: 16,
        paddingHorizontal: 16,
    },

    popularActivities: {
        height: '100%',
        gap: 12,
        marginTop: '56%',
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

    containerPopularActivities: {
        height: '100%',
        position: 'relative',
        width: '100%',
    },

    image: {
        borderRadius: 8,
        height: "100%",
        objectFit: "cover",
        position: 'relative',
        width: "100%",
    },

    imageInfos: {
        bottom: 0,
        left: 0,
        paddingHorizontal: 16,
        paddingVertical: 16,
        position: 'absolute',
        width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    infosTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },

    infosDescription: {
        color: '#fff',
        fontSize: 14,
    }
});
