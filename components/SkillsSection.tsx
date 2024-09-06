import { HoverEffect } from "@/components/ui/card-hover-effect";

const skills = [
    {
        title: "React",
        description: "Biblioteca JavaScript para construir interfaces de usuário",
        link: "https://reactjs.org/"
    },
    {
        title: "Node.js",
        description: "Ambiente de execução JavaScript do lado do servidor",
        link: "https://nodejs.org/"
    },
    {
        title: "TypeScript",
        description: "Superset tipado de JavaScript que compila para JavaScript puro",
        link: "https://www.typescriptlang.org/"
    },
    {
        title: "Next.js",
        description: "Framework React para produção",
        link: "https://nextjs.org/"
    },
    {
        title: "GraphQL",
        description: "Linguagem de consulta para APIs",
        link: "https://graphql.org/"
    },
    {
        title: "Docker",
        description: "Plataforma para desenvolver, enviar e executar aplicações",
        link: "https://www.docker.com/"
    },
];

export const SkillsSection = () => {
    return (
        <HoverEffect items={skills} className="max-w-5xl mx-auto" />
    );
};