import { useState } from 'react';
import { Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function EVIRScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>eVIR</Text>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
        <Text style={styles.buttonText}>Ver descrição</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.description}>
              Este aplicativo foi desenvolvido especialmente para motoristas da FedEx realizarem as vistorias de pré e pós viagem entre as filiais da empresa. Com uma interface prática e direta, os motoristas registram qualquer problema detectado antes de sair e após retornar da rota.

              {"\n\n"}Além disso, os gerentes podem visualizar essas informações em tempo real e decidir se o veículo pode continuar operando, ou se deve ser direcionado para a filial FedEx mais próxima que possua um mecânico autorizado para manutenção adequada.
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080', // roxo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 100, // Adiciona um espaçamento na parte inferior
  },
  title: {
    color: 'orange',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 90, // Ajuste o botão para ficar acima da barra de navegação
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: '#800080',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#800080',
    padding: 20,
    borderRadius: 12,
  },
  description: {
    color: 'orange',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#800080',
    fontWeight: 'bold',
  },
});
