const mockData = ['', '', '', ''];

const News = () => {
  return (
    <div id='news'>
      <span>news</span>
      <div className='news-list'>
        {mockData.map((news) => (
          <span className='news-massage'>{news}</span>
        ))}
      </div>
    </div>
  );
};
export default News;
