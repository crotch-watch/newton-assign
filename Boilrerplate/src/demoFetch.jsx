import { useState, useEffect } from 'react';

const DemoFetch = function DemoFetch() {
  const [posts, setPost] = useState([]);
  const [fetchPosts, setFetchPost] = useState(false);

  useEffect(() => {
    if (fetchPosts) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then(setPost);
    }
  }, [fetchPosts]);

  return (
    <>
      <button onClick={() => setFetchPost(true)}>SHOW</button>
      {posts.map(({ id, title, body }) => (
        <div key={id} className="post">
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      ))}
    </>
  );
};

export default DemoFetch;
