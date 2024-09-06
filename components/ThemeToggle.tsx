import { IconMoon, IconSun } from "@tabler/icons-react";

export const ThemeToggle: React.FC<{ isDarkMode: boolean; toggleDarkMode: () => void }> = ({ isDarkMode, toggleDarkMode }) => (
    <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-200"
    >
        {isDarkMode ? <IconSun className="h-6 w-6" /> : <IconMoon className="h-6 w-6" />}
    </button>
);