import { func, any, string } from "prop-types"

export default function AddNote({ value, onChange, placeholder, onClick }) {
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
      <button onClick={onClick} className="text-base font-medium" style={{ color: "var(--color)"}}>
        Adicionar
      </button>
    </div>    
    </>
  )
}
AddNote.propTypes = {
  value: any, 
  onChange: func,
  placeholder: string,
  onClick: func,
}