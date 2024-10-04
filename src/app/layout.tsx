import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import ClientComponents from '@/components/ClientComponents'


export const metadata: Metadata = {
  title: 'Observatorio tecnológico - USS',
  description: 'Somos una unidad de prospectiva educativa y tecnológica, que busca generar conocimiento y desarrollar capacidades para la toma de decisiones en el ámbito de la educación y la tecnología.',
  icons: {
    icon: '/img/favicon.png',
  },
  keywords: ['observatorio',
    'tecnológico',
    'educación',
    'tecnología',
    'innovación',
    'educativa',
    'prospectiva',
    'tecnológica',
    'universidad',
    'señor',
    'sipan',
    'uss',
    'chiclayo',
    'perú',
    'aprendizaje',
    'investigación',
    'desarrollo',
    'tecnológico',
    'estrategia',
    'formación',
    'digital',
    'elearning',
    'educación superior',
    'tecnologías de la información',
    'enseñanza',
    'aprendizaje',
    'plataforma',
    'online',
    'educación virtual',
    'transformación digital',
    'educación a distancia',
    'tecnología educativa',
    'innovación educativa',
    'tecnologías emergentes',
    'enseñanza virtual',
    'aprendizaje electrónico',
    'aprendizaje virtual',
    'formación online',
    'plataforma educativa',
    'recursos educativos digitales',
    'Ciencia y tecnología',
    'Investigación científica',
    'Recursos educativos',
    'Podcasts científicos',
    'Videos científicos',
    'Inteligencia artificial',
    'Machine learning',
    'Big data',
    'Robótica',
    'Internet de las cosas (IoT)',
    'Cambio climático',
    'Salud global',
    'Educación STEM',
    'vigilancia tecnológica',
    'vigilancia tecnológica',
    'vigilancia tecnológica e inteligencia competitiva',
    'inteligencia tecnológica',
    'Ciencia',
    'Tecnología',
    'Sociedad',
    'Progreso',
    'Desarrollo',
    'Interdependencia',
    'Actividad humana',
    'Conocimiento',
    'Productos',
    'Servicios',
    'Herramientas',
    'Necesidades humanas',
    'Desarrollo humano',
    'Transformación social',
    'Futuro',
    'investigacion cientifica ejemplos',
    'ejemplos de investigacion cientifica',
    'investigación científica ejemplos',
    'porque es importante la investigacion',
    'que es la investigacion cientifica pdf',
    'investigación cientifica pdf',
    'investigación tecnológica',
    'investigacion tecnologica',
    'características de la investigación científica',
    'características de una investigación científica',
    'caracteristicas de investigacion cientifica',
    'caracteristicas de la investigacion cientifica',
    'características de investigación científica',
    'importancia de la investigación',
    'importancia de la investigacion',
    'la importancia de la investigación',
    'importancia de la investigación científica',
    'investigación científica pdf',
    'la importancia de la investigación científica',
    'investigaciones cientificas pdf',
    'investigacion cientifica pdf',
    'la investigación científica pdf',
    'que es investigacion cientifica pdf',
    'que es investigación científica pdf',
    'que es la investigación científica pdf',
    'importancia de la investigacion cientifica',
    'investigación experimental',
    'tipos de investigación científica',
    'tipos de investigacion cientifica',
    'tipo de investigación científica',
    'tipos de investigación metodología',
    'que es una investigación científica',
    'investigacion cientifica que es',
    'que es investigación científica',
    'investigación cientifica que es',
    'investigacion experimental',
    'la investigacion cientifica',
    'la investigación científica',
    'qué es la investigación científica',
    'que es investigacion cientifica',
    'que es la investigacion cientifica',
    'tipo de investigación',
    'tipo de investigacion',
    'tipos de investigación',
    'investigacion cientifica',
    'investigación cientifica',
    'vigilancia tecnológica',
    'vigilancia tecnologica',
    'vigilancia tecnologica e inteligencia competitiva',
    'inteligencia tecnologica',
    'recurso educativo digital',
    'recursos digitales educativos',
    'recurso digital educativo',
    'recursos educativos digitales',
    'recursos didacticos primaria',
    'recursos didácticos primaria',
    'material educativo para secundaria',
    'materiales educativos para secundaria',
    'material didáctico para primaria',
    'recursos educativos y fichas para imprimir y descargar',
    'que son recursos educativos',
    'recursos educativos que son',
    'recursos didácticos para secundaria',
    'recursos didacticos para secundaria',
    'que son recursos digitales',
    'material didáctico para primaria pdf',
    '10 recursos educativos digitales',
    'material didáctico gratis',
    'recursos educativos primaria',
    'ficha para imprimir',
    'fichas para imprimir',
    'recursos didacticos',
    'recursos didácticos',
    'recurso digital',
    'recursos digitales',
    'recursos didácticos secundaria',
    'recurso educativo',
    'fichas para imprimir primaria',
    'materiales educativos primaria',
    'material educativo primaria',
    'material educativo secundaria',
    'materiales educativos secundaria',
    'material educativo para primaria',
    'materiales educativos gratis',
    'fichas para primaria',
    'fichas educativas',
    'materiales educativos para primaria',
    'materiales y recursos educativos',
    'recursos educativos secundaria',],
  authors: [{
    name: 'Universidad Señor de Sipán',
    url: 'https://uss.edu.pe',
  }],
  applicationName: 'Observatorio tecnológico - USS',
  robots: 'index, follow',
  creator: 'DDA - USS',
  openGraph: {
    description: 'Somos una unidad de prospectiva educativa y tecnológica, que busca generar conocimiento y desarrollar capacidades para la toma de decisiones en el ámbito de la educación y la tecnología.',
    title: 'Observatorio tecnológico - USS',
    url: 'https://observatorio-tecnologico.uss.edu.pe',
    type: 'website',
    locale: 'es_PE',
    siteName: 'Observatorio tecnológico - USS',
    images: [
      {
        url: '/img/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Observatorio tecnológico - USS',
      },
    ],
    phoneNumbers: ['074 481610'],
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id='contentRead'>
          {children}
        </div>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></Script>
        <Script id="google-analytics">
          {process.env.NODE_ENV !== 'development' && `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script src="https://cdn-eu.readspeaker.com/script/13446/webReader/webReader.js?pids=wr" id="rs_req_Init"></Script>
      </body>
    </html>
  )
}
