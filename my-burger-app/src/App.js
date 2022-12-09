import ContentPage from './components/content';
import Header from './components/header';
import Banner from './components/banner';

import './App.css';
import './styles/index.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Banner />
            <ContentPage />
        </div>
    );
}

export default App;
