
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href?: string;
    current?: boolean;
  }>;
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className="bg-gray-50 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="flex items-center gap-1 text-two-trees-green hover:text-two-trees-green/80">
                <Home className="w-4 h-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {item.current ? (
                    <BreadcrumbPage className="text-gray-600">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink 
                      href={item.href} 
                      className="text-two-trees-green hover:text-two-trees-green/80"
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};
