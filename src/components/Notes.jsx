import ContainerNote from "./ContainerNote";
import AddNote from "./AddNote";

import { v4 as uid } from "uuid";
import { useState } from "react";

export default function Notes() {
    const [input, setInput] = useState("");
    const [notes, setNotes] = useState([]);
    // const [msg, setMsg] = useState(false);

    const add = () => {
        if (input === "") {
        //   return setMsg(true);
        } else {
          setNotes((prev) => [
            ...prev,
            {
              id: uid(),
              text: input,
            },
          ]);
        }
        setInput("");
        // setMsg(false);
    };

    return (
      <>
      <AddNote value={input} placeholder="Adicione uma nota..." onChange={(e) => setInput(e.target.value)} onClick={add} />

      <section className="w-full p-4 min-h-full flex flex-row flex-wrap justify-center items-start gap-4">
          {notes.length >= 1 &&
            notes.map((note) => (
              <ContainerNote
                key={note.id}
                id={note.id}
                text={note.text}
              />
            ))}
        </section>        
      </>
    );
}