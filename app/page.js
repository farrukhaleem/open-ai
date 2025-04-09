
import Chat from "./components/Chat";
import ImageBox from "./components/ImageBox";


export default function Home() {

  return (
    <div className="flex justify-center p-10">
      <main>
        <ImageBox />        
        <div className="p-5 text-center">
          <h1 className="text-6xl font-bold text-blue-200">Ask Krishna</h1>
          <p className="text-xl font-semibold text-blue-200">Ask Your Problems, Krishna will Answer 🦚</p>
        </div>
        <Chat />
      </main>
    </div>
  );
}
