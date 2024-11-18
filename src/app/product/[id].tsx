import { View, Image, Text } from 'react-native'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { Redirect } from 'expo-router'

import { useCartStore } from '@/stores/card-store'

import { PRODUCTS } from '@/utils/data/products'
import { formatCurrenct } from '@/utils/functions/format-currency'

import { Button } from '@/components/button'
import { LinkButton } from '@/components/link-button'

export default function Product() {
  const cartStore = useCartStore()
  const { id } = useLocalSearchParams()

  const navigation = useNavigation()

  // id da rota e produto
  //console.log(id)
  const product = PRODUCTS.find((item) => item.id === id)
  //console.log(product)

  console.log(cartStore.products)

  function handleAddToCart() {
    if (product) {
      cartStore.add(product)
    }

    // apos add no carrinho voltar para tela anterior
    navigation.goBack()
  }

  // se o produto nao existir
  if (!product) {
    return <Redirect href="/" />
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />
      <View className="p-5 mt-8 flex-1">
        <Text className="text-white text-xl font-heading">{product.title}</Text>
        
        <Text className="text-orange-400 text-2xl font-heading my-2">{formatCurrenct(product.price)}</Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-6">{product.description}</Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6">
            {'\u2022'}
            {ingredient}
          </Text>
        ))}
      </View>

      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather
              name="plus-circle"
              size={20}
            />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>

        <LinkButton
          title="Voltar ao cardápio"
          href="/"
        />
      </View>
    </View>
  )
}
