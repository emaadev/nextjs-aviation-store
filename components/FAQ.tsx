import { IoMdArrowDropdown } from "react-icons/io";
import Accordion from "./ui/Accordion";

const FAQ = () => {
  return (
    <section className="mx-auto relative w-[80%] lg:w-[60%] flex flex-col justify-center items-center mb-[50px]">
      <div className="w-full bg-gray-200 h-[2px] mb-[40px]" />

      <article className="flex flex-col justify-center items-start">
        <div className="text-left mb-[10px]">
          <h2 className="font-bold text-3xl">Preguntas Frecuentes</h2>
          <p>
            Obtenga respuestas a las preguntas más habituales sobre nuestra
            tienda, productos y servicios para disfrutar de una experiencia de
            compra perfecta.
          </p>
        </div>

        <div className="mx-auto w-full">
          <Accordion
            title="¿Cómo puedo rastrear mi pedido?"
            content="Rastrear tu pedido es fácil y conveniente. Simplemente inicia sesión en tu cuenta, ve a tu historial de pedidos y selecciona el pedido que deseas rastrear. Encontrarás información detallada sobre el estado de tu envío, incluyendo las fechas estimadas de entrega y cualquier número de seguimiento proporcionado por el mensajero. Si tienes alguna pregunta o inquietud sobre el progreso de tu pedido, nuestro equipo de atención al cliente siempre está aquí para ayudarte."
          />

          <Accordion
            title="¿Cuál es su política de devolución?"
            content="Nuestra política de devolución está diseñada para garantizar tu satisfacción con cada compra. Si no estás completamente feliz con un artículo, puedes devolverlo dentro de los 30 días siguientes a la recepción para obtener un reembolso completo o un cambio. El producto debe estar en su estado original, con todas las etiquetas adjuntas y el embalaje intacto. Algunos artículos, como productos personalizados o bienes perecederos, pueden estar sujetos a restricciones específicas de devolución. Para un proceso de devolución sin problemas, por favor sigue las instrucciones proporcionadas en nuestro sitio web o contacta a nuestro soporte al cliente para obtener asistencia."
          />

          <Accordion
            title="¿Puedo obtener un descuento?"
            content="Ofrecemos varios descuentos y promociones a lo largo del año para proporcionar a nuestros clientes el mejor valor posible. Puedes mantenerte actualizado sobre nuestras últimas ofertas suscribiéndote a nuestro boletín de noticias, siguiéndonos en las redes sociales o consultando nuestro sitio web regularmente. Además, ofrecemos descuentos especiales para compradores por primera vez, compras al por mayor y durante eventos especiales como el Black Friday o el Cyber Monday. Si eres elegible para un descuento, puedes aplicar el código promocional en el momento del pago para disfrutar de los ahorros."
          />

          <Accordion
            title="¿Ofrecen envíos internacionales?"
            content="Sí, nos complace ofrecer envíos internacionales a muchos países alrededor del mundo. Las tarifas de envío y los tiempos de entrega varían según el destino y el peso de tu pedido. Puedes encontrar información detallada sobre las opciones y costos de envío internacional en el momento del pago o en nuestra página de información de envío. Ten en cuenta que los pedidos internacionales pueden estar sujetos a tarifas aduaneras e impuestos de importación, los cuales son responsabilidad del destinatario."
          />
        </div>
      </article>
    </section>
  );
};

export default FAQ;
