import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ResearchPage from "./pages/ResearchPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import GuidesPage from "./pages/GuidesPage";
import ResourcesPage from "./pages/ResourcesPage";
import BlogPage from "./pages/BlogPage";
import CreditsPage from "./pages/CreditsPage";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aboutme" element={<AboutMePage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="credits" element={<CreditsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
