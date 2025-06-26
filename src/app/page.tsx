
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Venta Online en 24 Horas" subheadline="Transforma tu negocio con nuestra web rápida y soporte 24/7 para aumentar tus ventas fácilmente." cta1="Comienza Ahora" />
<How step1Title="Descubre WebGo" step1Desc="Transforma ventas por recomendaciones a ventas digitales." step2Title="Configuración Express" step2Desc="Web de ventas lista en 24 horas." step3Title="Soporte Permanente" step3Desc="Acompañamos 24/7 para éxito online." />
<Aboutus headline="WebGo: Digitaliza tus ventas hoy" subheadline="Transformamos recomendaciones en ventas online sin que pierdas tiempo en gestión web." beneficiotitulo1="Ventas Aumentadas" beneficio1="Genera ventas online sin esfuerzo" beneficiotitulo2="Gestión Simplificada" beneficio2="Olvídate del manejo del sitio" />
<Services heading="Impulsa Tus Ventas Digitalmente" description="Hola te crea un sitio web en 24 horas, listo para vender online." services={[{"name":"Creación Rápida de Web","icon":"bolt","description":"Lanzamos tu web en solo 24 horas."},{"name":"Optimización SEO","icon":"chart-line","description":"Atrae más tráfico con SEO efectivo."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita las transacciones en línea."},{"name":"Diseño Personalizado","icon":"palette","description":"Refleja tu marca con un diseño único."},{"name":"Análisis de Rendimiento","icon":"chart-bar","description":"Mejora ventas con informes detallados."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en impresionantes realidades digitales." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar las ventas de mi negocio?","respuesta":"WebGo te ayuda a llevar tus ventas al mundo digital con precios accesibles como nuestro servicio Hola por solo 222. Nos encargamos de todo para que puedas enfocarte en lo que realmente importa: hacer crecer tu negocio."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué soluciones ofrece WebGo?","respuesta":"En WebGo entendemos que estás ocupado. Por eso, nos ocupamos de la gestión completa de tu sitio web, desde el diseño hasta el mantenimiento. Tú solo tienes que ver cómo tu negocio crece online."},{"pregunta":"¿Cuáles son los beneficios de vender online con WebGo?","respuesta":"Vender online con WebGo te permite alcanzar más clientes y aumentar tus ingresos. Ofrecemos herramientas fáciles de usar y soporte continuo, asegurando que tu transición al mundo digital sea fluida y exitosa."},{"pregunta":"No sé cómo generar ventas online, ¿puede WebGo asistirme en eso?","respuesta":"Por supuesto. WebGo no solo crea tu sitio web, sino que también te proporciona estrategias efectivas para atraer clientes online y convertir visitas en ventas. Estamos aquí para guiarte en cada paso del camino."},{"pregunta":"¿Es caro digitalizar mi negocio con WebGo?","respuesta":"¡Para nada! Tenemos opciones para todos los presupuestos, como nuestro servicio Hola por solo 222. WebGo ofrece soluciones asequibles para que cualquier pequeño negocio pueda empezar a vender online sin complicaciones."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Santiago" 
                      description="Hola, digitaliza tus ventas con WebGo por solo 222. Aumenta tus ventas online sin complicaciones."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
