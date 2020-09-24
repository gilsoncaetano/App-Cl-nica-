import * as React from "react";
import {
  Image,
  ImageBackground,
  Button,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Cadastrar from "./Cadastrar";
import Listar from "./Listar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
let logaemail = "";
//let logacpf = "";
let sh = "";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  //const [cpf, setCpf] = React.useState("");

  return (
    <View style={estilo.area}>
      <ImageBackground source={require("../img/azul.png")} style={estilo.fundo}>
        <Image source={require("../img/bradesco.png")} style={estilo.logo} />
        <TextInput
          placeholder="E-Mail ou CPF"
          keyboardType="email-address"
          style={estilo.acessousu}
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <TextInput
          secureTextEntry
          placeholder="Senha"
          style={estilo.acessousu}
          onChangeText={(value) => setSenha(value)}
          value={senha}
        />

        <TouchableOpacity
          style={estilo.logar}
          onPress={() => {
            navigation.navigate("Listar");
            logaemail = email;
            sh = senha;
            //logacpf = cpf;

            logar();
          }}
        >
          <Text style={estilo.txtlogar}> Entrar </Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.senha} onPress={() => {}}>
          <Text style={estilo.txtlogar}> Esqueci minha senha </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilo.cadastrar}
          onPress={() => navigation.navigate("Cadastrar")}
        >
          <Text style={estilo.txtlogar}> Primeiro Acesso </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Listar" component={Listar} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
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
  },
  acessousu: {
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
  logar: {
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "#64b5f6",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  senha: {
    margin: 5,
  },
  txtlogar: {
    color: "white",
    //fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 2,
    marginBottom: 6,
  },
  cadastrar: {
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 100,
    backgroundColor: "#64b5f6",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  logo: {
    width: 130,
    height: 150,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
  },

  imagem: {
    marginTop: 30,
    marginLeft: 70,
  },
  img: {
    width: 100,
    height: 100,
    flex: 1,
    resizeMode: "contain",
  },
});
//teste de cadastro
// function logar() {
//   Alert.alert("E-mail: " + logaemail + "\nsenha: " + sh);

function logar() {
  fetch("http://192.168.0.2:8080/clinica/services/paciente/login.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: logaemail,
      //cpf: logacpf,
      senha: sh,
    }),
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      Alert.alert("Olhe na tela de console");
    })
    .catch((error) => console.error(error));
}
