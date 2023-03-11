import { useState } from 'react';
import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, FlatList, Image } from 'react-native';
import { Link } from '@react-navigation/native';




export default function SearchPage(props) {

    const theproducts = props.theproducts;

    const [valueInput, setValueInput] = useState("");
    const [palabra, setPalabra] = useState("");



    const listProducts = theproducts.filter(item => item.title.toLowerCase().includes(palabra.toLowerCase()));


    return (
        <View>

            <Text testID="catalogo" style={styles.catalogo}>Catálogo</Text>

            <TextInput testID="filtro"
                style={{ height: 30, fontSize: 14, alignSelf: 'center', borderWidth: 2, borderColor: '#aaaaaa', marginTop: 25, marginBottom: 10, paddingHorizontal: 15 }}
                placeholder="Introduce qué quieres buscar"
                onChangeText={(value) => setValueInput(value)}></TextInput>

            <TouchableHighlight testID="buscador" onPress={() => setPalabra(valueInput)} style={styles.botonBuscar}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 18 }}>Buscar</Text>
            </TouchableHighlight>



            <FlatList
                data={listProducts}
                renderItem={({ item }) =>
                    <View testID={"item_" + item.id} style={styles.tarjeta}>

                        <Image source={{ uri: item.thumbnail }} style={styles.imagenProducto} />

                        <Text testID={"title_" + item.id} style={styles.tituloTarjeta}>{item.title}</Text>

                        <TouchableHighlight testID={"button_" + item.id}
                            style={styles.botonVer}>

                            <Link to={{ screen: 'ProductScreen', params: { title: item.title, thumbnail: item.thumbnail, description: item.description, price: item.price, rating: item.rating, stock: item.stock } }}>
                                <Text style={{ color: 'white', fontSize: 15, alignContent: 'center' }}>  VER</Text>
                            </Link>

                        </TouchableHighlight>

                    </View>
                }
            ></FlatList>



        </View>
    )
}

const styles = StyleSheet.create({
    catalogo: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'serif',
        letterSpacing: 10
    },

    botonBuscar: {
        backgroundColor: '#3e4144',
        color: 'white',
        width: '25%',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 25
    },

    tarjeta: {
        backgroundColor: '#666f88',
        width: '85%',
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 13,
    },

    imagenProducto: {
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        width: 320,
        height: 150

    },

    tituloTarjeta: {
        fontSize: 27,
        alignSelf: 'center',
        marginVertical: 5,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 5
    },

    botonVer: {
        backgroundColor: '#2196f3',
        color: 'white',
        width: '15%',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10
    }
})