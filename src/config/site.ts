/* import logoBranco from '../assets/Logo-branco.png';
import logoPreto from '../assets/Logo-preto.png';
import iconePreto from '../assets/icone-preto.png';
import quadroEletrico from '../assets/quadro-eletrico.webp'; */

export const siteConfig = {
  name: 'Adriano Lopes',
  shortName: 'Nome da Empresa',

  phone: '+351 937428722',
  phoneLink: 'tel:+351937428722',

  email: 'adriano.works25@gmail.com',
  emailLink: 'mailto:adriano.works25@gmail.com',

  address: {
    street: 'Rua primeiro de Dezembro nº 12',
    postalCode: '4700-732',
    city: 'Palmeira - Braga',
    country: 'Portugal',
  },

  get fullAddress() {
    return `${this.address.street}, ${this.address.postalCode} ${this.address.city}, ${this.address.country}`;
  },

  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Exemplo+123,+4000-000+Porto',

  schedule: {
    weekdays: 'Segunda a Sexta: 08:00–17:00',
    saturday: 'Sábado: Por marcação',
    sunday: 'Domingo: Encerrado',
  },

/*   images: {
    logoWhite: logoBranco,
    logoDark: logoPreto,
    iconDark: iconePreto,
    heroBackground: quadroEletrico,
  }, */
};
