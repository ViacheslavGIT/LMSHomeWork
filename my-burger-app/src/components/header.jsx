const mockData = ['', '', '', '', ''];

function Header() {
  return (
    <header id='blog-name-container'>
      <div id='logo-wraper'>
        <span id='logo'></span>
      </div>
      <div id='title-wraper'>
        <span>Blog name</span>
      </div>
      <div id='header-item-wrapper'>
        {mockData.map((link) => (
          <span className='header-item'>{link}</span>
        ))}
      </div>
    </header>
  );
}

export default Header;
