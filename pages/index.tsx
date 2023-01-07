import Head from "next/head";
import ChatInput from "../components/ChatInput";
import Header from "../components/Header";
import MessageList from "../components/MessageList";

function Home() {
 

  return (
    <div>
      <Head>
        <title>Meta Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <main className="bg-black">
          <Header />
          <MessageList />
          <ChatInput />
        </main>
      </body>
    </div>
  );
}

export default Home;
