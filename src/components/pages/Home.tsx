import { Link } from "react-router-dom";
import Char from "../../assets/image/me.jpg";
import { Button } from "../atoms/Button";

export const HomePage = () => {
  return (
    <div className="grid grid-cols-2">
      <section className=" mt-40 p-4">
        <p className="text-yellow-300 text-8xl font-bold  ">
          Subscribe Now to Our Newsletter
        </p>
        <p className="mt-20 text-2xl font-semibold text-gray-400 max-w-[700px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="flex gap-5 mt-20">
          <Button className="btn btn-warning font-bold text-xl" name="back" />
          <Link to={"/About"}>
            <Button className="btn btn-primary font-bold" name="Lets Go" />
          </Link>
        </div>
      </section>
      <section>
        <img
          className="w-[750px] h-[750px] rounded-full mt-15 mx-auto"
          src={Char}
          alt=""
        />
      </section>
    </div>
  );
};
