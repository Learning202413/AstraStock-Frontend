import React from 'react';
import { Link } from 'react-router-dom';
import { SearchX, Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center w-full h-full min-h-[400px] sm:min-h-[500px] bg-transparent p-4 sm:p-8 text-center" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200 max-w-lg w-full flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4 sm:mb-6">
                    <SearchX className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-2 sm:mb-4 tracking-tight">404</h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 mb-2 sm:mb-3">Página no encontrada</h2>
                
                <p className="text-sm sm:text-base text-slate-500 mb-6 sm:mb-8 leading-relaxed px-2">
                    Lo sentimos, la página que estás buscando no existe, fue movida o no tenés los permisos necesarios para acceder.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full px-2">
                    <button 
                        onClick={() => window.history.back()}
                        className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-base text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver atrás
                    </button>
                    <Link 
                        to="/dashboard"
                        className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base text-white transition-opacity hover:opacity-90"
                        style={{ background: "#1b3eb5" }}
                    >
                        <Home className="w-4 h-4" />
                        Ir al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};
