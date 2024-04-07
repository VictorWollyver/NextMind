import React from "react";
import FormContato from "./FormContato";
import { Fade, Slide } from "react-awesome-reveal";

const Contato = () => {
  return (
    <Slide
      direction="right"
      duration={1000}
      delay={1000}
      triggerOnce={true}
      fraction={0.3}
    >
      <section className="h-[calc(90vh-80px)] flex items-center">
        <div className="container mx-auto px-4 max-w-[1246px]">
          <div className="lg:grid lg:grid-cols-2 items-center gap-20">
            <div className="hidden lg:block">
              <p className="text-primary font-medium">Vamos conversar?</p>
              <h2 className="text-5xl font-bold">Contate-nos</h2>
              <p className="font-semibold leading-10 text-2xl mt-8">
                Precisa de alguma ajuda para usar o aplicativo? Ver seus pedidos
                ou mais detalhes e opções sobre nossos serviços, contate-nos
                agora! Estamos online 24h por dia, de Segunda á Domingo! 😉
              </p>
            </div>
            <div>
              <div className="lg:hidden">
                <p className="text-primary font-medium">Vamos conversar?</p>
                <h2 className="text-5xl font-bold">Contate-nos</h2>
              </div>
              <FormContato />
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default Contato;
