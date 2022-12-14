import { FC } from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const ContactContainer: FC<Props> = ({ children }) => {
  return (
    <section
      className="grid grid-cols-2 gap-2
                xl:w-6/12 xl:max-w-3xl"
    >
      {children}
    </section>
  )
}

export default ContactContainer
