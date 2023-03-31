import { HiPhoneArrowUpRight } from "react-icons/hi2";
import { AiOutlineWhatsApp } from "react-icons/ai";

export const navigationLinks = [
  { title: 'Productos', link: '/productos' },
  { title: 'Nosotros', link: '/nosotros' },
  { title: '+ 52 (55) 5555 5555', link: 'tel:(55) 55555555', icon: <HiPhoneArrowUpRight /> },
  {
    title: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=15521288107',
    icon: <AiOutlineWhatsApp />
  },
];
