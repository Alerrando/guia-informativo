import { Header } from "@/components/Header";
import { Image, StyleSheet, Text, View } from "react-native";

type AttractionsType = {
    attractionsName: string;
    location: string;
    image: string;
}

export function Attractions(){
    const data: AttractionsType[] = [
        {
            attractionsName: 'Parque do Povo',
            location: 'Um parque urbano que oferece áreas de lazer, esportes e atividades ao ar livre para moradores e visitantes.',
            image: '../../../assets/images/parque-do-povo.jpg',
        },
        {
            attractionsName: 'Museu e Arquivo Histórico Municipal',
            location: 'Museu dedicado à preservação da história de Presidente Prudente e da região.',
            image: '../../../assets/images/museu.png',
        },
        {
            attractionsName: 'Cidade da Criança',
            location: 'Um parque temático com diversas atrações voltadas para o público infantil.',
            image: '../../../assets/images/cidade-da-crianca.jpg',
        },
        {
            attractionsName: 'Balneário da Amizade',
            location: 'Área de lazer com lagos para atividades aquáticas, esportes e piqueniques.',
            image: '../../../assets/images/balneario-da-amizade.jpg',
        },
        {
            attractionsName: 'Feira de Artesanato',
            location: 'Evento semanal que reúne artesãos locais oferecendo uma variedade de produtos artesanais.',
            image: '../../../assets/images/feira-de-artesanato.jpg',
        },
    ];

    return(
        <View style={{ backgroundColor: "#fff", height: "100vh" }}>
            <Header title="Pontos Turisticos" placeholder="Buscar Pontos Recomendados" />
            <View style={style.container}>

                <View style={style.attractions}>
                    <Text style={style.sectionText}>Pontos Turisticos</Text>

                    <View style={style.carousel}>
                        {data.map((item: AttractionsType, index) => (
                            <View style={style.containerAttractions} key={index}>
                                <Image source={item.image} style={style.image} />

                                <View style={style.imageInfos}>
                                    <Text style={style.infosTitle}>{item.attractionsName}</Text>
                                    <Text style={style.infosDescription}>{item.location}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: "100%",
        gap: 32,
        justifyContent: 'center',
        marginTop: '5%',
        paddingVertical: 16,
        paddingHorizontal: 16,
    },

    attractions: {
        height: 'auto',
        gap: 12,
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

    containerAttractions: {
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        height: '90%',
        paddingHorizontal: 6,
        paddingVertical: 6,
        position: 'relative',
        width: '80%',
    },

    image: {
        borderRadius: 8,
        height: 180,
        objectFit: "cover",
        position: 'relative',
        width: "100%",
    },

    imageInfos: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingVertical: 8,
        width: "100%",
    },

    infosTitle: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
    },

    infosDescription: {
        color: '#000',
        fontSize: 14,
    }
});