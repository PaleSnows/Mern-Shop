import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Cart from "./pages/Cart"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App