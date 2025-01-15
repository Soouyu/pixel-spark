import { LucideIcon } from 'lucide-react';

export interface ServiceDetail {
  id: string;
  title: string;
  iconName: keyof typeof import('lucide-react');
  content: string;
  hasSubmenus?: boolean;
  submenuContent?: {
    [key: string]: {
      title: string;
      description: string;
      iconName: keyof typeof import('lucide-react');
    };
  };
}

export const services: ServiceDetail[] = [
  {
    id: 'software',
    title: 'Desarrollo de software',
    iconName: 'Code',
    content: 'Soluciones de software personalizadas y escalables para impulsar su negocio.',
    hasSubmenus: true,
    submenuContent: {
      web: {
        title: "Desarrollo Web",
        description: "Creamos soluciones web modernas y escalables, desde páginas corporativas hasta aplicaciones web interactivas.",
        iconName: 'Globe'
      },
      exe: {
        title: "Software de Escritorio",
        description: "Desarrollamos software de escritorio personalizado, optimizado para rendimiento y funcionalidad.",
        iconName: 'Monitor'
      },
      app: {
        title: "Aplicaciones Móviles",
        description: "Construimos aplicaciones móviles nativas e híbridas que conectan a las empresas con sus clientes de forma eficiente.",
        iconName: 'Smartphone'
      }
    }
  },
  {
    id: 'marketing',
    title: 'Marketing Digital',
    iconName: 'Megaphone',
    content: 'Estrategias digitales innovadoras para potenciar tu presencia online.',
    hasSubmenus: true,
    submenuContent: {
      social: {
        title: "Redes Sociales",
        description: "Gestión profesional de redes sociales y creación de contenido viral.",
        iconName: 'Share2'
      },
      seo: {
        title: "SEO",
        description: "Optimización para motores de búsqueda y posicionamiento orgánico.",
        iconName: 'Search'
      },
      ads: {
        title: "Publicidad Digital",
        description: "Campañas publicitarias en Google Ads, Facebook Ads y más.",
        iconName: 'Target'
      }
    }
  },
  {
    id: 'design',
    title: 'Diseño Gráfico',
    iconName: 'Palette',
    content: 'Diseños creativos que capturan la esencia de tu marca.',
    hasSubmenus: true,
    submenuContent: {
      brand: {
        title: "Branding",
        description: "Diseño de identidad corporativa, logos y manuales de marca.",
        iconName: 'Brush'
      },
      print: {
        title: "Diseño Editorial",
        description: "Diseño de materiales impresos, revistas y catálogos.",
        iconName: 'FileText'
      },
      digital: {
        title: "Diseño Digital",
        description: "Diseño de interfaces, banners y contenido para redes sociales.",
        iconName: 'Image'
      }
    }
  },
  {
    id: 'automation',
    title: 'Automatización',
    iconName: 'Cog',
    content: 'Optimización de procesos empresariales mediante automatización inteligente.',
    hasSubmenus: true,
    submenuContent: {
      workflow: {
        title: "Flujos de Trabajo",
        description: "Automatización de procesos empresariales y flujos de trabajo.",
        iconName: 'GitBranch'
      },
      integration: {
        title: "Integraciones",
        description: "Conexión entre diferentes sistemas y aplicaciones empresariales.",
        iconName: 'Link'
      },
      bots: {
        title: "Bots y RPA",
        description: "Desarrollo de bots y automatización robótica de procesos.",
        iconName: 'Terminal'
      }
    }
  },
  {
    id: 'security',
    title: 'Ciberseguridad',
    iconName: 'Shield',
    content: 'Protección integral para tus activos digitales.',
    hasSubmenus: true,
    submenuContent: {
      audit: {
        title: "Auditoría",
        description: "Evaluación de vulnerabilidades y pruebas de penetración.",
        iconName: 'Search'
      },
      protection: {
        title: "Protección",
        description: "Implementación de sistemas de seguridad y firewalls.",
        iconName: 'Lock'
      },
      monitoring: {
        title: "Monitoreo",
        description: "Vigilancia continua y respuesta a incidentes de seguridad.",
        iconName: 'Eye'
      }
    }
  },
  {
    id: 'analytics',
    title: 'Análisis de Datos',
    iconName: 'BarChart',
    content: 'Transformación de datos en insights accionables.',
    hasSubmenus: true,
    submenuContent: {
      bi: {
        title: "Business Intelligence",
        description: "Dashboards interactivos y reportes personalizados.",
        iconName: 'PieChart'
      },
      bigdata: {
        title: "Big Data",
        description: "Procesamiento y análisis de grandes volúmenes de datos.",
        iconName: 'Database'
      },
      ml: {
        title: "Machine Learning",
        description: "Modelos predictivos y aprendizaje automático.",
        iconName: 'Brain'
      }
    }
  },
  {
    id: 'support',
    title: 'Soporte Técnico',
    iconName: 'Headphones',
    content: 'Asistencia técnica experta 24/7.',
    hasSubmenus: true,
    submenuContent: {
      helpdesk: {
        title: "Help Desk",
        description: "Soporte técnico de primer nivel y resolución de incidencias.",
        iconName: 'LifeBuoy'
      },
      maintenance: {
        title: "Mantenimiento",
        description: "Mantenimiento preventivo y correctivo de sistemas.",
        iconName: 'Wrench'
      },
      training: {
        title: "Capacitación",
        description: "Formación y capacitación técnica para usuarios.",
        iconName: 'GraduationCap'
      }
    }
  }
];