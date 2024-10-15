import React, { createContext, useState, useCallback, useMemo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

// Definindo o tipo do contexto
export interface LanguageContextProps {
    language: string;
    changeLanguage: (lng: string) => void;
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

// Criando o provider para gerenciar o idioma
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<string>("en" || i18n.language);

    // useCallback para evitar recriação da função de mudança de idioma
    const changeLanguage = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    }, [i18n]);

    // useMemo para memorizar o valor do contexto
    const contextValue = useMemo(() => ({
        language,
        changeLanguage,
    }), [language, changeLanguage]);

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;
