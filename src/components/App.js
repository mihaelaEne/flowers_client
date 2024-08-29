
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>

    <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/new-cat" element={<CreateNewFlower/>}></Route>
         <Route path="/edit-cat/:id" element={<Update/>}></Route>ß

    </Routes>
  
  
  </BrowserRouter>
)
  
}

export default App;
