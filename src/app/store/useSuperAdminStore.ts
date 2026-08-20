import { create } from 'zustand';
import axios from 'axios';
import { Company } from './useCompanyStore';

export interface GlobalSetting {
    key: string;
    value: string;
    type: string;
    label: string;
}

interface SuperAdminStats {
    total_empresas: number;
    activas: number;
    mrr: number;
    ventas_hoy: number;
    churn_rate: number;
    total_usuarios: number;
    total_productos: number;
}

export interface SunatLog {
    id: number;
    empresa_id: number;
    sale_id: number | null;
    tipo_comprobante: string | null;
    serie_correlativo: string | null;
    codigo_error: string | null;
    mensaje: string | null;
    payload: any | null;
    status: string;
    created_at: string;
    empresa?: Company;
}

interface SuperAdminState {
    empresas: Company[];
    admins: any[];
    sunatLogs: SunatLog[];
    meta: { current_page: number; last_page: number; total: number; per_page: number; from: number; to: number } | null;
    stats: SuperAdminStats | null;
    settings: GlobalSetting[];
    loading: boolean;
    isEmpresasLoaded: boolean;
    isAdminsLoaded: boolean;
    setPage: (page: number) => void;
    setPerPage: (perPage: number) => void;
    isStatsLoaded: boolean;
    isSettingsLoaded: boolean;
    fetchEmpresas: (page?: number, perPage?: number) => Promise<void>;
    fetchAdmins: () => Promise<void>;
    createAdmin: (data: any) => Promise<void>;
    deleteAdmin: (id: number) => Promise<void>;
    fetchStats: () => Promise<void>;
    fetchSunatLogs: () => Promise<void>;
    fetchSettings: () => Promise<void>;
    updateSettings: (settings: GlobalSetting[]) => Promise<void>;
    toggleStatus: (empresaId: number) => Promise<void>;
    changePlan: (empresaId: number, plan_type: string) => Promise<void>;
    createEmpresa: (data: any) => Promise<void>;
    updateEmpresa: (empresaId: number, data: any) => Promise<void>;
    deleteEmpresa: (empresaId: number) => Promise<void>;
}

export const useSuperAdminStore = create<SuperAdminState>((set, get) => ({
    empresas: [],
    admins: [],
    sunatLogs: [],
    meta: null,
    stats: null,
    settings: [],
    loading: false,
    isEmpresasLoaded: false,
    isAdminsLoaded: false,
    isStatsLoaded: false,
    isSettingsLoaded: false,
    fetchAdmins: async () => {
        set({ loading: true });
        try {
            const { data } = await axios.get('/api/v1/superadmin/admins');
            set({ admins: data, isAdminsLoaded: true, loading: false });
        } catch (e) {
            console.error(e);
            set({ loading: false });
        }
    },
    createAdmin: async (payload) => {
        try {
            await axios.post('/api/v1/superadmin/admins', payload);
            get().fetchAdmins();
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    deleteAdmin: async (id) => {
        try {
            await axios.delete(`/api/v1/superadmin/admins/${id}`);
            get().fetchAdmins();
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    fetchSettings: async () => {
        try {
            const { data } = await axios.get('/api/v1/superadmin/settings');
            set({ settings: data, isSettingsLoaded: true });
        } catch (e) {
            console.error(e);
        }
    },
    updateSettings: async (settings) => {
        try {
            await axios.post('/api/v1/superadmin/settings', { settings });
            set({ settings });
            get().fetchStats();
        } catch (e) {
            console.error(e);
        }
    },
    setPage: (page) => {
        const meta = get().meta;
        get().fetchEmpresas(page, meta ? meta.per_page : 10);
    },
    setPerPage: (perPage) => {
        get().fetchEmpresas(1, perPage);
    },
    fetchEmpresas: async (page = 1, perPage = 10) => {
        set({ loading: true });
        try {
            const { data } = await axios.get(`/api/v1/superadmin/empresas?page=${page}&per_page=${perPage}`);
            // Assuming data is paginated from backend
            set({ 
                empresas: data.data || data, 
                meta: data.current_page ? {
                    current_page: data.current_page,
                    last_page: data.last_page,
                    total: data.total,
                    per_page: data.per_page,
                    from: data.from,
                    to: data.to
                } : null,
                loading: false, 
                isEmpresasLoaded: true 
            });
        } catch (e) {
            console.error(e);
            set({ loading: false });
        }
    },
    fetchStats: async () => {
        try {
            const { data } = await axios.get('/api/v1/superadmin/stats');
            set({ stats: data, isStatsLoaded: true });
        } catch (e) {
            console.error(e);
        }
    },
    fetchSunatLogs: async () => {
        try {
            const { data } = await axios.get('/api/v1/superadmin/sunat-logs');
            set({ sunatLogs: data });
        } catch (e) {
            console.error(e);
        }
    },
    toggleStatus: async (empresaId) => {
        try {
            const { data } = await axios.put(`/api/v1/superadmin/empresas/${empresaId}/toggle-status`);
            set(state => ({
                empresas: state.empresas.map(emp => emp.id === empresaId ? data.empresa : emp)
            }));
            get().fetchStats(); // Update stats when status changes
        } catch (e) {
            console.error(e);
        }
    },
    changePlan: async (empresaId, plan_type) => {
        try {
            const { data } = await axios.put(`/api/v1/superadmin/empresas/${empresaId}/change-plan`, { plan_type });
            set(state => ({
                empresas: state.empresas.map(emp => emp.id === empresaId ? data.empresa : emp)
            }));
            get().fetchStats(); // Update stats when plan changes
        } catch (e) {
            console.error(e);
        }
    },
    createEmpresa: async (payload) => {
        try {
            await axios.post('/api/v1/superadmin/empresas', payload);
            const meta = get().meta;
            if (meta) {
                get().fetchEmpresas(meta.current_page, meta.per_page);
            } else {
                get().fetchEmpresas();
            }
            get().fetchStats();
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    updateEmpresa: async (empresaId, payload) => {
        try {
            await axios.put(`/api/v1/superadmin/empresas/${empresaId}`, payload);
            const meta = get().meta;
            if (meta) {
                get().fetchEmpresas(meta.current_page, meta.per_page);
            } else {
                get().fetchEmpresas();
            }
            get().fetchStats();
        } catch (e) {
            console.error(e);
            throw e;
        }
    },
    deleteEmpresa: async (empresaId) => {
        try {
            await axios.delete(`/api/v1/superadmin/empresas/${empresaId}`);
            const meta = get().meta;
            if (meta) {
                get().fetchEmpresas(meta.current_page, meta.per_page);
            } else {
                get().fetchEmpresas();
            }
            get().fetchStats();
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}));
