import '../styles/Home.scss'
import { useEffect, useState } from 'react';
import ChatPreview from '../components/ChatPreview';

import query from '../handler/query';

const Home = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    /*fetch("http://127.0.0.1/api/auth/validateAuth")
      .then((response) => response.json())
      .then((user) => {
        if (!user._id) { //window.location.replace('/login') } else {

          let convArray = []
          user.username = 'roberto'
          query('http://127.0.0.1/api/conv/getAllConvs', 'POST', { username: user.username })
            .then((conv) => {
              convArray.push(conv)
            })
          
          setChats(convArray)         
          
        }
      })*/

    query('http://127.0.0.1/api/conv/getAllConvs', 'POST', { username: 'roberto' })
      .then((convs) => setChats(convs.convs))
  }, []);

  

  

  return (
    <div className="chatContainer">
      <div className="header">
        <h1>ChatApp</h1>
        <button>PROFILE</button>
      </div>
      <div className="chat">
        <div className="chatList">{
          chats.map((item, idx) => <ChatPreview key={idx} nombre={item._id} />)
        }</div>
        <div className="conversation"></div>
      </div>
    </div>
  )
}

export default Home;