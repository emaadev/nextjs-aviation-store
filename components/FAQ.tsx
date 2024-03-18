/* eslint-disable react/no-unescaped-entities */
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
          <Accordion title="¿Cómo puedo realizar una compra?">
            <p className="text-gray-600">
              Para realizar una compra en nuestra tienda, sigue estos sencillos
              pasos:
              <br />
              <br />
              1. Navega por nuestra tienda y elige los productos que deseas
              comprar.
              <br />
              2. Añade los productos a tu carrito de compras haciendo clic en el
              botón "Añadir al carrito".
              <br />
              3. Una vez que hayas seleccionado todos los productos que deseas,
              ve a tu carrito de compras y revisa tu pedido.
              <br />
              4. Si estás satisfecho con tu selección, haz clic en el botón
              "Checkout" o "Finalizar compra".
              <br />
              5. Se te redirigirá a una página de checkout donde deberás
              ingresar tus datos de contacto y dirección de envío.
              <br />
              6. Elige tu método de pago preferido y confirma tu pedido.
              <br />
              7. Una vez que hayas completado el proceso de pago, recibirás una
              confirmación de tu compra y un enlace para enviar tu pedido
              directamente a nuestro WhatsApp.
              <br />
              8. Estaremos en contacto contigo para coordinar la entrega de tu
              pedido.
              <br />
              <br />
              Si tienes alguna pregunta o necesitas asistencia durante el
              proceso de compra, no dudes en contactarnos. Estamos aquí para
              ayudarte.
            </p>
          </Accordion>

          <Accordion title="Información de Envío">
            <p className="text-gray-600">
              En nuestra tienda, estamos comprometidos a brindarte la mejor
              experiencia de compra, y eso incluye ofrecerte un servicio de
              envío eficiente y confiable. A continuación, encontrarás
              información importante sobre nuestros envíos:
              <br />
              <br />
              1. <strong>Envíos a Todo el País:</strong> Realizamos envíos a
              todas las provincias y ciudades del país. No importa dónde te
              encuentres, puedes comprar nuestros productos y recibirlos en la
              comodidad de tu hogar.
              <br />
              2. <strong>Tiempo de Entrega:</strong> El tiempo de entrega puede
              variar dependiendo de tu ubicación. Una vez que realices tu
              compra, te proporcionaremos una estimación del tiempo de entrega.
              <br />
              3. <strong>Costos de Envío:</strong> Los costos de envío se
              calculan en función del peso del paquete y la distancia a
              recorrer. Puedes consultar el costo exacto de envío antes de
              finalizar tu compra.
              <br />
              4. <strong>Seguimiento de tu Pedido:</strong> Te proporcionaremos
              un número de seguimiento para que puedas monitorear el estado de
              tu envío en todo momento.
              <br />
              5. <strong>Empaque Seguro:</strong> Nos aseguramos de que todos
              los productos sean empacados cuidadosamente para protegerlos
              durante el transporte.
              <br />
              <br />
              Si tienes alguna pregunta sobre los envíos o necesitas asistencia,
              no dudes en contactarnos. Estamos aquí para ayudarte y asegurarnos
              de que tu experiencia de compra sea satisfactoria.
            </p>
          </Accordion>
        </div>
      </article>
    </section>
  );
};

export default FAQ;
