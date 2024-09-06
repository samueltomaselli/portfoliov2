import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
    {
        id: '1',
        title: "E-commerce Dashboard",
        description: "Painel de controle para gerenciamento de vendas online",
        image: "https://via.placeholder.com/300x200?text=E-commerce+Dashboard",
    },
    {
        id: '2',
        title: "Extensão de Produtividade",
        description: "Extensão para Chrome que melhora o fluxo de trabalho",
        image: "https://via.placeholder.com/300x200?text=Productivity+Extension",
    },
    {
        id: '3',
        title: "Landing Page para Startup",
        description: "Página de destino otimizada para conversão de uma startup de tecnologia",
        image: "https://via.placeholder.com/300x200?text=Startup+Landing+Page",
    },
];

export const ProjectsSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <CardContainer key={project.id} className="inter-var">
                    <CardBody className="bg-white dark:bg-gray-800 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-all duration-200">
                        <CardItem translateZ="50" className="text-2xl font-bold text-gray-800 dark:text-white">
                            {project.title}
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                            {project.description}
                        </CardItem>
                        <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                            <img
                                src={project.image}
                                height="200"
                                width="300"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-200"
                                alt={project.title}
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
};