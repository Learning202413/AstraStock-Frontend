import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "sonner";

interface UseEntityDeleteOptions {
  entityName: string;
  endpoint: string;
  onSuccess?: (id: number) => void;
}

interface EntityDeleteState<T> {
  entityToDelete: T | null;
  isDeleting: boolean;
  setEntityToDelete: (entity: T | null) => void;
  handleDelete: () => Promise<void>;
}

export function useEntityDelete<T extends { id: number; name?: string }>({
  entityName,
  endpoint,
  onSuccess,
}: UseEntityDeleteOptions): EntityDeleteState<T> {
  const [entityToDelete, setEntityToDelete] = useState<T | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = useCallback(async () => {
    if (!entityToDelete) return;

    setIsDeleting(true);
    try {
      await axios.delete(`${endpoint}/${entityToDelete.id}`);
      toast.success(`${entityName} eliminado correctamente`);
      onSuccess?.(entityToDelete.id);
      setEntityToDelete(null);
    } catch (err: any) {
      toast.error(err.response?.data?.message || `Error al eliminar ${entityName.toLowerCase()}`);
    } finally {
      setIsDeleting(false);
    }
  }, [entityToDelete, endpoint, entityName, onSuccess]);

  return { entityToDelete, isDeleting, setEntityToDelete, handleDelete };
}
