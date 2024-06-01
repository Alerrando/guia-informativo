import { StyleSheet, Text, View } from "react-native";

export function CityFormation(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Formação da cidade de presidente prudente</Text>
            <View style={styles.section}>
                <Text style={styles.heading}>Primeiros Habitantes e Colonização</Text>
                <Text style={styles.text}>
                    Antes da chegada dos colonizadores europeus, a região onde hoje se encontra Presidente Prudente era habitada por povos indígenas, principalmente das etnias Kaingang e Guarani.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Fundação da Cidade</Text>
                <Text style={styles.text}>
                    A cidade de Presidente Prudente foi oficialmente fundada em 14 de setembro de 1917 por Antônio Sandoval Neto. Ele adquiriu terras na região e iniciou o processo de loteamento e venda das mesmas, visando atrair colonos e desenvolver a área. O nome da cidade foi uma homenagem a Prudente de Morais, o primeiro presidente civil do Brasil.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Primeiros Anos e Crescimento Inicial</Text>
                <Text style={styles.text}>
                    Nos primeiros anos, a economia da cidade era predominantemente agrícola, com o cultivo de café sendo a principal atividade econômica. O clima favorável e o solo fértil atraíram muitos imigrantes, principalmente italianos, espanhóis e japoneses, que contribuíram para o crescimento da cidade.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Desenvolvimento Urbano e Econômico</Text>
                <Text style={styles.text}>
                    Durante as décadas de 1940 e 1950, Presidente Prudente experimentou um rápido crescimento econômico e urbano. A chegada da Estrada de Ferro Sorocabana em 1928 foi um marco importante, facilitando o transporte de mercadorias e pessoas e impulsionando o desenvolvimento da região.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Infraestrutura e Serviços Públicos</Text>
                <Text style={styles.text}>
                    O crescimento populacional levou à necessidade de investimentos em infraestrutura e serviços públicos. Foram construídas escolas, hospitais, e a administração pública começou a se organizar. O primeiro prefeito da cidade, Francisco de Paula Goulart, desempenhou um papel crucial na estruturação inicial da administração municipal.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Educação e Saúde</Text>
                <Text style={styles.text}>
                    A educação sempre foi uma prioridade para a cidade. A criação de instituições de ensino, como a Universidade do Oeste Paulista (UNOESTE) em 1972, teve um impacto significativo no desenvolvimento educacional da região. Na área da saúde, a construção de hospitais e a formação de profissionais médicos foram fundamentais para atender a população crescente.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Modernização e Expansão</Text>
                <Text style={styles.text}>
                    Nas últimas décadas, Presidente Prudente passou por um processo de modernização e expansão. A cidade diversificou sua economia, com o crescimento dos setores industrial e de serviços. Investimentos em infraestrutura urbana, como a construção de novas vias e melhorias no transporte público, foram essenciais para acompanhar o crescimento populacional.
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Cultura e Lazer</Text>
                <Text style={styles.text}>
                    Presidente Prudente também se destaca por seus eventos culturais e espaços de lazer. A criação do Parque do Povo em 2002 é um exemplo de um projeto que proporciona áreas de lazer e atividades ao ar livre para os moradores. A cidade é sede de eventos como a Feira Agropecuária e Industrial (FAPI), que atrai visitantes de toda a região.
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      height: "auto",
      gap: 32,
      marginTop: "5%",
      padding: 10,
    },
    title: {
        fontSize: 32,
        textAlign: "center",
    },
    section: {
      marginBottom: 20,
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
    },
  });