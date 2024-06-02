import React from "react";
import { Header } from "@/components/Header";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const contactData = [
  {
    category: "Emergência",
    contacts: [
      { title: "Polícia", description: "190" },
      { title: "Bombeiros", description: "193" },
      { title: "SAMU", description: "192" },
    ],
  },
  {
    category: "Hospitais",
    contacts: [
      { title: "Hospital Geral", description: "1234-5678" },
      { title: "Hospital Infantil", description: "8765-4321" },
    ],
  },
  {
    category: "Delegacias",
    contacts: [
      { title: "Delegacia Central", description: "1122-3344" },
      { title: "Delegacia da Mulher", description: "2233-4455" },
    ],
  },
  {
    category: "Transporte Público",
    contacts: [
      { title: "Ônibus Municipal", description: "5566-7788" },
      { title: "Táxi", description: "9988-7766" },
    ],
  },
];

export function Contacts() {
  return (
    <ScrollView style={style.container}>
      <Header title="Contatos" placeholder="Busque Contatos de Emergência" />
      <View style={style.scrollContainer}>
        {contactData.map((section, index) => (
          <View key={index} style={style.section}>
            <Text style={style.sectionText}>{section.category}</Text>
            {section.contacts.map((contact, index) => (
              <View key={index} style={style.contact}>
                <Text style={style.contactTitle}>{contact.title}</Text>
                <Text style={style.contactDescription}>
                  {contact.description}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginTop: 200,
  },
  section: {
    marginBottom: 32,
  },
  sectionText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  contact: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  contactTitle: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  contactDescription: {
    color: "#000",
    fontSize: 16,
    marginTop: 4,
  },
});
