import {Text, Pressable, PressableProps} from 'react-native'
import { clsx } from 'clsx'

// recebe as props do pressable
type CategortyProps  = PressableProps &{
  title: string
  isSelected?: boolean
}

// rest importa todas as props

export function CategoryButton({title, isSelected, ...rest }: CategortyProps){
  return (
    <Pressable 
    className={
      clsx('bg-slate-800 px-4 justify-center rounded-md h-10', isSelected && 'border-2 border-orange-300')
    } {...rest}>
      <Text className='text-slate-100 font-subtitle text-sm'>{title}</Text>
    </Pressable>
  )
}