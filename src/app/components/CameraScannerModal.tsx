import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { X, Camera } from 'lucide-react';
import { toast } from 'sonner';

interface CameraScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScan: (decodedText: string) => void;
}

export default function CameraScannerModal({ isOpen, onClose, onScan }: CameraScannerModalProps) {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const isScanningRef = useRef<boolean>(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      if (scannerRef.current && isScanningRef.current) {
        try {
          const p = scannerRef.current.stop();
          if (p) p.catch(() => {}).finally(() => { scannerRef.current?.clear(); });
        } catch(e) {}
      }
      isScanningRef.current = false;
      return;
    }

    setIsInitializing(true);
    const scanner = new Html5Qrcode("reader-camera");
    scannerRef.current = scanner;

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: { width: 250, height: 150 }, aspectRatio: 1.0 },
      (decodedText) => {
        onScan(decodedText);
      },
      () => {} // ignore scan frame errors
    ).then(() => {
      isScanningRef.current = true;
      setIsInitializing(false);
    }).catch((err) => {
      console.warn("Camera start failed:", err);
      toast.error("No se pudo acceder a la cámara. Revisa los permisos.");
      setIsInitializing(false);
      isScanningRef.current = false;
      onClose();
    });

    return () => {
      if (scannerRef.current && isScanningRef.current) {
        try {
          const p = scannerRef.current.stop();
          if (p) p.catch(() => {}).finally(() => { scannerRef.current?.clear(); });
        } catch (e) {}
      }
      isScanningRef.current = false;
    };
  }, [isOpen, onScan, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-cyan-600" />
            <h3 className="font-semibold text-slate-800">Escanear Código</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Camera Container */}
        <div className="relative bg-black w-full aspect-square flex items-center justify-center">
          {isInitializing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-sm font-medium">Iniciando cámara...</p>
            </div>
          )}
          <div id="reader-camera" className="w-full h-full"></div>
          
          {/* Overlay Guide */}
          {!isInitializing && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-[250px] h-[150px] border-2 border-cyan-500 rounded-xl relative">
                {/* Esquinas animadas */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-cyan-400"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-cyan-400"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-cyan-400"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-cyan-400"></div>
                {/* Laser animation */}
                <div className="w-full h-0.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] absolute top-1/2 -translate-y-1/2 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white text-center">
          <p className="text-sm text-slate-500">
            Apunta la cámara hacia el código de barras o código QR. El escaneo será automático.
          </p>
        </div>
      </div>
    </div>
  );
}
