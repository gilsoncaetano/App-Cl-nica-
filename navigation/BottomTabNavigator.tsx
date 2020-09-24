import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Inicial from "../screens/Inicial";
import Cadastrar from "../screens/Cadastrar";
import Listar from "../screens/Listar";
import Endereco from "../screens/Endereco";

import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicial"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Inicial"
        component={InicialNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon3 name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cadastrar"
        component={CadastrarNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon2 name="id-card" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Endereco"
        component={EnderecoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon2 name="map-signs" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Lista"
        component={ListarNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon2 name="list-ul" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon2(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIcon3(props: { name: string; color: string }) {
  return <Entypo size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const InicialStack = createStackNavigator();
function InicialNavigator() {
  return (
    <InicialStack.Navigator>
      <InicialStack.Screen
        name="Inicial"
        component={Inicial}
        options={{ headerTitle: "Tela de Inicial da Clinica" }}
      />
    </InicialStack.Navigator>
  );
}

const CadastrarStack = createStackNavigator();
function CadastrarNavigator() {
  return (
    <CadastrarStack.Navigator>
      <CadastrarStack.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{ headerTitle: "Tela de Cadastro da Clinica" }}
      />
    </CadastrarStack.Navigator>
  );
}

const ListarStack = createStackNavigator();
function ListarNavigator() {
  return (
    <ListarStack.Navigator>
      <ListarStack.Screen
        name="Listar"
        component={Listar}
        options={{ headerTitle: "Listar dados do Cliente" }}
      />
    </ListarStack.Navigator>
  );
}

const EnderecoStack = createStackNavigator();
function EnderecoNavigator() {
  return (
    <EnderecoStack.Navigator>
      <EnderecoStack.Screen
        name="Endereco"
        component={Endereco}
        options={{ headerTitle: "Tela de cadastro do Endereco" }}
      />
    </EnderecoStack.Navigator>
  );
}
