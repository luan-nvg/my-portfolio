import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PageLayout from "./components/PageLayout"
import Portfolio from "./Portfolio"
import ProjectPage from "./pages/ProjectPage"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
