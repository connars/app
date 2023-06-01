import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import PostPage from './pages/postpage/postPage';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:postId" element={<PostPage />} />
    </Routes>
  </Router>
  );
}

export default App;