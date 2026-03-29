import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertTriangle } from "lucide-react";

type DeleteModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  description: string;
  onDelete: () => void;
  deleteLoad?: boolean;
  buttonName?: string;
};

export function DeleteModal({
  open,
  onOpenChange,
  description,
  onDelete,
  deleteLoad,
  buttonName,
}: DeleteModalProps) {
  const getButtonText = () => {
    if (deleteLoad) return buttonName ? "Closing" : "Deleting...";
    return buttonName ?? "Delete";
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]  border-red-500  shadow-red-100 shadow-sm">
        <DialogTitle className="text-red-500 text-center">
          Are you sure?
        </DialogTitle>
        <div className="flex flex-col justify-center items-center mb-4">
          <AlertTriangle className="size-12 mb-3 text-red-500" />
          <p
            className="text-sm text-center"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant="outline"
            className="text-gray-500 border-gray-500 cursor-pointer"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-red-500 hover:bg-red-500 cursor-pointer"
            onClick={onDelete}
            disabled={deleteLoad}
          >
            {getButtonText()}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
