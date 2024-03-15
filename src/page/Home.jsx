import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-center justify-start gap-5 p-8 w-full min-h-screen">
        <Header />
      </div>
    </>
  );
}

{/* <section className="flex flex-row items-center justify-center gap-4 p-2 w-full">
<Input value={input} placeholder="Adicione uma nota..." onChange={(e) => setInput(e.target.value)} />
<button onClick={add} className="w-20 h-10 outline-none rounded p-1 text-base font-medium border-2"
style={{ color: "var(--color)", borderColor: "var(--color)"}}
>Adicionar</button>
</section>  */}