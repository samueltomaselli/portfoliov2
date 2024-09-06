export const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="w-full mb-24 z-10">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            {title}
        </h2>
        {children}
    </section>
);