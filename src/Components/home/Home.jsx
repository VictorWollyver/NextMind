// import React from 'react'

import Button from "../utilities/Button";
import imgHome from "../../assets/home.png";
import { Fade, Bounce, Slide } from "react-awesome-reveal";

const Home = () => {
  return (
    <Fade fraction={0.3}>
      <section className="h-[calc(100vh-80px)] flex items-center pt-24">
        <div className="container max-w-[1246px] mx-auto px-4">
          <div className="lg:grid lg:grid-cols-2 items-center">
            <div className="">
              <h1 className="font-bold text-primary text-5xl leading-10">
                Tudo muda quando você <br /> aprende.
              </h1>
              <h2 className="font-bold text-4xl mt-4 mb-8 leading-10">
                Venha mudar o seu mundo <br /> com a NextMind!
              </h2>
              <Button text={"Comprar agora"} />
            </div>
            <div className="hidden lg:block">
              <img src={imgHome} alt="imagem home" />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Home;
