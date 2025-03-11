import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Programs } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <main className="flex min-h-screen w-full flex-col bg-neutral-50 text-neutral-500">
        {/* Navbar Section */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Pages */}
          <Route path="/programs" element={<Programs />} />
          {/* <Route path="/resources" element={<Resources />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        {/* Footer Section */}
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
