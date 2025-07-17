import type React from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../atoms/Button";

export const NavigationBar: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <nav className="flex  w-full gap-2 p-2 fixed z-40 bg-slate-900 rounded h-15">
          <Link to="/">
            <Button classname="btn btn-soft btn-info" name="Home" />
          </Link>
          <Link to="/About">
            <Button name="About" />
          </Link>
          <Link to="/Works">
            <Button classname="btn btn-soft btn-success" name="Works" />
          </Link>
          <Link to="/ContactForm">
            <Button classname="btn btn-soft btn-warning" name="Contacts" />
          </Link>
        </nav>
      </div>

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};
