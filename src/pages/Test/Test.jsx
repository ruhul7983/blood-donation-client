import React, { useState } from 'react';
import {useTranslation} from "react-i18next";
import LanguageSelector from './LanguageSelector';


const Test = () => {
    const {t} = useTranslation();
    const {line1,line2 } = t("description");
     return (
        <div className="min-h-screen max-w-6xl mx-auto">
            <LanguageSelector/>
            <h1 className="">{t("greeting")}</h1>
            <h1 className="">{line1}</h1>
            <h1 className="">{line2}</h1>
        </div>
    );
};

export default Test;
