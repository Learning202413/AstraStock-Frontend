import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';
import { HardHat, Wrench, Hammer } from 'lucide-react';

export const UnderConstruction = ({ title }: { title: string }) => {
    return (
        <PageLayout title={title}>
            <div className="flex-1 flex flex-col items-center justify-center py-12 sm:py-20 min-h-[400px] bg-white border border-slate-200 rounded-xl px-4 sm:px-8 text-center shadow-sm">
                <div className="relative mb-6 transform scale-75 sm:scale-100">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-500">
                        <HardHat className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 border-2 border-white shadow-sm">
                        <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="absolute top-0 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-purple-50 rounded-full flex items-center justify-center text-purple-500 border-2 border-white shadow-sm">
                        <Hammer className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                </div>
                
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 px-2">Módulo en Construcción</h2>
                <p className="text-sm sm:text-base text-slate-500 max-w-md mx-auto leading-relaxed px-2">
                    Estamos trabajando duro para tener lista esta sección. ¡Pronto estará disponible con nuevas funcionalidades para mejorar tu experiencia!
                </p>
                
                <div className="mt-8 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-200 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </PageLayout>
    );
};
