import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from 'react-native-checkbox';

export default function CadastroEstoque({ navigation }) {
  const [produto, setProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [unidadeSelecionada, setUnidadeSelecionada] = useState(""); // Novo estado para armazenar a unidade selecionada
  const [custo, setCusto] = useState("");
  const [dataCompra, setDataCompra] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const isFormValid = () => {
    return produto && descricao && unidadeSelecionada && custo && dataCompra && quantidade;
  };

  const handleSave = () => {
    if (isFormValid()) {
      Alert.alert("Sucesso", "Estoque cadastrado com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Erro", "Preencha todos os campos antes de salvar!");
    }
  };

  const handleCheckboxChange = (unidade) => {
    setUnidadeSelecionada(unidade); // Altera a unidade selecionada
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/images/estoque.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.inputGroup}>
        <Ionicons name="cube" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome do Produto"
          placeholderTextColor="#000"
          value={produto}
          onChangeText={setProduto}
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons name="document-text" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Validade (DD/MM/AAAA)"
          placeholderTextColor="#000"
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>

      <Text style={styles.subHeader}>Selecione a Unidade de Medida:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxGroup}>
          <CheckBox
            label="g"
            checked={unidadeSelecionada === "g"}
            onChange={() => handleCheckboxChange("g")}
            containerStyle={styles.checkboxContainerStyle}
            labelStyle={styles.checkboxLabel}
          />
        </View>
        <View style={styles.checkboxGroup}>
          <CheckBox
            label="Kg"
            checked={unidadeSelecionada === "Kg"}
            onChange={() => handleCheckboxChange("Kg")}
            containerStyle={styles.checkboxContainerStyle}
            labelStyle={styles.checkboxLabel}
          />
        </View>
        <View style={styles.checkboxGroup}>
          <CheckBox
            label="Ml"
            checked={unidadeSelecionada === "Ml"}
            onChange={() => handleCheckboxChange("Ml")}
            containerStyle={styles.checkboxContainerStyle}
            labelStyle={styles.checkboxLabel}
          />
        </View>
        <View style={styles.checkboxGroup}>
          <CheckBox
            label="L"
            checked={unidadeSelecionada === "L"}
            onChange={() => handleCheckboxChange("L")}
            containerStyle={styles.checkboxContainerStyle}
            labelStyle={styles.checkboxLabel}
          />
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Ionicons name="stats-chart" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder= {`Quantidade (${unidadeSelecionada})`}
          placeholderTextColor="#000"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons name="cash" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Custo do Produto"
          placeholderTextColor="#000"
          value={custo}
          onChangeText={setCusto}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputGroup}>
        <Ionicons name="calendar" size={24} color="#4CAF50" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Data da Compra (DD/MM/AAAA)"
          placeholderTextColor="#000"
          value={dataCompra}
          onChangeText={setDataCompra}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  subHeader: {
    fontSize: 18,
    color: "#4CAF50",
    marginBottom: 10,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 5,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#FF5252",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  checkboxContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainerStyle: {
    borderWidth: 0,
    backgroundColor: "transparent",
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#000",
  },
});
