import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./page/Home"
import Login from "./page/Login"
import Register from "./page/Register"
import Reset from "./page/Reset"
import ProvateRoutes from "./routes/ProvateRoutes"

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<ProvateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} exact />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  )
}