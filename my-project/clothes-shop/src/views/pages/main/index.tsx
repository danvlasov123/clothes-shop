import React from "react";
import { Button, Card } from "../../../components";
import { pupularShoes } from "../../../data/ShoesPopularMain";
import img from "../../../data/img/sneakers-main.webp";
import popular1 from "../../../data/img/popular-main.jpg";
import popular2 from "../../../data/img/popular-main2.jpg";
import { Link } from "react-router-dom";
import { Slider } from "../../../components";
const MainPage = (): JSX.Element => {
  return (
    <section>
      <div className="w-full h-16 bg-slate-200 flex justify-center flex-col items-center">
        <h2 className="text-lg">Sign up for 20% off your first purchase</h2>
        <Link to="sign-up" className="text-xs underline">
          Sign up
        </Link>
      </div>
      <div className="container">
        <div className="border-2 cursor-pointer bg-[#f6f6f6] border-black rounded px-10 py-8 mt-10 flex justify-between">
          <div>
            <p className="font-medium	text-xl">Welcome, looking for the best?</p>
            <h2 className="text-5xl mt-3 font-extrabold uppercase">
              Save up to 60%
            </h2>
            <span className="font-medium text-xl mt-5 inline-block">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore,
              <br />
              quisquam officia laudantium distinctio temporibus!
            </span>
            <Button className="mt-5">Shop</Button>
          </div>
          <div className="mr-[-2.5rem]">
            <img className="h-52 min-w-[280px]" src={img} alt="" />
          </div>
        </div>
        <div className="w-full bg-black flex justify-around items-center h-40 mt-6">
          <div className="text-white flex items-center w-full cursor-pointer flex-col hover:opacity-60">
            <Link to="/man">
              <p className="font-semibold text-xl text-center">For</p>
              <span className="uppercase relative font-bold text-4xl tracking-wider after:content-['›'] after:top-[1px] after:pb-2 after:ml-2 after:text-white after:absolute">
                Man
              </span>
            </Link>
          </div>
          <div className="text-white flex items-center w-full cursor-pointer flex-col hover:opacity-60">
            <Link to="/woman">
              <p className="font-semibold text-xl text-center">For</p>
              <span className="uppercase relative font-bold text-4xl tracking-wider after:content-['›'] after:top-[1px] after:pb-2 after:ml-2 after:text-white after:absolute">
                Woman
              </span>
            </Link>
          </div>
          <div className="text-white flex items-center w-full cursor-pointer flex-col hover:opacity-60">
            <Link to="/all">
              <p className="font-semibold text-xl text-center">For</p>
              <span className="uppercase relative font-bold text-4xl tracking-wider after:content-['›'] after:top-[1px] after:pb-2 after:ml-2 after:text-white after:absolute">
                Kids
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="font-semibold text-4xl">Popular running shoes</h2>
          <div className="flex mt-7">
            <div className="w-6/12 h-1/2 mr-2 relative cursor-pointer">
              <div className="absolute top-12 left-12">
                <h2 className="text-white font-medium	text-2xl">
                  New in New Balance <br /> Fresh Foam Roav City Grit
                </h2>
                <Button className="mt-8">Shop</Button>
              </div>
              <img src={popular1} className="w-full h-full" alt="" />
            </div>
            <div className="w-6/12 h-1/2 ml-2 relative cursor-pointer">
              <div className="absolute top-12 left-12">
                <h2 className="text-white font-medium	text-2xl">
                  The Always Legandary Nike <br /> Air Zoom Pegasus 37
                </h2>
                <Button className="mt-8">Shop</Button>
              </div>
              <img src={popular2} className="w-full h-full" alt="" />
            </div>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="ml-2 mb-5 text-2xl font-medium	">Popular Right Now</div>
          <Slider>
            {pupularShoes.map((item) => {
              return (
                <Card
                  name={item.name}
                  price={item.price}
                  type={item.type}
                  img={item.img}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export { MainPage };
