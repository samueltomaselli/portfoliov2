import { FeatureCard } from "@/components/FeatureCard";
import { SkeletonOne } from "@/components/SkeletonOne";
import { SkeletonTwo } from "@/components/SkeletonTwo";
import { SkeletonThree } from "@/components/SkeletonThree";
import { SkeletonFour } from "@/components/SkeletonFour";

const services = [
    {
        title: "Desenvolvimento de Landing Pages",
        description: "Criação de páginas de destino atraentes e otimizadas para conversão, aumentando o engajamento do usuário.",
    },
    {
        title: "Criação de Dashboards Interativos",
        description: "Desenvolvimento de painéis de controle intuitivos e informativos para visualização de dados em tempo real.",
    },
    {
        title: "Desenvolvimento de Extensões para Navegadores",
        description: "Criação de extensões personalizadas para melhorar a produtividade e a experiência do usuário em navegadores web.",
    },
    {
        title: "Aplicações Web Full Stack",
        description: "Desenvolvimento completo de aplicações web, do backend ao frontend, utilizando as mais recentes tecnologias e melhores práticas.",
    },
];

export const ServicesSection = () => (
    <div className="relative z-20">

        <div className="px-8">
            <h4 className="text-3xl lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white mb-8">
                Soluções Personalizadas para o Seu Negócio
            </h4>
            <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                Oferecendo uma gama completa de serviços de desenvolvimento web para impulsionar sua presença online.
            </p>
        </div>

        <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                {services.map((service, index) => (
                    <FeatureCard key={service.title} className={`col-span-1 lg:col-span-3 ${index % 2 === 0 ? 'lg:border-r' : ''} ${index < services.length - 2 ? 'border-b' : ''} dark:border-neutral-800`}>
                        <FeatureCard.Title>{service.title}</FeatureCard.Title>
                        <FeatureCard.Description>{service.description}</FeatureCard.Description>
                        <div className="h-full w-full">
                            {index === 0 && <SkeletonOne />}
                            {index === 1 && <SkeletonTwo />}
                            {index === 2 && <SkeletonThree />}
                            {index === 3 && <SkeletonFour />}
                        </div>
                    </FeatureCard>
                ))}
            </div>
        </div>
    </div>
);