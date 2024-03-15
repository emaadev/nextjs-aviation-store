"use client";

import Button from "@/components/ui/Button";

interface WhatsAppCheckoutProps {
  products: any;
  disabled?: boolean;
  subtotal: number;
}

const WhatsAppCheckout = ({
  products,
  disabled,
  subtotal,
}: WhatsAppCheckoutProps) => {
  const phoneNumber = "+5491158734807";

  const generateWhatsAppLink = (products: any) => {
    const baseUrl = "https://wa.me/";
    const message = `*Hola, me gustaría finalizar la compra de los siguientes productos:*\n${products
      .map(
        (product: any) =>
          `- *${product.name}* (Cantidad: 1) - ARS $${product.price}
          ${product.description}`
      )
      .join("\n")}
        \n*Subtotal: ARS $${subtotal}*`;
    const encodedMessage = encodeURIComponent(message);

    return `${baseUrl}${phoneNumber}?text=${encodedMessage}`;
  };

  const handleClick = () => {
    const whatsappLink = generateWhatsAppLink(products);
    window.open(whatsappLink, "_blank");
  };

  return (
    <Button
      disabled={disabled}
      onClick={handleClick}
      className={`w-full bg-gray-900 text-white ${disabled && "opacity-40"}`}
    >
      Enviar Pedido por WhatsApp
    </Button>
  );
};

export default WhatsAppCheckout;
