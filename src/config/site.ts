import logoBranco from '../assets/Logo-branco.png';
import logoPreto from '../assets/Logo-preto.png';
import quadroEletrico from '../assets/quadro-eletrico.webp';
import paineisSolares from '../assets/paineis-solares.webp';
import carregadoresWallbox from '../assets/Carregadores-wallbox.webp';
import electricidadeMoradia from '../assets/Electricidade-moradia.webp';
import contactos from '../assets/contactos.webp';
import obras from '../assets/obras-final.webp';
import sobreNos from '../assets/sobre-nos.webp';

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

  images: {
    logoWhite: logoBranco,
    logoDark: logoPreto,
    paineisSolares: paineisSolares,
    heroBackground: quadroEletrico,
    electricidadeMoradia: electricidadeMoradia,
    carregadoresWallbox: carregadoresWallbox,
    contactos: contactos,
    obras:obras,
    sobreNos: sobreNos
  },

  serviceAreas: [
    'Porto',
    'Maia',
    'Matosinhos',
    'Vila Nova de Gaia',
    'Valongo',
    'Gondomar',
    'Póvoa de Varzim',
    'Vila do Conde',
    'Braga',
    'Guimarães',
    'Famalicão',
    'Barcelos',
  ],
};
