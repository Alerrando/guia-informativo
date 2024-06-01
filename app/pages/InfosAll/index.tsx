import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo, EvilIcons } from '@expo/vector-icons';
import { Header } from "@/components/Header";

type DataType = {
    title: string;
    description: string;
    image: string;
}

export function InfosAll() {
    const data: DataType[] = [
        {
            title: 'Salão Federal',
            description: 'Local onde George Washington prestou juramento como o primeiro presidente dos Estados Unidos.',
            image: '',
        },
        {
            title: 'Edifício Empire State',
            description: 'Este arranha-céu art déco é um dos edifícios mais reconhecidos em Nova York e em todo o mundo!',
            image: '',
        },
        {
            title: 'Ponte do Brooklyn',
            description: 'Fantástico local para fotografar na cidade, a Ponte do Brooklyn é tão histórica quanto compatível com o Instagram!',
            image: '',
        },
        {
            title: 'Igreja da Trindade',
            description: 'A Igreja da Trindade é um exemplo impressionante de arquitetura em estilo neogótico.',
            image: '',
        }
    ];

    const truncateDescription = (description: string, length: number) => {
        return description.length > length ? description.substring(0, length) + '...' : description;
    };

    return (
        <View style={style.container}>
            <Header title="Pontos Turisticos" placeholder="Buscar Pontos Turisticos" />

            <View style={style.popular}>
                <Text style={style.sectionText}>Popular no momento</Text>

                <View style={style.carousel}>
                    {data.map((item: DataType, index) => (
                        <View style={style.containerHistoricalPoints} key={index}>
                            <Image source={item.image} style={style.image} />

                            <View style={style.imageInfos}>
                                <Text style={style.infosTitle}>{item.title}</Text>
                                <Text style={style.infosDescription}>{truncateDescription(item.description, 100)}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        gap: 32,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },

    popular: {
        height: '55%',
        gap: 12,
        marginTop: '30%',
        width: '100%',
    },

    sectionText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },

    carousel: {
        flexDirection: 'row',
        height: '100%',
        gap: 18,
        overflow: 'auto',
        width: '100%',
    },

    containerHistoricalPoints: {
        height: '100%',
        position: 'relative',
        width: '80%',
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
