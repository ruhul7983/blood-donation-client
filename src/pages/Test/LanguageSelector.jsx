import { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const languages = [
        {code:"en",lang:"English"},
        {code:"fr",lang:"French"},
        {code:"bn",lang:"Bengali"},
    ];
    // const [selectedValue , setSelectedValue] = useState("en");
    const handleOptionChange = (event) => {
        const value = event.target.value;
        // setSelectedValue(value);
        console.log('Selected option:', value);
        changeLanguage(value);
        // You can call any other function or perform actions here
      };
    const changeLanguage =(lng)=>{
        console.log(lng);
        i18n.changeLanguage(lng);
    }
    return (
        <div>
            <select  name="" id="" onChange={handleOptionChange}>
                {
                    languages.map(lang=><option value={lang.code}>{lang.lang}</option>)
                }
                
            </select>
        </div>
    );
};

export default LanguageSelector;