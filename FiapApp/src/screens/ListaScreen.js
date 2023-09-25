import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, StatusBar, FlatList, 
  TextInput, ActivityIndicator, Modal } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { signOut } from 'firebase/auth';
import { auth, db } from '../configs/fiap_firebase';
import { query, ref, orderByChild, equalTo, onValue } from 'firebase/database';

export default function ListaScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [inputItemEdit, setInputItemEdit] = useState('');
  const [itemEditId, setItemEditId] = useState('');  
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { 
    console.log('Effect 1');
    // Se já estiver autenticado, redirecionar para a tela de Lista
    auth.onAuthStateChanged((user) => {
        console.log('Effect 2', user);
        
      if (user == null) {
        navigation.replace('Login');
      } else {
        const currentUserItemsRef = query(ref(db, 'items'), orderByChild('userId'), equalTo(auth.currentUser.uid));

        onValue(currentUserItemsRef, (snapshot) => {
          setData([]);
          const data = snapshot.val();
          if (data !== null) {
            Object.values(data).map((item) => {
              setData((oldArray) => [...oldArray, item]);
            });
          }
        });

      }
    });
  }, []);


  const sair = () => {
   signOut(auth);
  }

  // add
  const adicionar = () => {
   
  };

  // update
  const alterar = () => {
  
  };

  // delete
  const deletar = (id) => {
   
  };

  const openEditModal = (id, text) => {
    setItemEditId(id);
    setInputItemEdit(text);
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <View style={styles.textInputRow}>
          <Pressable style={styles.button} onPress={sair}>
            <Text style={styles.buttonText}>Sair</Text>
          </Pressable >
        </View>      
        <View style={styles.textInputRow}>
          <TextInput
            style={styles.textInput} 
            placeholder={'Item'}
            value = { inputItem }
            onChangeText = {(value) => setInputItem(value)}
          />
          <Pressable style={styles.textInputButton} onPress={()=> adicionar()}>
            <Text style={styles.textInputButtonText}>Adicionar</Text>
          </Pressable >
        </View>
      </View>      
      <View>
        <ActivityIndicator animating={loading} color="blue" size='large' />
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.flatlistItem}>
              <Text style={styles.flatlistItemText}>{item.descricao}</Text>
              <View style={styles.flatlistItemButtons}>
                <Pressable style={styles.button} onPress={() => deletar(item.id)}>
                  <FontAwesome name="trash-o" size={20} color="#fff" />
                </Pressable>
                <View style={{width: 8}}/>
                <Pressable style={styles.button} onPress={() => openEditModal(item.id, item.descricao)}>
                  <FontAwesome name="edit" size={20} color="#fff" />
                </Pressable>
                </View>
              </View>
          )}
        />
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.textInputRow}>
            <TextInput
              style={styles.textInput} 
              placeholder={'Item'}
              value = { inputItemEdit }
              onChangeText = {(value) => setInputItemEdit(value)}
            />
            <Pressable style={styles.textInputButton} onPress={()=> alterar()}>
              <Text style={styles.textInputButtonText}>Alterar</Text>
            </Pressable >
          </View>
          <View style={styles.textInputRow}>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 70,
    padding: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  headerText: {
    color: 'purple',
    fontSize: 32,
  },
  bodyContainer: {
    padding: 8,
    marginTop: 16,
  },
  textInputLabel: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 14,
  },
  textInputRow: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 8,
  },
  textInputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    paddingHorizontal: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  textInputButtonText: {
    color: 'white',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    padding: 8,
    borderRadius: 8,
    padding: 16,    
    marginVertical: 8,
  },
  buttonText: {
    color: 'white',
  },
  flatlistItem: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#ccc', 
    borderRadius: 8,
    margin: 8,
    padding: 8,
  },
  flatlistItemText: {
    color: 'black', 
  },
  flatlistItemButtons: {
    flexDirection: 'row',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightseagreen',
  },
});