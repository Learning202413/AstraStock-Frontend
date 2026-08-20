import React, { useRef } from 'react';
import { X, Printer } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

interface ReceiptModalProps {
  sale: any;
  onClose: () => void;
}

export default function ReceiptModal({ sale, onClose }: ReceiptModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  if (!sale) return null;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  };

  // QR Code string for SUNAT (RUC | TIPO_COMP | SERIE | CORRELATIVO | IGV | TOTAL | FECHA | TIPO_DOC_CLIENTE | NUM_DOC_CLIENTE)
  const qrValue = [
    sale.empresa?.ruc || '',
    sale.tipo_comprobante || '',
    sale.serie || '',
    sale.correlativo || '',
    parseFloat(sale.igv || 0).toFixed(2),
    parseFloat(sale.total_amount).toFixed(2),
    new Date(sale.created_at).toISOString().split('T')[0],
    sale.customer_document_type || '-',
    sale.customer_document_number || '-'
  ].join('|');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 print:bg-white print:p-0 print:backdrop-blur-none">
      
      {/* Modal Container */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm max-h-[90vh] overflow-hidden flex flex-col print:shadow-none print:w-full print:max-w-[80mm] print:rounded-none print:max-h-none print:m-0">
        
        {/* Header - Hidden in Print */}
        <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-slate-50/50 print:hidden">
          <h3 className="font-bold text-slate-800">Comprobante Generado</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Receipt Content - Visible in Print */}
        <div 
          ref={printRef}
          className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1 print:overflow-visible print:p-0 text-sm text-slate-800"
          style={{ fontFamily: 'monospace' }}
        >
          <div className="text-center mb-6">
            <h2 className="font-bold text-xl uppercase">{sale.empresa?.razon_social || 'MI EMPRESA S.A.C'}</h2>
            <p className="text-xs">RUC: {sale.empresa?.ruc || '20000000001'}</p>
            <p className="text-xs">{sale.empresa?.direccion || 'Dirección de la empresa'}</p>
            
            <div className="my-4 border-t border-b border-dashed border-slate-300 py-2">
              <p className="font-bold uppercase">
                {sale.tipo_comprobante === '01' ? 'FACTURA ELECTRÓNICA' : 
                 sale.tipo_comprobante === '03' ? 'BOLETA DE VENTA ELECTRÓNICA' : 'TICKET'}
              </p>
              <p className="font-bold text-lg">{sale.receipt_number}</p>
            </div>
            
            <div className="text-left text-xs space-y-1">
              <p><span className="font-semibold">FECHA:</span> {formatDate(sale.created_at)}</p>
              <p><span className="font-semibold">CLIENTE:</span> {sale.customer_name || 'CLIENTE VARIOS'}</p>
              {(sale.customer_document_type !== '0' && sale.customer_document_number) && (
                <p><span className="font-semibold">{sale.customer_document_type === '6' ? 'RUC' : 'DOC'}:</span> {sale.customer_document_number}</p>
              )}
              <p><span className="font-semibold">PAGO:</span> {sale.payment_method.toUpperCase()}</p>
            </div>
          </div>

          <table className="w-full text-xs mb-4 table-fixed">
            <thead>
              <tr className="border-b border-dashed border-slate-300">
                <th className="text-left py-1 font-semibold w-[15%]">CANT</th>
                <th className="text-left py-1 font-semibold w-[45%]">DESCRIPCIÓN</th>
                <th className="text-right py-1 font-semibold w-[20%]">P.U.</th>
                <th className="text-right py-1 font-semibold w-[20%]">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {sale.details?.map((detail: any) => (
                <tr key={detail.id}>
                  <td className="py-1 align-top">{detail.quantity}</td>
                  <td className="py-1 pr-1 align-top break-words">{detail.product?.name}</td>
                  <td className="py-1 text-right align-top">{parseFloat(detail.unit_price).toFixed(2)}</td>
                  <td className="py-1 text-right align-top">{parseFloat(detail.subtotal).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border-t border-dashed border-slate-300 pt-2 text-right space-y-1 text-xs">
            {sale.tipo_comprobante !== 'ticket' && (
              <>
                <p>SUBTOTAL: S/ {parseFloat(sale.total_amount - sale.igv).toFixed(2)}</p>
                <p>IGV (18%): S/ {parseFloat(sale.igv).toFixed(2)}</p>
              </>
            )}
            <p className="font-bold text-sm">TOTAL: S/ {parseFloat(sale.total_amount).toFixed(2)}</p>
          </div>

          {sale.sunat_hash && (
            <div className="mt-6 flex flex-col items-center">
              <QRCodeSVG value={qrValue} size={100} />
              <p className="text-[10px] text-center mt-2 break-all">Hash: {sale.sunat_hash}</p>
            </div>
          )}

          <div className="mt-6 text-center text-xs">
            <p>¡Gracias por su compra!</p>
            <p>Consulte su comprobante en: <br/> panelpse.com</p>
          </div>
        </div>

        {/* Footer - Hidden in Print */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 print:hidden flex gap-3">
          <button 
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#1b3eb5] text-white rounded-xl font-medium hover:bg-[#163294] transition-colors"
          >
            <Printer className="w-4 h-4" /> Imprimir
          </button>
          <button 
            onClick={onClose}
            className="flex-1 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}
