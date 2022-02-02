import { useState } from "react";
import { Tweet } from "./components/Tweet";
import { AppRoutes } from "./Routes";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 4',
    'Tweet 5',
  ]);

  function createTweet(){
    setTweets([...tweets, 'Tweet 6']);
  }


  return (
    <div>
      <AppRoutes/>
      {tweets.map(tweet => {
        return <Tweet text={tweet}/>
      })}

      <button 
        onClick={createTweet}
        style={{
          backgroundColor: 'blue',
          color: "white"
        }}
      >
        Adicionar tweet
      </button>

    </div>
  )
}

export default App;
