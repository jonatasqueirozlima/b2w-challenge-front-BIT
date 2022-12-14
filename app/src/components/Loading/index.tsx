import { FC } from 'react'

type Props = {
  txtColor?: 'black' | 'white'
}

const Loading: FC<Props> = ({ txtColor = 'black' }) => {
  return (
    <div className="flex items-center justify-center space-x-3">
      <div
        className={`text-${txtColor} spinner-border inline-block h-8 w-8 animate-spin rounded-full border-4`}
        role="status"
      />
      <span className={`text-${txtColor}`}>Loading...</span>
    </div>
  )
}

export default Loading
