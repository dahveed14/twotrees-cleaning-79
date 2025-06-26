
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationDropdownProps {
  label: string;
  items: Array<{ name: string; href: string }>;
}

export const NavigationDropdown = ({ label, items }: NavigationDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-gray-700 hover:text-two-trees-green transition-colors flex items-center gap-1">
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
        {items.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link 
              to={item.href} 
              className="text-gray-700 hover:text-two-trees-green hover:bg-gray-50 px-4 py-2 block"
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
