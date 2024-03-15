import { string } from "prop-types"

export default function Message({ text }) {   
  return (
    <>
    <div className="bg-red-500 p-2 rounded w-60"> 
        <p className="text-slate-100 text-center">{text}</p>
    </div>
    </>
  )
}
Message.propTypes = {
  text: string,
}