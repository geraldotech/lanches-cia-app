import { View, Text, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native'
import { useState } from 'react'

export default function Foo() {
  const [titulo, setTitulo] = useState('clique para visulizar a versão')

  const modificaText = () => {
    setTitulo('versão 1.0 ')
  }

  return (
    <View className="pt-8">
      <Text className="pt-8 text-2xl text-white text-center">Sobre o app</Text>

      <View style={styles.container}>
        <Image
          style={styles.imagem}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>

      <Text className="p-8 text-blue-300 text-justify">
        "Desenvolvido com a tecnologia React Native, aplicando o conhecimento adquirido na disciplina Programação para Dispositivos Móveis em Android da Estácio, ministrada pelo professor Cláudio
        Fernandes."
      </Text>

      <Text
        onPress={modificaText}
        className="p-8 text-blue-500 text-center">
        {titulo}
      </Text>

      <SafeAreaView>
        <TextInput />
      </SafeAreaView>

      {/*    <View style={{ backgroundColor: 'red', padding: '1rem' }}>
        <Text>red bk</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  baseText: {
    fontFamily: 'Verdana',
    marginTop: 50,
    marginLeft: 10,
  },
  titulo: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
})
