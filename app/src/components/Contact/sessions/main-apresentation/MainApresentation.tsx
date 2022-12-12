import { useRecoilState } from 'recoil'
import { currentPerfilState } from 'recoil/atoms'

const MainApresentation = () => {
  const [perfil] = useRecoilState(currentPerfilState)

  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-y-2 border bg-white py-4 border-gray-500">
      <div className="h-40 w-40">
        <img
          className="h-full w-full rounded-full"
          src={perfil?.picture.large}
          alt=""
        />
      </div>
      <div className="relative  flex w-full justify-between">
        <button className="mx-auto bg-blue-500 px-4 py-2 text-white">
          Follow
        </button>
        <button className="absolute right-0 mr-3 self-end border px-4 py-2 shadow-md">
          try the next one
        </button>
      </div>
      <span>
        {perfil?.name.first} {perfil?.name.last}
      </span>
      <span>
        {perfil?.location.city}, {perfil?.location.country}
      </span>
    </section>
  )
}

export default MainApresentation
