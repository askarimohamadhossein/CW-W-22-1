import { Route, Routes } from "react-router";
import About from "./components/pages/About.tsx";
import ContactPage from "./components/pages/ContactForm.tsx";
import { HomePage } from "./components/pages/Home.tsx";
import { NavigationBar } from "./components/pages/NavigationBar.tsx";
import Works from "./components/pages/Works.tsx";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<NavigationBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactForm" element={<ContactPage />} />
        <Route path="/Works" element={<Works />} />
      </Route>
    </Routes>
  );
};
