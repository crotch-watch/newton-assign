const URL = 'https://dummyjson.com/posts'

const DemoFetch = function DemoFetch() {
  const posts = [];
  
  return (
    <>
      <button>SHOW</button>
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
