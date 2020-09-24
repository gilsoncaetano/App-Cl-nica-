import * as React from "react";
import { Text, View } from "../components/Themed";
import { TextInput, ScrollView } from "react-native-gesture-handler";
import {
  Picker,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
  unstable_enableLogBox,
  Alert,
} from "react-native";
import Listar from "../screens/Listar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
let cp = "";
let lograd = "";
let numer = "";
let compl = "";
let bair = "";
let tip = "";
let id = "";

export default function Endereco({ navigation }) {
  const [cepend, setCepend] = React.useState("");
  const [tipoend, setTipoend] = React.useState("");
  const [logradouroend, setLogradouroend] = React.useState("");
  const [numeend, setNumeend] = React.useState("");
  const [complementoend, setComplementoend] = React.useState("");
  const [bairroend, setBairroend] = React.useState("");
  const [idpac, setIdpac] = React.useState("");

  return (
    <View style={estilo.area}>
      <ImageBackground source={require("../img/azul.png")} style={estilo.fundo}>
        <ScrollView>
          <Text style={estilo.txtcdasrto}>Endereço</Text>
          <Text style={estilo.txtenvio}>
            Preencha todos os campos e selecione "Salvar"
          </Text>
          <TextInput
            placeholder="CEP"
            keyboardType="numeric"
            style={estilo.dados}
            onChangeText={(value) => setCepend(value)}
            value={cepend}
          />
          <TextInput
            placeholder="Logradouro"
            style={estilo.dados}
            onChangeText={(value) => setLogradouroend(value)}
            value={logradouroend}
          />
          <TextInput
            placeholder="Número"
            style={estilo.dados}
            onChangeText={(value) => setNumeend(value)}
            value={numeend}
          />
          <TextInput
            placeholder="Complemento"
            style={estilo.dados}
            onChangeText={(value) => setComplementoend(value)}
            value={complementoend}
          />
          <TextInput
            placeholder="Bairro"
            style={estilo.dados}
            onChangeText={(value) => setBairroend(value)}
            value={bairroend}
          />
          <TextInput
            placeholder="Codigo"
            style={estilo.dados}
            onChangeText={(value) => setIdpac(value)}
            value={idpac}
          />
          <Picker
            selectedValue={tipoend}
            mode="dialog"
            onValueChange={setTipoend}
            style={estilo.sexo}
          >
            <Picker.Item label="Tipo" value="Tipo" />
            <Picker.Item label="Av" value="Av" />
            <Picker.Item label="Rua" value="Rua" />
            <Picker.Item label="Al" value="Al" />
            <Picker.Item label="Praça" value="Praça" />
          </Picker>

          <View style={estilo.logar}>
            <Button title="" />
            <Text
              style={estilo.txtlogar}
              onPress={() => {
                navigation.navigate("Listar");
                cp = cepend;
                lograd = logradouroend;
                numer = numeend;
                compl = complementoend;
                bair = bairroend;
                tip = tipoend;
                id = idpac;
                cadastrar();
              }}
              //onPress={() => }
            >
              SALVAR{" "}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );

  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Listar" component={Listar} />
    </Stack.Navigator>
  </NavigationContainer>;
}

const estilo = StyleSheet.create({
  fundo: {
    padding: 20,
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  area: {
    backgroundColor: "white",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },

  txtcdasrto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    margin: 14,
    marginLeft: "auto",
    marginRight: "auto",
  },
  txtenvio: {
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
  },
  dados: {
    backgroundColor: "white",
    color: "#f50057",
    padding: 12,
    width: "95%",
    margin: 3,
    marginLeft: "auto",
    marginRight: "auto",
    shadowColor: "gray",
    borderRadius: 6,
    borderBottomColor: "silver",
  },
  sexo: {
    marginBottom: -60,
    marginTop: -20,
    marginLeft: "auto",
    marginRight: "auto",
    width: "95%",
  },
  txtlogar: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginTop: -25,
    marginBottom: 6,
  },
  logar: {
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "#64b5f6",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

// function cadastrar() {
//   Alert.alert(
//     "CEP: " +
//       cp +
//       "\nlograd: " +
//       lograd +
//       "\nNumero: " +
//       numer +
//       "\nCompl: " +
//       compl +
//       "\nBairro: " +
//       bair +
//       "\nTipo:" +
//       tip
//   );

function cadastrar() {
  fetch("http://192.168.0.2:8080/clinica/services/endereco/cadastrar.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tipo: tip,
      logradouro: lograd,
      numero: numer,
      complemento: compl,
      bairro: bair,
      cep: cp,
      idpaciente: id,
    }),
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      Alert.alert("Olhe na tela de console");
    })
    .catch((error) => console.error(error));
}
