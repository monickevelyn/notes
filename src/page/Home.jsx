import Header from "../components/Header";
import Notes from "../components/Notes";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-center justify-start gap-5 p-8 w-full min-h-screen">
        <Header />
        <Notes />
      </div>
    </>
  );
}