import { func, any, string } from "prop-types"

export default function AddtNote({ value, onChange, placeholder, handleAdd }) {
  return (
    <>
    <div className="flex flex-row items-center justify-center gap-4 p-2 w-full">
      <input type="text" name="addnote" id="addnote" 
        placeholder={placeholder}  value={value} onChange={onChange}
        className="w-56 h-10 outline-none border-none rounded p-2"
        style={{
          backgroundColor: "var(--color-container)",
        }}
      />
      <button onClick={handleAdd} className="w-20 h-10 outline-none rounded p-1 text-base font-medium border-2"
        style={{ color: "var(--color)", borderColor: "var(--color)"}}>Adicionar</button>
    </div>    
    </>
  )
}
AddtNote.propTypes = {
  value: any, 
  onChange: func,
  placeholder: string,
  handleAdd: func,
}