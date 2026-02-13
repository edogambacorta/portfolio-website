"use client";

import React from "react";
import { useLanguage } from "../lib/LanguageContext";

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-1 bg-gray-800/60 rounded-full px-1 py-1 border border-gray-700/50">
            <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${language === "en"
                        ? "bg-accent text-black shadow-sm"
                        : "text-gray-400 hover:text-white"
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage("de")}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${language === "de"
                        ? "bg-accent text-black shadow-sm"
                        : "text-gray-400 hover:text-white"
                    }`}
            >
                DE
            </button>
        </div>
    );
}
