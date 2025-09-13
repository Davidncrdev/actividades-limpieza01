import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3')
}

export const services = [
  {
    id: 'oficinas',
    title: 'Limpieza de Oficinas',
    description: 'Mantén el entorno laboral impecable con nuestros servicios de limpieza de oficinas. Mejora la productividad y la moral de los empleados.',
    icon: '🏢',
    features: ['Limpieza diaria/semanal', 'Desinfección completa', 'Limpieza de equipos', 'Mantenimiento de baños'],
    color: 'green'
  },
  {
    id: 'comunidades',
    title: 'Limpieza de Comunidades',
    description: 'Nuestros profesionales se encargarán de la limpieza y desinfección de su comunidad con el máximo cuidado.',
    icon: '🏠',
    features: ['Zonas comunes', 'Escaleras y portales', 'Garajes', 'Jardines y patios'],
    color: 'blue'
  },
  {
    id: 'fin-obra',
    title: 'Limpieza Fin de Obra',
    description: 'Servicios especializados de limpieza post-construcción. Eliminación de residuos y limpieza profunda.',
    icon: '🏗️',
    features: ['Eliminación de residuos', 'Limpieza profunda', 'Pulido de superficies', 'Limpieza de cristales'],
    color: 'green'
  },
  {
    id: 'cristales',
    title: 'Limpieza de Cristales',
    description: 'Crea un ambiente luminoso y acogedor con nuestro servicio especializado de limpieza de cristales.',
    icon: '✨',
    features: ['Técnicas profesionales', 'Acceso a alturas', 'Productos especializados', 'Resultados impecables'],
    color: 'blue'
  }
]

export const areas = [
  'Málaga',
  'Rincón de la Victoria',
  'Axarquía',
  'Torremolinos',
  'Benalmádena',
  'Costa del Sol'
]

export const testimonials = [
  {
    name: 'María González',
    company: 'Administradora de Fincas',
    text: 'Excelente servicio. Siempre puntuales y muy profesionales. La comunidad está impecable desde que contratamos sus servicios.',
    rating: 5
  },
  {
    name: 'Carlos Ruiz',
    company: 'Director de Oficina',
    text: 'El equipo de Actividades de Limpieza ha transformado nuestro entorno laboral. Los empleados están más contentos y productivos.',
    rating: 5
  },
  {
    name: 'Ana Martín',
    company: 'Constructora Martín S.L.',
    text: 'Su servicio de fin de obra es excepcional. Dejan las viviendas perfectas para la entrega a los clientes.',
    rating: 5
  }
]

export const faqs = [
  {
    question: '¿En qué zonas de Málaga ofrecen servicios?',
    answer: 'Ofrecemos nuestros servicios en Málaga capital, Rincón de la Victoria, Axarquía, Torremolinos, Benalmádena y toda la Costa del Sol. Consúltanos para otras ubicaciones.'
  },
  {
    question: '¿Qué incluye el servicio de limpieza de oficinas?',
    answer: 'Incluye limpieza y desinfección de todas las superficies, vaciado de papeleras, limpieza de baños, aspirado de moquetas, fregado de suelos y limpieza de cristales interiores.'
  },
  {
    question: '¿Trabajan con productos ecológicos?',
    answer: 'Sí, utilizamos productos de limpieza ecológicos y certificados que son seguros para el medio ambiente y las personas.'
  },
  {
    question: '¿Ofrecen servicios de emergencia?',
    answer: 'Sí, contamos con servicio de limpieza de urgencia para situaciones especiales. Contáctanos y te daremos una respuesta inmediata.'
  },
  {
    question: '¿Cómo solicito un presupuesto?',
    answer: 'Puedes contactarnos a través del formulario web, llamar al 692 381 424 o enviar un email a info@actividadesdelimpieza.com. Te visitamos sin compromiso.'
  }
]