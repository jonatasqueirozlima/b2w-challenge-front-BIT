import { FC } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const ContactContainer: FC<Props> = ({ children }) => {
  return <section className="grid w-6/12 grid-cols-2 gap-2">{children}</section>
}

export default ContactContainer
