import { useState, useRef } from 'react'
import { View, StyleSheet, FlatList, SectionList, Text, Button } from 'react-native'
import { Link } from 'expo-router'
import { useCartStore } from '@/stores/card-store'

import { Header } from '@/components/header'
import { CategoryButton } from '@/components/category-button'
import { CATEGORIES, MENU, ProductProps } from '@/utils/data/products'
import { Product } from '@/components/product'
import { LinkButton } from '@/components/link-button'

console.log(MENU)

export default function Home() {
  //let category = "Sobremesa"
  const cartStore = useCartStore()
  const [category, setCategory] = useState(CATEGORIES[0])
  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  const cartQuantityItems = cartStore.products.reduce((total, product) => total + product.quantity, 0)

  function handleCategorySelect(selectedCat: string) {
    //console.log(selectedCat)
    setCategory(selectedCat)

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCat)
    //console.log(sectionIndex)
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header
        title="Faça seu pedido"
        cartQuantityItems={cartQuantityItems}
      />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link
            href={`/product/${item.id}`}
            asChild>
            {<Product data={item} />}
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => <Text className="text-white font-heading mt-8 mb-3 text-xl">{title}</Text>}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      {/* 
      <Pressable
      className="bg-slate-800 px-4 rounded-md h-10 border-1 text-center border-lime-300"
      >
      <Link  className='text-slate-100 font-subtitle text-sm' href="/foo">sobre</Link>
      </Pressable> */}

      <View className="p-2 pb-4 gap-5">
        <LinkButton
          className="border-2 border-orange-300"
          title="Sobre"
          href="/foo"
        />
      </View>
    </View>
  )
}
/* const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red', flex: 1,
  }   
}) */
