import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <main className="flex min-h-screen w-full flex-col bg-neutral-50 text-neutral-500">
        {/* Navbar Section */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Footer Section */}
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
