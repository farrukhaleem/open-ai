
import Chat from "./components/Chat";
import ImageBox from "./components/ImageBox";
import Head from 'next/head';

export default function Home() {

  return (
    <>
      <Head>
        <title>Ask Krishna</title>
        <meta name="description" content="Ask Your Problems, Krishna will Answer" />
      </Head>
      <div className="flex justify-center p-10">
        <main>
          <ImageBox />
          <div className="pb-5 text-center" style={{
            // backgroundColor: '#212529',
            // zIndex: 1,
            // position: 'relative'
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              color: '#fff'
            }}>Ask Krishna</h1>
            <p style={{
              fontSize: '1rem',
              color: '#b38e62',
              marginTop: '0.5rem'
            }}>Ask Your Problems, Krishna will Answer 🦚</p>
          </div>
          <Chat />
        </main>
      </div>
    </>
  );
}
