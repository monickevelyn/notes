
import img from "../assets/Left hander-cuate.svg"

export default function ContainerNull() {  
  return (
    <>
    <section className="w-full h-full rounded flex flex-col flex-wrap justify-start items-center gap-6">
        <h2 className="text-2xl font-medium">SEM NOTAS</h2>
        <p className="text-1xl font-normal">Crie anotações rápidas de forma simples com o Notes.</p>
        <img src={img} alt="img" className="w-72" />      
    </section>
    </>
  )
}