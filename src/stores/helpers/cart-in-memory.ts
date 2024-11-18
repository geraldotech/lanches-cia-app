// reutiliza as props
import { ProductProps } from '@/utils/data/products'
import { ProductCardProps } from '../card-store'

export function add(products: ProductCardProps[], newProduct: ProductProps) {
  // produto existe?
  const existingProduct = products.find(({ id }) => newProduct.id === id)

  // se existe é igual ao existente?
  if (existingProduct) {
    return products.map((product) => (product.id === existingProduct.id ? { ...product, quantity: product.quantity + 1 } : product))
  }

  // get tudo do produto e adicionando +1 sendo a primeira vez que é adicionado
  return [...products, { ...newProduct, quantity: 1 }]
}


export function remove(products: ProductCardProps[], producRemoveId: string){
  const updateProduct = products.map((product) => 
  product.id === producRemoveId ? {
      ...product,
      quantity: product.quantity > 1 ? product.quantity - 1 : 0
  } : product
)

  return updateProduct.filter((product) => product.quantity > 0)
}