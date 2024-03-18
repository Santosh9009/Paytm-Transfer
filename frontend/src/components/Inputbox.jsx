const Inputbox = ({label,placeholder}) => {
  return (
    <div >
      <div className="font-semibold text-left text-lg pb-1">{label}</div>
      <input type="text" placeholder={placeholder} className="w-full text-lg border-slate-200 border-2 rounded px-2 py-1"/>
    </div>
  )
}

export default Inputbox