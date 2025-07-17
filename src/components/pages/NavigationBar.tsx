import type React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../atoms/Button";

export const NavigationBar: React.FC = () => {
  return (
    <div>
      <nav className="flex gap-2 p-4">
        <Link to="/About">
          <Button name="About" />
        </Link>
        <Link to="/works">
          <Button classname="btn btn-soft btn-success" name="Works" />
        </Link>
        <Link to="/ContactForm">
          <Button classname="btn btn-soft btn-warning" name="Contacts" />
        </Link>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
