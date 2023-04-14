import { HiPhoneArrowUpRight } from "react-icons/hi2";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const navigationLinks = [
  {
    title: 'Productos',
    link: '',
    sublinks: [
      { title: 'GarantiAuto', link: '/productos' },
      { title: 'GarantiRevisa', link: '/ServiciosDeRevision' },
      // { title: 'GarantiPutazos', link: '/producto-3' }
    ],
  },
  { title: 'Nosotros', link: '/nosotros' },
  { title: '+ 52 (55)33124708', link: 'tel:(55)33124708', icon: <HiPhoneArrowUpRight /> },
  {
    title: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=15533124708',
    icon: <AiOutlineWhatsApp />
  },
];
