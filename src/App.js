import { useEffect, useState } from 'react';
import './App.css';
import { Post } from './components/Post';




function App() {
//STATE 
  const [posts, setPosts] = useState([]);



  //USE EFFECT
  useEffect(() => {
    getPosts();

    //FETCH DATA
  async function getPosts() {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const data = await response.json();
    console.log(data.data);
    setPosts(data.data.children);
  }
  }, [setPosts])

  return (
    <div className="App">
      {posts.map((post, idx) => (
        <Post 
        title={post.data.title} 
        image={post.data.thumbnail} 
        url={post.data.url} 
        author={post.data.author} 
        body={post.data.selftext}
        media={post.data.media}
        numComments={post.data.num_comments}
        key={idx}
        videoUrl={post.data.is_video ? post.data.media.reddit_video.fallback_url : ""}
        />
      )
      )}
    </div>
  );
}

export default App;
