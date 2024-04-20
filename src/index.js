import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/HomePage";
import './index.css';
import About from "./pages/AboutPage";
// import Works from "./pages/WorkPage";
import Blogs from "./pages/BlogsPage";
// import Contact from "./pages/ContactPage";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <div id='body'>
    <BrowserRouter >
      <Routes>
        <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home />} />
          {/* <Route path="works" element={<Works/>}/> */}
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);