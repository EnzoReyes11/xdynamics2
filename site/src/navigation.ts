import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { site_content } from './content/constants';


const contacts = {
  'whatsapp': {
    'number': '5491135866271',
    'message': 'Hola, me interesa conocer más sobre los servicios de XDYNAMIS.'
  }
}

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
    href: `https://wa.me/${contacts.whatsapp.number}?text=${encodeURIComponent(contacts.whatsapp.message)}`, target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Empresa',
      links: [
        { text: 'Quienes somos', href: '/quienes-somos' },
        { text: 'Contacto', href: '/contacto' },
      ],
    },
    {
      title: 'Términos',
      links: [
        { text: 'Términos y condiciones', href: getPermalink('/terminos')},
        { text: 'Politica de Privacidad', href: getPermalink('/privacidad') },
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
