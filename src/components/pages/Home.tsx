import { Link } from "react-router-dom";
import Char from "../../assets/image/me.jpg";
import { Button } from "../atoms/Button";

export const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-10">
      <section className="mt-10 md:mt-0">
        <img
          className="w-[300px] h-[300px] md:w-[750px] md:h-[750px] rounded-full mx-auto"
          src={Char}
          alt="Photo"
        />
      </section>
      <section className="mt-20 md:mt-40 space-y-10 text-center md:text-left">
        <p className="text-yellow-300 text-4xl md:text-8xl font-bold">
          Subscribe Now to Our Newsletter
        </p>
        <p className="text-lg md:text-2xl font-semibold text-gray-400 max-w-[700px] mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Button
            className="btn btn-warning font-bold text-lg md:text-xl"
            name="back"
          />
          <Link to={"/About"}>
            <Button
              className="btn btn-primary font-bold text-lg md:text-xl"
              name="Lets Go"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};
