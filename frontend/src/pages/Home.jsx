import '../styles/Home.scss'
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    fetch("http://127.0.0.1/api/auth/validateAuth")
      .then((response) => response.json())
      .then((user) => {
        if(!user._id) window.location.replace('/login');
      });
  }, []);

  return (
    <div className="container">
        <h1>Chat</h1>
    </div>
  )
}

export default Home;