import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { toast } from "sonner";
import { Building2, Save, Upload, Percent, Banknote, MapPin } from "lucide-react";
import { C, f } from "../theme";
import { useCompanyStore } from "../store/useCompanyStore";
import { Skeleton } from "./ui/skeleton";

export default function CompanyProfile() {
  const { company, isLoaded, isLoading, fetchCompany } = useCompanyStore();
  const [saving, setSaving] = useState(false);
  
  const [ruc, setRuc] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [regimen, setRegimen] = useState("mype_tributario");
  const [direccion, setDireccion] = useState("");
  const [igv, setIgv] = useState("18.00");
  const [currency, setCurrency] = useState("PEN");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  
  const [firmapseEnv, setFirmapseEnv] = useState("demo");
  const [firmapseUsername, setFirmapseUsername] = useState("");
  const [firmapsePassword, setFirmapsePassword] = useState("");
  
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const regimenes = [
    { value: "mype_tributario", label: "MYPE Tributario" },
    { value: "general", label: "Régimen General" },
    { value: "especial", label: "Régimen Especial (RER)" },
    { value: "rus", label: "Nuevo RUS" }
  ];

  useEffect(() => {
    fetchCompany();
  }, [fetchCompany]);

  useEffect(() => {
    if (company) {
      setRuc(company.ruc || "");
      setRazonSocial(company.razon_social || "");
      setRegimen(company.regimen_tributario || "mype_tributario");
      setDireccion(company.direccion || "");
      setIgv(company.igv_percentage ? String(company.igv_percentage) : "18.00");
      setCurrency(company.currency || "PEN");
      if (company.settings) {
        setFirmapseEnv(company.settings.firmapse_env || "demo");
        setFirmapseUsername(company.settings.firmapse_username || "");
        setFirmapsePassword(company.settings.firmapse_password || "");
      }
      if (company.logo_path) {
        setLogoUrl(`https://pub-3f61dc7e08d4434c96fef3172d2d4dd0.r2.dev/${company.logo_path}`);
      }
    }
  }, [company]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const formData = new FormData();
      formData.append("ruc", ruc);
      formData.append("razon_social", razonSocial);
      formData.append("regimen_tributario", regimen);
      formData.append("direccion", direccion);
      formData.append("igv_percentage", igv);
      formData.append("currency", currency);
      formData.append("firmapse_env", firmapseEnv);
      formData.append("firmapse_username", firmapseUsername);
      formData.append("firmapse_password", firmapsePassword);
      
      if (file) {
        formData.append("logo", file);
      }

      await axios.post("/api/v1/company/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      
      toast.success("Configuración actualizada correctamente");
      await fetchCompany();
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Error al guardar la configuración");
    } finally {
      setSaving(false);
    }
  };
  return (
    <div className="flex-1 overflow-auto bg-slate-50/50 p-4 sm:p-6 md:p-10" style={{ fontFamily: f }}>
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-slate-400" />
            Configuración de Empresa
          </h1>
          <p className="text-slate-500 mt-1">
            Administra la identidad y preferencias de facturación de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1 space-y-6">
            <Card className="border-slate-200/60 shadow-sm bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg">Logo del Negocio</CardTitle>
                <CardDescription>Aparecerá en los tickets y boletas emitidas.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4">
                {isLoading ? (
                  <Skeleton className="w-32 h-32 rounded-xl" />
                ) : (
                  <>
                    <div 
                      className="w-32 h-32 rounded-xl border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden bg-slate-50 relative group cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      {(preview || logoUrl) ? (
                        <img 
                          src={preview || logoUrl || ''} 
                          alt="Logo" 
                          className="w-full h-full object-contain p-2"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-slate-400">
                          <Upload className="w-8 h-8 mb-2 opacity-50" />
                          <span className="text-xs font-medium">Subir Logo</span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white text-xs font-medium">Cambiar</span>
                      </div>
                    </div>
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      className="hidden" 
                      accept="image/png, image/jpeg, image/jpg, image/svg+xml"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs text-center text-slate-500">
                      Formato cuadrado recomendado. (Max 2MB)
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card className="border-slate-200/60 shadow-sm bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg">Identidad Legal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {isLoading ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Skeleton className="h-4 w-10 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                      <div className="space-y-2"><Skeleton className="h-4 w-32 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                    </div>
                    <div className="space-y-2"><Skeleton className="h-4 w-24 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                    <div className="space-y-2"><Skeleton className="h-4 w-32 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ruc">RUC</Label>
                        <Input 
                          id="ruc" 
                          placeholder="Ej. 20123456789" 
                          value={ruc}
                          onChange={(e) => setRuc(e.target.value)}
                          maxLength={11}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Régimen Tributario</Label>
                        <Select value={regimen} onValueChange={setRegimen}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccione un régimen" />
                          </SelectTrigger>
                          <SelectContent>
                            {regimenes.map(r => (
                              <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="razonSocial">Razón Social</Label>
                      <Input 
                        id="razonSocial" 
                        placeholder="Ej. Mi Empresa S.A.C." 
                        value={razonSocial}
                        onChange={(e) => setRazonSocial(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="direccion" className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        Dirección Fiscal
                      </Label>
                      <Input 
                        id="direccion" 
                        placeholder="Ej. Av. Larco 123, Miraflores, Lima" 
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                      />
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="border-slate-200/60 shadow-sm bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg">Preferencias de Facturación</CardTitle>
                <CardDescription>Valores por defecto aplicados al sistema.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {isLoading ? (
                  <>
                    <div className="space-y-2"><Skeleton className="h-4 w-32 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                    <div className="space-y-2"><Skeleton className="h-4 w-32 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="igv" className="flex items-center gap-1.5">
                        <Percent className="w-3.5 h-3.5 text-slate-400" />
                        Impuesto / IGV (%)
                      </Label>
                      <Input 
                        id="igv" 
                        type="number"
                        step="0.01"
                        placeholder="18.00" 
                        value={igv}
                        onChange={(e) => setIgv(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="flex items-center gap-1.5">
                        <Banknote className="w-3.5 h-3.5 text-slate-400" />
                        Moneda Principal
                      </Label>
                      <Select value={currency} onValueChange={setCurrency}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione moneda" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PEN">Soles (PEN)</SelectItem>
                          <SelectItem value="USD">Dólares (USD)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="border-slate-200/60 shadow-sm bg-white/80 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-lg">Facturación Electrónica (FirmaPSE)</CardTitle>
                <CardDescription>Credenciales API para comunicación con SUNAT.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isLoading ? (
                  <div className="space-y-4">
                    <div className="space-y-2"><Skeleton className="h-4 w-32 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Skeleton className="h-4 w-24 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                      <div className="space-y-2"><Skeleton className="h-4 w-24 rounded" /><Skeleton className="h-10 w-full rounded-md" /></div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label>Entorno de Facturación</Label>
                      <Select value={firmapseEnv} onValueChange={setFirmapseEnv}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccione entorno" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Pruebas (Demo)</SelectItem>
                          <SelectItem value="produccion">Producción (SUNAT)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-slate-500">
                        Usa "Pruebas" mientras configuras el sistema.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firmapse_username">Usuario API (FirmaPSE)</Label>
                        <Input 
                          id="firmapse_username" 
                          placeholder="Ej. demo@miempresa.com" 
                          value={firmapseUsername}
                          onChange={(e) => setFirmapseUsername(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firmapse_password">Clave API (FirmaPSE)</Label>
                        <Input 
                          id="firmapse_password" 
                          type="password"
                          placeholder="••••••••" 
                          value={firmapsePassword}
                          onChange={(e) => setFirmapsePassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-end pt-4">
              <Button 
                onClick={handleSave} 
                disabled={isLoading || saving || !ruc || !razonSocial}
                className="gap-2"
                style={{ background: C.cobalt, color: "white" }}
              >
                {saving ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-t-white"></div>
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Guardar Cambios
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
