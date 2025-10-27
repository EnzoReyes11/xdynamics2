import { getPermalink } from './utils/permalinks';
import { site_content } from './content/constants';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Quienes somos',
      href: getPermalink('/quienes-somos'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [{ text: 'Whatsapp', 
    icon: 'tabler:brand-whatsapp',
    href: `https://wa.me/${site_content.contact.whatsapp.number}?text=${encodeURIComponent(site_content.contact.whatsapp.message)}`, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Empresa',
      links: [
        { 
          text: 'Quienes somos', 
          href: getPermalink('/quienes-somos')
        },
        {
          text: 'Contacto', 
          href: getPermalink('/contacto')
        },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: site_content.social.twitter },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: site_content.social.instagram },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: site_content.social.facebook },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: `https://wa.me/${site_content.contact.whatsapp.number}?text=${encodeURIComponent(site_content.contact.whatsapp.message)}`},
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="http://www.enzoreyes.dev"> Enzo Reyes</a> · All rights reserved.
  `,
};
