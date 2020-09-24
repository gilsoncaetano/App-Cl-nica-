import * as React from "react";
import {
  Image,
  ImageBackground,
  Button,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Picker,
} from "react-native";
import {
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native-gesture-handler";
import Inicial from "../screens/Inicial";
import Endereco from "./Endereco";
import { Text, View } from "../components/Themed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
let nomecli = "";
let cpfcli = "";
let datanasc = "";
let emailcli = "";
let femail = "";
let cel = "";
let nomemae = "";
let sx = "";
let sh = "";
let fsh = "";

export default function Cadastrar({ navigation }) {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [datanasccli, setDatanasccli] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [fcemail, setFcmail] = React.useState("");
  const [celular, setCelular] = React.useState("");
  const [nomema, setNomema] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [fsenha, setFsenha] = React.useState("");

  return (
    <View style={estilo.area}>
      <ImageBackground source={require("../img/azul.png")} style={estilo.fundo}>
        <ScrollView>
          <Text style={estilo.txtcdasrto}>Cadastro</Text>
          <Text style={estilo.txtenvio}>
            Preencha todos os campos e selecione "Enviar"
          </Text>
          <TextInput
            placeholder="Nome Completo"
            style={estilo.dados}
            onChangeText={(value) => setNome(value)}
            value={nome}
          />
          <TextInput
            placeholder="CPF"
            keyboardType="phone-pad"
            style={estilo.dados}
            onChangeText={(value) => setCpf(value)}
            value={cpf}
          />
          <TextInput
            placeholder="Data Nascimento"
            style={estilo.dados}
            onChangeText={(value) => setDatanasccli(value)}
            value={datanasccli}
          />
          <TextInput
            placeholder="E-Mail"
            keyboardType="email-address"
            style={estilo.dados}
            onChangeText={(value) => setEmail(value)}
            value={email}
          />
          <TextInput
            placeholder="Confirma E-Mail"
            keyboardType="email-address"
            style={estilo.dados}
            onChangeText={(value) => setFcmail(value)}
            value={fcemail}
          />
          <TextInput
            placeholder="celular"
            keyboardType="phone-pad"
            style={estilo.dados}
            onChangeText={(value) => setCelular(value)}
            value={celular}
          />

          <TextInput
            placeholder="Nome Da Mãe Completo"
            style={estilo.dados}
            onChangeText={(value) => setNomema(value)}
            value={nomema}
          />

          <TextInput
            secureTextEntry //Oculta a senha
            placeholder="Senha"
            style={estilo.dados}
            onChangeText={(value) => setSenha(value)}
            value={senha}
          />

          <TextInput
            secureTextEntry // Oculta a senha
            placeholder="Confirma Senha"
            style={estilo.dados}
            onChangeText={(value) => setFsenha(value)}
            value={fsenha}
          />

          <Picker
            selectedValue={sexo}
            mode="dialog"
            onValueChange={setSexo}
            style={estilo.sexo}
          >
            <Picker.Item label="Masc" value="Masc" />
            <Picker.Item label="Femi" value="Femi" />
          </Picker>

          <TouchableOpacity
            style={estilo.logar}
            onPress={() => {
              navigation.navigate("Endereco");
              nomecli = nome;
              cpfcli = cpf;
              datanasc = datanasccli;
              emailcli = email;
              femail = fcemail;
              cel = celular;
              nomemae = nomema;
              sx = sexo;
              sh = senha;
              fsh = fsenha;

              cadastrar();
            }}
          >
            <Text style={estilo.txtlogar}> Enviar </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Endereco" component={Endereco} />
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
  senha: {
    margin: 5,
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
    fontSize: 18,
    marginTop: 2,
    marginBottom: 6,
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
// function Cadastrar() {
//   Alert.alert(
//     "Nome: " +
//       nomecli +
//       "\nCPF: " +
//       cpfcli +
//       "\nData Nascimento: " +
//       datanasc +
//       "\nEmail: " +
//       emailcli +
//       "\nConfirma Email:" +
//       femail +
//       "\nCelular: " +
//       cel +
//       "\nNome da Mâe: " +
//       nomemae +
//       "\nSexo: " +
//       sx +
//       "\nSenha: " +
//       sh +
//       "\nConfima senha: " +
//       fsh
//   );
function cadastrar() {
  fetch("http://192.168.0.2:8080/clinica/services/paciente/cadastrar.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nomecli,
      cpf: cpfcli,
      datanasc: datanasc,
      email: emailcli,
      celular: cel,
      nomemae: nomemae,
      senha: sh,
      sexo: sx,
    }),
  })
    .then((response) => response.json())
    .then((resposta) => {
      console.log(resposta);
      Alert.alert("Olhe na tela de console");
    })
    .catch((error) => console.error(error));
}
