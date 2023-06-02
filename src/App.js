import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import PostPage from './pages/postpage/postPage';
import Admin from './pages/admin/Admin';
import Header from './components/Header/Header';
import Maps from './pages/maps/Maps';

function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/maps" element={<Maps />} />
      <Route path="/post/:postId" element={<PostPage />} />
    </Routes>
  </Router>
  );
}

export default App;