
const Appbar = ({name}) => {

  return (
    <div className="w-full flex justify-between py-4 px-8 text-xl">
      <div className="font-medium text-2xl">Paymets App</div>
      <div className="flex gap-3 font-medium">
        <div>Hello</div>
        <div className="flex justify-center items-center w-8 h-8 bg-blue-300 rounded-full">{name[0].toUpperCase()}</div>
        </div>
    </div>
  )
}

export default Appbar