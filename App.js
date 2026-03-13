import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

const tips = [
  { id: "1", tip: "Sé respetuoso y trata a la otra persona con amabilidad." },
  { id: "2", tip: "Escucha con atención cuando hable." },
  { id: "3", tip: "Sé tú mismo, no finjas ser alguien que no eres." },
  { id: "4", tip: "Ten confianza, pero sin ser arrogante." },
  { id: "5", tip: "Cuida tu apariencia y tu higiene personal." },
  { id: "6", tip: "Hazla reír con buen sentido del humor." },
  { id: "7", tip: "Muestra interés por sus gustos y hobbies." },
  { id: "8", tip: "Sé honesto con lo que sientes." },
  { id: "9", tip: "Respeta su espacio y sus decisiones." },
  { id: "10", tip: "La comunicación es clave en cualquier relación." }
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.tipText}>{item.tip}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tips para Conquistar 💖</Text>
      <FlatList
        data={tips}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f0",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#d63384",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tipText: {
    fontSize: 16,
    color: "#333",
  },
});