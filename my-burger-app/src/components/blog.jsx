const mockData = ['', '', '', '', ''];

const Blog = () => {
  return (
    <div id='blog'>
      <span>blog</span>
      {mockData.map((post) => (
        <span className='blog-post'>{post}</span>
      ))}
    </div>
  );
};
export default Blog;
