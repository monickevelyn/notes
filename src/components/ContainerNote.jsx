import { string, func, any } from "prop-types";
export default function ContainerNote({ text, onClick, id }) {
  return (
    <>
      <div
        id={id}
        className="min-w-72 w-96 h-fit min-h-36 max-h-96 rounded font-normal text-1xl flex flex-col justify-start items-start gap-4 break-all overflow-y-auto"
        style={{ backgroundColor: "var(--color-container)" }}
      >
        <div className="w-full p-2 self-end border-x-2" style={{ borderColor: "var(--color)"}} >
          <button onClick={onClick} className="outline-none text-base font-medium" style={{ color: "white"}}>Apagar</button>
        </div>
        <p className="text-left p-2 text-wrap;">{text}</p>
      </div>
    </>
  );
}
ContainerNote.propTypes = {
  text: string,
  onClick: func,
  id: any,
};
