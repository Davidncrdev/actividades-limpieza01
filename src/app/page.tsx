'use client'
import './globals.css'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Menu, Phone, Mail, MapPin, CheckCircle, Star, ArrowRight, 
  Sparkles, Building2, Home as HomeIcon, HardHat, Heart, Shield, Clock, 
  Users, Quote, Send, MessageCircle, X, Facebook, Instagram,
   Linkedin, 
} from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ]

  const services = [
    {
      id: 'oficinas',
      title: 'Limpieza de Oficinas',
      description: 'Mantén el entorno laboral impecable con nuestros servicios de limpieza de oficinas. Mejora la productividad y la moral de los empleados.',
      icon: <Building2 className="w-8 h-8" />,
      features: ['Limpieza diaria/semanal', 'Desinfección completa', 'Limpieza de equipos', 'Mantenimiento de baños'],
      color: 'green'
    },
    {
      id: 'comunidades',
      title: 'Limpieza de Comunidades',
      description: 'Nuestros profesionales se encargarán de la limpieza y desinfección de su comunidad con el máximo cuidado.',
      icon: <span className="w-8 h-8"><HomeIcon /></span>,
      features: ['Zonas comunes', 'Escaleras y portales', 'Garajes', 'Jardines y patios'],
      color: 'blue'
    },
    {
      id: 'fin-obra',
      title: 'Limpieza Fin de Obra',
      description: 'Servicios especializados de limpieza post-construcción. Eliminación de residuos y limpieza profunda.',
      icon: <HardHat className="w-8 h-8" />,
      features: ['Eliminación de residuos', 'Limpieza profunda', 'Pulido de superficies', 'Limpieza de cristales'],
      color: 'green'
    },
    {
      id: 'cristales',
      title: 'Limpieza de Cristales',
      description: 'Crea un ambiente luminoso y acogedor con nuestro servicio especializado de limpieza de cristales.',
      icon: <Sparkles className="w-8 h-8" />,
      features: ['Técnicas profesionales', 'Acceso a alturas', 'Productos especializados', 'Resultados impecables'],
      color: 'blue'
    }
  ]

  const testimonials = [
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

  const faqs = [
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData)
    alert('Gracias por tu consulta. Te contactaremos pronto.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar con información de contacto */}
      <div className="bg-brand-green-600 text-white py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>692 381 424 / 642 118 972</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@actividadesdelimpieza.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Málaga y Costa del Sol</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="container flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-brand-green-500 to-brand-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">AL</span>
            </div>
            <div>
              <h1 className="font-bold text-lg lg:text-xl text-slate-900">
                Actividades de Limpieza
              </h1>
              <p className="text-xs text-slate-600 hidden lg:block">
                Servicios profesionales en Málaga
              </p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-brand-green-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green-600 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              className="btn-primary"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Presupuesto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="text-center pb-6 border-b">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-green-500 to-brand-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-2xl">AL</span>
                  </div>
                  <h2 className="font-bold text-lg">Actividades de Limpieza</h2>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-slate-700 hover:text-brand-green-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="pt-6 border-t space-y-4">
                  <Button 
                    className="btn-primary w-full"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Solicitar Presupuesto
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative overflow-hidden gradient-bg min-h-[90vh] flex items-center">
          {/* Elementos decorativos */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-green-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue-200/30 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contenido */}
              <div className="text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <Badge className="bg-brand-green-100 text-brand-green-700 hover:bg-brand-green-200 px-4 py-2">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Empresa líder en Málaga
                  </Badge>
                </div>

                {/* Título */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-slate-900">Servicios de</span>
                  <br />
                  <span className="gradient-text">Limpieza Profesional</span>
                  <br />
                  <span className="text-slate-700 text-2xl sm:text-3xl lg:text-4xl">en Málaga</span>
                </h1>

                {/* Subtítulo */}
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Ofrecemos servicios especializados de limpieza para oficinas, comunidades, 
                  fin de obra y cristales en Málaga y toda la Costa del Sol.
                </p>

                {/* Benefits */}
                <ul className="mb-8 space-y-3 text-left max-w-lg mx-auto lg:mx-0">
                  {[
                    'Servicio profesional certificado',
                    'Cobertura en toda la Costa del Sol',
                    'Presupuestos sin compromiso',
                    'Equipos y productos especializados'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    size="lg"
                    className="btn-primary group"
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Solicitar Presupuesto Gratis
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="btn-outline"
                    onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Ver Servicios
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-12 pt-8 border-t border-slate-200">
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-brand-green-600">10+</div>
                    <div className="text-sm text-slate-600">Años de experiencia</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-brand-blue-600">500+</div>
                    <div className="text-sm text-slate-600">Clientes satisfechos</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-brand-green-600">24/7</div>
                    <div className="text-sm text-slate-600">Disponibilidad</div>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green-100 to-brand-blue-100 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles className="w-20 h-20 text-brand-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Limpieza Profesional</h3>
                      <p className="text-slate-600">Resultados impecables garantizados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre-nosotros" className="py-20 lg:py-28 bg-cream-white relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-ocean-blue rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-mint-green rounded-full blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
              {/* Contenido principal */}
              <div className="space-y-8">
                <div>
                  <Badge className="bg-ocean-blue/10 text-ocean-blue hover:bg-ocean-blue/20 mb-6 px-4 py-2">
                    <Star className="w-4 h-4 mr-2" />
                    Sobre Nosotros
                  </Badge>
                  
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Expertos en limpieza profesional con{' '}
                    <span className="bg-gradient-to-r from-ocean-blue to-mint-green bg-clip-text text-transparent">
                      años de experiencia
                    </span>
                  </h2>
                  
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      En <strong className="text-ocean-blue">Actividades de Limpieza</strong> ofrecemos servicios especializados 
                      de limpieza y mantenimiento para oficinas, comunidades, locales comerciales, 
                      parkings y finalización de obras en <strong>Málaga y toda la Costa del Sol</strong>.
                    </p>

                    <p>
                      Atendemos a cada cliente de manera completamente personalizada, buscando 
                      en todo momento satisfacer sus necesidades con un trato comprometido, 
                      cercano y especializado.
                    </p>
                  </div>
                </div>

                {/* Features mejoradas */}
                <div className="space-y-4">
                  {[
                    'Servicio personalizado para cada cliente',
                    'Productos de limpieza ecológicos y certificados',
                    'Equipos profesionales de última generación',
                    'Cobertura completa en Málaga y Costa del Sol'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/50 transition-colors">
                      <div className="w-8 h-8 bg-mint-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-mint-green" />
                      </div>
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <Button className="bg-ocean-blue hover:bg-mint-green text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Solicitar Presupuesto Gratuito
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Values Cards mejoradas */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: 'Compromiso',
                    description: 'Mantenemos un trato comprometido y especializado en cada trabajo que realizamos.',
                    color: 'mint-green',
                    bgColor: 'mint-green/10',
                    hoverBg: 'mint-green/20'
                  },
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: 'Cercanía',
                    description: 'Tratamiento personalizado y cercano con todos nuestros clientes y proyectos.',
                    color: 'ocean-blue',
                    bgColor: 'ocean-blue/10',
                    hoverBg: 'ocean-blue/20'
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: 'Puntualidad',
                    description: 'Cumplimos siempre con los horarios acordados y plazos establecidos contigo.',
                    color: 'mint-green',
                    bgColor: 'mint-green/10',
                    hoverBg: 'mint-green/20'
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: 'Profesionalidad',
                    description: 'Equipo altamente cualificado con años de experiencia en el sector de limpieza.',
                    color: 'ocean-blue',
                    bgColor: 'ocean-blue/10',
                    hoverBg: 'ocean-blue/20'
                  }
                ].map((value, index) => (
                  <Card 
                    key={index} 
                    className={`group p-6 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
                  >
                    <CardContent className="p-0">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${value.bgColor} text-${value.color} group-hover:bg-${value.hoverBg} group-hover:scale-110 transition-all duration-300`}>
                        {value.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ocean-blue transition-colors">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                      
                      {/* Línea decorativa */}
                      <div className={`w-0 h-1 bg-gradient-to-r from-${value.color} to-transparent mt-4 group-hover:w-full transition-all duration-500`}></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Stats adicionales */}
            <div className="mt-20 pt-16 border-t border-gray-200/50">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { number: '500+', label: 'Clientes Satisfechos' },
                  { number: '5+', label: 'Años de Experiencia' },
                  { number: '24/7', label: 'Atención al Cliente' },
                  { number: '100%', label: 'Garantía de Calidad' }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-ocean-blue to-mint-green bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="section-padding gradient-bg">
          <div className="container">
            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-brand-green-100 text-brand-green-700 hover:bg-brand-green-200 mb-4">
                Nuestros Servicios
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 max-w-3xl mx-auto">
                Soluciones de limpieza profesional 
                <span className="gradient-text"> para cada necesidad</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ofrecemos servicios especializados de limpieza y mantenimiento con 
                la más alta calidad en Málaga y toda la Costa del Sol.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service) => (
                <Card key={service.id} className="service-card h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.color === 'green' 
                      ? 'bg-brand-green-100 text-brand-green-600 group-hover:bg-brand-green-600 group-hover:text-white' 
                      : 'bg-brand-blue-100 text-brand-blue-600 group-hover:bg-brand-blue-600 group-hover:text-white'
                  } transition-all duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full group hover:bg-slate-50"
                    onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Solicitar Información
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        
        <section id="testimonios" className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-brand-green-100 text-brand-green-700 hover:bg-brand-green-200 mb-4">
                Testimonios
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Lo que dicen nuestros 
                <span className="gradient-text"> clientes</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-brand-green-600 mb-4 opacity-50" />
                  
                  <p className="text-slate-600 mb-6 italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-brand-green-600">{testimonial.company}</div>
                  </div>`
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding gradient-bg">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-brand-blue-100 text-brand-blue-700 hover:bg-brand-blue-200 mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Preguntas 
                <span className="gradient-text"> frecuentes</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Resolvemos las dudas más comunes sobre nuestros servicios
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white border-0 rounded-2xl shadow-sm">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-left font-semibold text-slate-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Mantente informado de nuestros 
                <span className="gradient-text"> servicios</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Suscríbete a nuestro boletín para recibir consejos de limpieza, 
                ofertas especiales y novedades de nuestros servicios.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Tu email"
                  className="flex-grow"
                />
                <Button className="btn-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Suscribirse
                </Button>
              </div>
              
              <p className="text-sm text-slate-500 mt-4">
                No enviamos spam. Puedes darte de baja cuando quieras.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="section-padding gradient-bg">
          <div className="container">
            <div className="text-center mb-16">
              <Badge className="bg-brand-green-100 text-brand-green-700 hover:bg-brand-green-200 mb-4">
                Contacto
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Solicita tu 
                <span className="gradient-text"> presupuesto gratuito</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Contacta con nosotros y recibe un presupuesto personalizado sin compromiso
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">
                    Información de Contacto
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-brand-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Teléfonos</h4>
                        <p className="text-slate-600">692 381 424</p>
                        <p className="text-slate-600">642 118 972</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-brand-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                        <p className="text-slate-600">info@actividadesdelimpieza.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-brand-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Dirección</h4>
                        <p className="text-slate-600">Camino San Rafael, 22</p>
                        <p className="text-slate-600">29006, Málaga</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3">Zonas de Servicio</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                    {['Málaga', 'Rincón de la Victoria', 'Axarquía', 'Torremolinos', 'Benalmádena', 'Costa del Sol'].map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-green-600 flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Tipo de Servicio</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                      className="mt-1 w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="oficinas">Limpieza de Oficinas</option>
                      <option value="comunidades">Limpieza de Comunidades</option>
                      <option value="fin-obra">Limpieza Fin de Obra</option>
                      <option value="cristales">Limpieza de Cristales</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Cuéntanos más sobre tu proyecto..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-primary w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Consulta
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    * Campos obligatorios. Te contactaremos en menos de 24 horas.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo y descripción */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green-500 to-brand-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AL</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Actividades de Limpieza</h3>
                  <p className="text-slate-400 text-sm">Servicios profesionales en Málaga</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Empresa especializada en servicios de limpieza profesional para oficinas, 
                comunidades, fin de obra y cristales en Málaga y Costa del Sol.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-800">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-3 text-slate-300">
                <li><a href="#servicios" className="hover:text-white transition-colors">Limpieza de Oficinas</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Limpieza de Comunidades</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Limpieza Fin de Obra</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Limpieza de Cristales</a></li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>692 381 424</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@actividadesdelimpieza.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>Camino San Rafael, 22<br />29006, Málaga</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                ©Altura Creativa Agency 2025 - Actividades de Limpieza. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen ? (
          <Button
            onClick={() => setIsChatOpen(true)}
            size="lg"
            className="btn-primary rounded-full shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        ) : (
          <Card className="w-80 shadow-xl">
            <div className="bg-brand-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Chat de Soporte</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-brand-green-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-4">
              <div className="bg-slate-100 rounded-lg p-3 mb-4">
                <p className="text-sm text-slate-700">
                  ¡Hola! ¿En qué podemos ayudarte? Estamos aquí para resolver cualquier duda sobre nuestros servicios de limpieza.
                </p>
              </div>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-left justify-start"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Solicitar presupuesto
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-left justify-start"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar: 692 381 424
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-left justify-start"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}