import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Button from "../utilities/Button";
import { Fade, Slide } from "react-awesome-reveal";


const cursos = [
  {
    id: 1,
    name: "Lógica de Programação",
    description: "Aprenda a programar do zero!",
    price: 39.9,
    hours: 10,
  },
  {
    id: 2,
    name: "Web Design",
    description: "Aprenda a programar para a Web",
    price: 49.9,
    hours: 15,
  },
  {
    id: 3,
    name: "Manutenção de Computadores",
    description: "Aprenda a fazer manutenção de computadores",
    price: 59.9,
    hours: 30,
  },
  {
    id: 4,
    name: "Fundamentos e Testes de Software",
    description: "Aprenda a testar software",
    price: 69.9,
    hours: 10,
  },
  {
    id: 5,
    name: "Curso de Arduino",
    description: "Aprenda a desenolver projetos com Arduino",
    price: 79.9,
    hours: 30,
  },
];

const Cursos = () => {
  return (
    <Slide direction="left" duration={1000} delay={1000} triggerOnce={true} fraction={0.3}>
    <section className="h-auto lg:h-[calc(90vh-80px)] flex items-center">
      <div className="container mx-auto px-4 max-w-[1246px]">
        <div className="text-center">
          <p className="text-primary font-medium">Os melhores</p>
          <h2 className="text-5xl font-bold">Cursos Online!</h2>
        </div>
        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-5">
            {cursos.map((curso) => {
              return (
                <Card key={curso.id} className="flex flex-col justify-between">
                  <div>
                    <CardHeader>
                      <CardTitle>{curso.name}</CardTitle>
                      <CardDescription>{curso.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">
                        {parseFloat(curso.price).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </CardContent>
                  </div>
                  <CardFooter>
                    <Button text="Comprar" />
                  </CardFooter>
                </Card>
              );
            })}
          </ul>
        </div>
      </div>
    </section>

    </Slide>
  );
};

export default Cursos;
