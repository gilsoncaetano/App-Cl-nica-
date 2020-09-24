import * as React from "react";
import { Text, View } from "../components/Themed";
import {
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ImageBackground,
} from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";

export default function listar() {
  const [listar, setListar] = React.useState(true);
  const [carregado, setCarregado] = React.useState([]);

  //Ligação da API sera necessário um elemento inicial chamado use effect
  React.useEffect(() => {
    fetch("http://192.168.0.2:8080/clinica/services/paciente/exibir.php")
      .then((response) => response.json())
      .then((paciente) => setCarregado(paciente.saida))

      .catch((error) => console.log(error))
      .finally(() => setListar(false));
  }, []);

  return (
    <View style={estilo.container}>
      <ImageBackground source={require("../img/azul.png")} style={estilo.fundo}>
        <Text style={estilo.txtcdasrto}>Lista dos dados do cliente</Text>
        {listar ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={estilo.lista}
            data={carregado}
            renderItem={({ item }) => (
              <View style={estilo.cell}>
                <Text style={estilo.cell}> Nome: {item.nome}</Text>
                <Text style={estilo.linhas}> CPF: {item.cpf}</Text>
                <Text style={estilo.linhas}>
                  {" "}
                  Data Nascimento: {item.datanasc}
                </Text>
                <Text style={estilo.linhas}> E-Mail: {item.email}</Text>
                <Text style={estilo.linhas}> Sexo: {item.sexo}</Text>
                <Text style={estilo.linhas}> Celular: {item.celular}</Text>
                <Text style={estilo.linhas}> Nome da mãe: {item.nomemae}</Text>
                <Text style={estilo.cell}> Endereço</Text>
                <Text style={estilo.linhas}> Tipo: {item.tipo}</Text>
                <Text style={estilo.linhas}> Logradouro:{item.logradouro}</Text>
                <Text style={estilo.linhas}> Numero: {item.numero}</Text>
                <Text style={estilo.linhas}>
                  {" "}
                  Complemento {item.complemento}
                </Text>
                <Text style={estilo.linhas}> Bairro: {item.bairro}</Text>
                <Text style={estilo.linhas}> Cep: {item.cep}</Text>
              </View>
            )}
            keyExtractor={({ idpaciente }, index) => idpaciente}
          />
        )}
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  titulo: {
    margin: 24,
    fontSize: 30,
    marginBottom: 5,
  },
  txtcdasrto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    margin: 14,
    marginLeft: "auto",
    marginRight: "auto",
  },
  lista: {
    marginTop: 10,
    margin: 12,
    fontSize: 20,
    //fontWeight: "bold",
  },
  cell: {
    paddingTop: 6,
    paddingBottom: 6,
    fontWeight: "bold",
    margin: 1,
    backgroundColor: "#E4EBEE",
    fontSize: 20,
  },
  linhas: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 20,
  },
});
