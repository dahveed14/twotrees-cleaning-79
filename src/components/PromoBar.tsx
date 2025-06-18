
import { X } from "lucide-react";

interface PromoBarProps {
  show: boolean;
  onClose: () => void;
}

export const PromoBar = ({ show, onClose }: PromoBarProps) => {
  if (!show) return null;

  return (
    <div className="bg-two-trees-gold text-two-trees-green py-3 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm md:text-base font-semibold">
          🎉 You unlocked $50 OFF your first cleaning! Use code <span className="font-bold">July50</span> at checkout. Book by July 31st to claim this special offer!
        </p>
      </div>
      <button 
        onClick={onClose}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-two-trees-green hover:text-two-trees-green/70 transition-colors"
        aria-label="Close promotional banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
