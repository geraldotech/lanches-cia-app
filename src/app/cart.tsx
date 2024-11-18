import { Header } from '@/components/header'
import { View, Text, ScrollView, Alert, Linking } from 'react-native'
import { useNavigation } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { Product } from '@/components/product'
import { ProductCardProps, useCartStore } from '@/stores/card-store'
import { formatCurrenct } from '@/utils/functions/format-currency'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LinkButton } from '@/components/link-button'
import { useState } from 'react'


const PHONE_NUMBER = '5521965262933'

export default function Cart() {
  const cartStore = useCartStore()
  const [address, setAddress] = useState("")
  const nagivation = useNavigation()

  const total = formatCurrenct(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

  function handleProductRemove(product: ProductCardProps) {
    Alert.alert('Remover', `Deseja remover ${product.title} do carrinho?`, [{ text: 'Cancelar' }, { text: 'Remover', onPress: () => cartStore.remove(product.id) }])
  }

function handleOrder(){
  if(address.trim().length === 0){
    return Alert.alert('Pedido', 'Informe os dados da entrega')
  }

  const products = cartStore.products.map((product) => `\n ${product.quantity} ${product.title}`).join("")

  const message = `
   🍔NOVO PEDIDO
    \n Entregar em: ${address}
    ${products}

    \n Valor total: ${total}
  `
  //console.log(message)
  cartStore.clear();

  Linking.openURL(`http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`)

  nagivation.goBack() // voltar para tela anterior

}


  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView>
        <ScrollView>
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product
                    onPress={() => handleProductRemove(product)}
                    data={product}
                    key={product.id}></Product>
                ))}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">Seu carrinho está vazio</Text>
            )}

            <View className="flex-row gap-2 items-center mt-5 mb-4">
              <Text className="text-white text-xl font-subtitle">Total:</Text>

              <Text className="text-orange-400 text-2xl font-heading">{total}</Text>
            </View>
            <Input 
            placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
           /*  onChangeText={(text) => console.log(text)} */
           onChangeText={setAddress}
           blurOnSubmit={true}
           onSubmitEditing={handleOrder}
           returnKeyType="next"
            />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="p-5 gap-5">
        <Button onPress={handleOrder}>
          <Button.Text>Enviar Pedido</Button.Text>
          <Button.Icon>
            <Feather
              name="arrow-right-circle"
              size={20}
            />
          </Button.Icon>
        </Button>

        <LinkButton
          title="Voltar ao cardápio"
          href="/"
        />
      </View>
    </View>
  )
}
