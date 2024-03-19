const Inputbox = ({label,placeholder,onchange,value}) => {
  return (
    <div className="w-full">
      <div className="font-semibold text-left text-lg pb-1">{label}</div>
      <input value={value} onChange={onchange} type="text" placeholder={placeholder} className="w-full text-lg border-slate-200 border-2 rounded px-2 py-1 font-medium"/>
    </div>
  )
}

export default Inputbox;