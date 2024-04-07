// import React from 'react'

import Button from "../utilities/Button";
import imgSobre from "../../assets/about.jpg";
import { Fade, Slide } from "react-awesome-reveal";

const Sobre = () => {
  return (
    <Slide direction="left" duration={1000} delay={500} triggerOnce={true} fraction={0.3}>
      <section className="h-[calc(90vh-80px)] flex items-center">
        <div className="container mx-auto px-4 max-w-[1246px]">
          <div className="lg:grid lg:grid-cols-2 items-center justify-center content-center ">
            <div className="rounded hidden lg:block">
              <img className="rounded h-[500px]" src={imgSobre} alt="" />
            </div>
            <div>
              <p className="text-primary font-medium">Sobre nós</p>
              <h2 className="text-5xl font-bold mt-2">
                Aprenda com os melhores!
              </h2>
              <p className="font-medium mt-6">
                Com apenas alguns toques na tela, e com o padrão NextMind de
                qualidade, conectamos você com os melhores do país!
              </p>
              <Button text={"Gostou? Veja agora!"} />
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default Sobre;
