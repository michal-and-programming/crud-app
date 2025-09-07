import { Container } from "react-bootstrap";
import Header from "./components/vievs/Header/Header";
import { Routes,Route } from "react-router-dom";
import Home from './components/pages/Home/Home';
import ChosenPost from './components/pages/ChosenPost/ChosenPost';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NoMatch from "./components/vievs/NoMatch/NoMatch";
import Footer from "./components/vievs/Footer/Footer";

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<ChosenPost />} />
          <Route path="/post/add" element={<AddPost />} />
          <Route path="post/edit/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />}/>
        </Routes>
        <Footer />
      </Container>
    </main>
  )
}

export default App;
