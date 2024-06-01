import { Image, StyleSheet, Text, View } from "react-native";

type DataType = {
    title: string;
    description: string;
    image: string;
}

export function ImportantFigures(){
    const data: DataType[] = [
        {
            title: 'Antônio Sandoval Neto',
            description: 'Fundador de Presidente Prudente.',
            image: '../../../assets/images/antonio-sandoval-neto.jpg',
        },
        {
            title: 'Francisco-Paula-Goulart',
            description: 'Fundador do município de Presidente Prudente',
            image: '../../../assets/images/Francisco-Paula-Goulart.png',
        },
        {
            title: 'Monsenhor Sarrion',
            description: 'Importante líder religioso em Presidente Prudente.',
            image: '../../../assets/images/monsenhor-sarrion.jpg',
        },
        {
            title: 'Orlando Quagliato',
            description: 'Um dos fundadores da Cooperativa de Crédito Rural.',
            image: '../../../assets/images/orlando-quagliato.png',
        }
    ];

    return(
        <View style={style.importantFigures}>
                <Text style={style.sectionText}>Figuras Importantes</Text>

                <View style={style.carousel}>
                    {data.map((item: DataType, index) => (
                        <View style={style.containerImportantsFigure} key={index}>
                            <Image source={item.image} style={style.image} />

                            <View style={style.imageInfos}>
                                <Text style={style.infosTitle}>{item.title}</Text>
                                <Text style={style.infosDescription}>{item.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
    )
}

const style = StyleSheet.create({
    importantFigures: {
        alignItems: 'flex-start',
        height: 'auto',
        gap: 16,
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: '30%',
        paddingVertical: 16,
        paddingHorizontal: 16,
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

    containerImportantsFigure: {
        height: 240,
        position: 'relative',
        width: '55%',
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
        fontSize: 22,
        fontWeight: 'bold',
    },

    infosDescription: {
        color: '#fff',
        fontSize: 12,
    }
});