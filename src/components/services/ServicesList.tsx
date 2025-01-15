import { ServiceDetail } from '@/types/services';
import * as Icons from 'lucide-react';
import { LucideIcon, ChevronDown, ChevronRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

interface ServicesListProps {
  services: ServiceDetail[];
  activeService: ServiceDetail;
  onServiceClick: (service: ServiceDetail) => void;
}

const ServicesList = ({ services, activeService, onServiceClick }: ServicesListProps) => {
  const renderIcon = (iconName: keyof typeof Icons) => {
    const LucideIcon = Icons[iconName] as LucideIcon;
    return <LucideIcon className="w-5 h-5 md:w-6 md:h-6" />;
  };

  const handleServiceClick = (service: ServiceDetail) => {
    if (service.id !== activeService.id) {
      onServiceClick(service);
    }
  };

  // Versión móvil con dropdown
  const MobileMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full lg:hidden flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2">
          {renderIcon(activeService.iconName)}
          <span className="font-medium">{activeService.title}</span>
        </div>
        <ChevronDown className="w-5 h-5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-[calc(100vw-2rem)] lg:hidden bg-white border border-gray-100 shadow-lg"
        align="start"
        sideOffset={5}
      >
        {services.map((service) => (
          service.hasSubmenus && service.submenuContent ? (
            <DropdownMenuSub key={service.id}>
              <DropdownMenuSubTrigger className="flex items-center gap-2 p-3 hover:bg-gray-50">
                {renderIcon(service.iconName)}
                <span>{service.title}</span>
                <ChevronRight className="ml-auto h-4 w-4" />
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="bg-white p-1 shadow-lg">
                {Object.entries(service.submenuContent).map(([key, content]) => (
                  <DropdownMenuItem
                    key={key}
                    className="flex items-center gap-2 p-3 hover:bg-gray-50"
                    onClick={() => handleServiceClick(service)}
                  >
                    {renderIcon(content.iconName)}
                    <div className="flex flex-col">
                      <span className="font-medium">{content.title}</span>
                      <span className="text-xs text-gray-500">{content.description}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          ) : (
            <DropdownMenuItem
              key={service.id}
              className="flex items-center gap-2 p-3 hover:bg-gray-50"
              onClick={() => handleServiceClick(service)}
            >
              {renderIcon(service.iconName)}
              <span>{service.title}</span>
            </DropdownMenuItem>
          )
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  // Versión desktop con lista
  const DesktopMenu = () => (
    <ul className="hidden lg:flex flex-col gap-2">
      {services.map((service) => (
        <li
          key={service.id}
          className={`
            flex items-center p-3 rounded-lg cursor-pointer 
            transition-all duration-300 hover:scale-105
            ${
              activeService.id === service.id
                ? 'bg-primary/10 text-primary shadow-md'
                : 'hover:bg-gray-100'
            }
          `}
          onClick={() => handleServiceClick(service)}
        >
          <div className={`mr-3 ${
            activeService.id === service.id ? 'text-primary' : 'text-gray-600'
          }`}>
            {renderIcon(service.iconName)}
          </div>
          <span className={`
            ${activeService.id === service.id ? 'font-semibold' : ''}
          `}>
            {service.title}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <MobileMenu />
      <DesktopMenu />
    </div>
  );
};

export default ServicesList;