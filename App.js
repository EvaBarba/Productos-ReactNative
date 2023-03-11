import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import Header from './components/Header';
import ProductScreen from './components/ProductScreen';
import CONFIG from "./components/config/config";
import { mockdata } from "./components/constants/products.js";

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const USE_SERVER = CONFIG.use_server;

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();


  const download = async () => {

    let downloadedProducts

    if (USE_SERVER) {
      try {
        const res = await fetch(CONFIG.server_url);
        downloadedProducts = await res.json();

      } catch (e) {
        alert("No se ha podido recuperar la información.");
      } setProducts(downloadedProducts.products);

    } else {
      setProducts(mockdata.products)
    }
  }


  useEffect(() => {
    async function fetchData() {
      await download();

      setTimeout(() => {
        setIsLoading(false);
      }, CONFIG.loading_timeout_ms);
    }

    fetchData();
  }, []);


  return (
  
    isLoading ? <View><Image testID="loading" style={styles.loading} source={require('./assets/Spinner.gif')} /></View > :

      <NavigationContainer>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen name="HomeScreen">
            {(props) => <HomeScreen {...props} theproducts={products} />}
          </Stack.Screen>
          <Stack.Screen name="ProductScreen">
            {(props) => <ProductScreen {...props} />}
          </Stack.Screen>

        </Stack.Navigator>
        <StatusBar />
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  loading: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  }
})