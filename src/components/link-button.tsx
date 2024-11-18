import { Link, LinkProps } from 'expo-router'

// adicionando uma propriedade customizada que é o title
type LinkButtonProps = LinkProps<string> & {
  title: string
}

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return (
    <Link
      className="text-slate-300 text-center text-base font-body"
      {...rest}>
      {title}
    </Link>
  )
}
