import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    initReactI18next
  } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:"en",
    returnObjects:true,
    resources:{
        en:{
            translation:{
                greeting:"Hello, Welcome!",
                description:{
                    line1:"I may disagree with what you say, but I will defend to death your right to say it",
                    line2:"I may disagree with what you say, but I will defend to death your right to say it"
                }
            }

        },
        fr:{
            translation:{
                greeting:"Bonjour, bienvenue !",
                description:{
                    line1:"Je ne suis peut-être pas d'accord avec ce que tu dis, mais je défendrai jusqu'à la mort ton droit de le dire.",
                    line2:"Je ne suis peut-être pas d'accord avec ce que tu dis, mais je défendrai jusqu'à la mort ton droit de le dire."
                }
            }
        },
        bn:{
            translation:{
                greeting:"হ্যালো, স্বাগতম!",
                description:{
                    line1:"আমি আপনার কথার সাথে একমত না হতে পারি, কিন্তু আমি মৃত্যু পর্যন্ত আপনার বলার অধিকার রক্ষা করব",
                    line2:"আমি আপনার কথার সাথে একমত না হতে পারি, কিন্তু আমি মৃত্যু পর্যন্ত আপনার বলার অধিকার রক্ষা করব"
                }
            },
            
        }
    }
})