import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Friends from './components/Freinds/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postDetail" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/friend/:detail" element={<FriendDetail></FriendDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  )
}

export default App;
