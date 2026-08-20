import { useEffect, useRef } from 'react';

/**
 * Escucha la entrada de un escáner de código de barras a nivel global.
 * @param onScan Callback que se ejecuta cuando se detecta un código de barras.
 */
export function useBarcodeScanner(onScan: (barcode: string) => void) {
  const buffer = useRef<string>('');
  const timeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignorar si el usuario está escribiendo en un input o textarea (para no interferir con otras búsquedas manuales)
      // Excepción: si permitimos que funcione dentro del buscador del POS, no bloqueamos si el input es tipo texto general
      // pero para evitar líos, es mejor dejar que funcione siempre a menos que sea un textarea.
      if (e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Los escáneres siempre terminan con un 'Enter'
      if (e.key === 'Enter') {
        if (buffer.current.length >= 3) {
          // Es probable que sea un código de barras si tiene más de 3 caracteres
          const scannedCode = buffer.current;
          buffer.current = '';
          
          // Prevenimos el submit de algún formulario accidental
          e.preventDefault();
          onScan(scannedCode);
        }
        return;
      }

      // Acumular caracteres imprimibles
      if (e.key.length === 1) {
        buffer.current += e.key;

        // Limpiar el buffer si el usuario está tecleando lento (los escáneres teclean en milisegundos)
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
          buffer.current = '';
        }, 100); // 100ms de tolerancia (un humano no teclea 13 números en 100ms)
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [onScan]);
}
