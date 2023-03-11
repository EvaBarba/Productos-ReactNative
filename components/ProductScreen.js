import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Link } from '@react-navigation/native';


export default function ProductScreen(props) {

    return (
        <View>

            <Text testID="detalle" style={styles.tituloProducto}>{props.route.params.title}</Text>

            <Image source={{ uri: props.route.params.thumbnail }} style={styles.imagenProducto} />

            <Text style={styles.descProducto}>Description: {props.route.params.description}.</Text>

            <Text style={styles.infoProducto}>Price: {props.route.params.price}€</Text>
            <Text style={styles.infoProducto}>Rating: {props.route.params.rating}</Text>
            <Text style={styles.infoProducto}>Stock: {props.route.params.stock}</Text>

            <TouchableHighlight testID="volver" style={styles.botonVolver}>
                <Link to={{ screen: 'HomeScreen' }}><Text style={{ color: 'white', fontSize: 17 }}>     Volver</Text></Link>
            </TouchableHighlight>

        </View>
    )
}



const styles = StyleSheet.create({
    botonVolver: {
        backgroundColor: '#3e4144',
        color: 'white',
        width: '25%',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 25

    },

    descProducto: {
        fontSize: 15,
        marginBottom: 20,
        marginTop: 6,
        marginHorizontal: 10,
        textAlign: 'justify'

    },

    infoProducto: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'serif'
    },

    tituloProducto: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'serif',
        letterSpacing: 2,
        marginBottom: 10
    },

    imagenProducto: {
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        width: 350,
        height: 160,
        borderRadius: 15,
        borderColor: '#3e4144'
    },
})