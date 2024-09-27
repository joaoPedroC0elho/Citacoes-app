import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, StatusBar } from 'react-native';
import quotesData from './src/quoutes.json'; // Importa o JSON localmente

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(null);

  // Carrega citações na inicialização
  useEffect(() => {
    const loadQuotes = () => {
      setCurrentQuote(quotesData[Math.floor(Math.random() * quotesData.length)]);
    };
    loadQuotes();
  }, []);

  // Função para exibir uma citação aleatória
  const showRandomQuote = () => {
    const randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
    setCurrentQuote(randomQuote);
  };

  if (!currentQuote) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Image source={{ uri: currentQuote.image }} style={styles.image} />
      <Text style={styles.quoteText}>"{currentQuote.quote}"</Text>
      <Text style={styles.authorText}>- {currentQuote.author}</Text>
      <Button title="Nova Citação" onPress={showRandomQuote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;