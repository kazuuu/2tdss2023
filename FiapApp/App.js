import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType=''
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.container, styles.bgDark ]}>
          <Text>MODAL</Text>
          <Pressable
            style={styles.botao}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.botaoFonte}>FECHAR</Text>
          </Pressable>

        </View>
      </Modal>

      <Text>teste</Text>
      <Pressable
        style={styles.botao}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.botaoFonte}>Abrir</Text>
      </Pressable>

    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgDark: {
    backgroundColor: '#ccc',
  },
  botao: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  botaoFonte: {
    fontSize: 20
  }

});

export default App;
