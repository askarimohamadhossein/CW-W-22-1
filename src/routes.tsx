import { Route, Routes } from "react-router";
import About from "./components/pages/About.tsx";
import ContactForm from "./components/pages/ContactForm.tsx";
import { NavigationBar } from "./components/pages/NavigationBar.tsx";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route path="/About" element={<About />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Route>
    </Routes>
  );
};
