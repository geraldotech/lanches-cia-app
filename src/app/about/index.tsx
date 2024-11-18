import { View, Text, StyleSheet, Image, TextInput, SafeAreaView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useState } from 'react'

export default function About() {
  //  const {id} = useLocalSearchParams()

  const [titulo, setTitulo] = useState('text do elemento filho')
  const modificaText = () => {
    setTitulo('Esse texto esta sendo exibido pois o primeiro elemento de texto foi pressionado/tocado')
  }

  return (
    <View>
      {/* <View>
        <Text
          className="text-2xl"
          onPress={modificaText}>
          {titulo}
        </Text>
      </View>

      <View style={styles.container}>
        <Image
          style={styles.imagem}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>

      <SafeAreaView>
        <TextInput />
      </SafeAreaView>

      <View style={{ backgroundColor: 'red', padding: '1rem' }}>red bk</View> */}
    </View>
  )
}

