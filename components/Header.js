import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header(props) {
    return (
        <View testID="cabecera" style={styles.container}>

            <Image testID="logo" style={styles.logo} source={require('../assets/logoApp.png')} />
            <Text testID="mensaje" style={styles.mensaje}> Bienvenido a la página de Eva Barba Cámara</Text>

        </View>)
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
    },

    mensaje: {
        color: '#E0E0E0',
        fontWeight: 'bold',
        fontSize: 15,
        alignItems: 'center'
    },

    logo: {
        width: 50,
        height: 50
    }
})