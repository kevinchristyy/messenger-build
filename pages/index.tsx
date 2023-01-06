import Head from "next/head"
import ChatInput from "../components/chatinput"
import Header from "../components/header"
import MessageList from "../components/messagelist"

function Home() {
  return (
    <div>
      <Head>
        <title>Meta Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
      <main>
        <Header />
        <MessageList />
        <ChatInput />
      </main>
      </body>
    </div>
  )
}

export default Home
