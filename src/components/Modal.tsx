import { ColumnDef } from "@tanstack/react-table";
import { X } from "lucide-react";
import { DataTable } from "./DataTable";

interface ModalProps<TData> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  data: TData[];
  columns: ColumnDef<TData>[];
}

const Modal = <TData,>({
  isOpen,
  onClose,
  title,
  data,
  columns,
}: ModalProps<TData>) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg z-60 w-full max-w-4xl max-h-full overflow-y-auto">
      <div className="px-6 pt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <button onClick={onClose} className="text-black rounded-lg">
          <X size={22} />
        </button>
      </div>
      <div className="bg-white rounded-xl px-6 pb-6 max-h-[80vh] overflow-y-auto">
        <DataTable data={data} columns={columns} />
      </div>
    </div>
  </div>
  );
};

export default Modal;
