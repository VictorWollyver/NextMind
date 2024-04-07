import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Servicos = () => {
  return (
    <Slide direction="right" duration={1000} delay={500} triggerOnce={true} fraction={0.3}>
      <section className="h-[calc(90vh-80px)] flex items-center">
        <div className="container mx-auto px-4 max-w-[1246px]">
          <div className="text-center">
            <p className="text-primary font-medium">
              Oferecemos para você os melhores cursos!
            </p>
            <h2 className="text-5xl font-bold">O que fazemos de melhor?</h2>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-primary p-4 rounded-md text-center">
                <h3 className="text-background font-bold text-xl">Educação</h3>
                <p className="text-background mt-2 font-medium">
                  Aprenda com os melhores professores da atualidade do curso que
                  você escolher!
                </p>
              </div>
              <div className="bg-primary p-4 rounded-md text-center">
                <h3 className="text-background font-bold text-xl">
                  Aprendizado Rápido
                </h3>
                <p className="text-background mt-2 font-medium">
                  Com o metódo de ensino da{" "}
                  <span className="font-bold">NextMind</span>, você irá aprender
                  muito rápido o conteúdo!
                </p>
              </div>
              <div className="bg-primary p-4 rounded-md text-center">
                <h3 className="text-background font-bold text-xl">
                  Causas Sociais
                </h3>
                <p className="text-background mt-2 font-medium">
                  A <span className="font-bold">NextMind</span> acredita no
                  poder da educação e acreditamos em algumas{" "}
                  <span className="font-bold">CAUSAS SOCIAIS</span> em que
                  doamos um pedacinho da nossa empresa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Slide>
  );
};

export default Servicos;
