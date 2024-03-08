import { IoMdArrowDropdown } from "react-icons/io";
import Accordion from "./ui/Accordion";

const FAQ = () => {
  return (
    <section className="mx-auto relative w-[80%] flex flex-col justify-center items-center mb-[50px]">
      <div className="w-full bg-gray-200 h-[2px] mb-[40px]" />

      <article className="flex flex-col justify-center items-start">
        <div className="text-left mb-[10px]">
          <h2 className="font-bold text-3xl">FAQ Section</h2>
          <p>
            Get answers to common questions about our store, products, and
            services for a seamless shopping experience.
          </p>
        </div>

        <div className="mx-auto w-full">
          <Accordion
            title="How do I track my order?"
            content="Tracking your order is easy and convenient. Simply log in to your account, go to your order history, and select the order you wish to track. You'll find detailed information about the status of your shipment, including estimated delivery dates and any tracking numbers provided by the courier. If you have any questions or concerns about your order's progress, our customer service team is always here to help."
          />

          <Accordion
            title="What is your return policy?"
            content="Our return policy is designed to ensure your satisfaction with every purchase. If you're not completely happy with an item, you can return it within 30 days of receipt for a full refund or exchange. The product must be in its original condition, with all tags attached and packaging intact. Certain items, such as personalized products or perishable goods, may be subject to specific return restrictions. For a smooth return process, please follow the instructions provided on our website or contact our customer support for assistance."
          />

          <Accordion
            title="Can I get a discount?"
            content="We offer various discounts and promotions throughout the year to provide our customers with the best value possible. You can stay updated on our latest deals by subscribing to our newsletter, following us on social media, or checking our website regularly. Additionally, we offer special discounts for first-time buyers, bulk purchases, and during special events like Black Friday or Cyber Monday. If you're eligible for a discount, you can apply the promo code at checkout to enjoy the savings."
          />

          <Accordion
            title="Can I get a discount?"
            content="Yes, we are pleased to offer international shipping to many countries around the world. Shipping rates and delivery times vary depending on the destination and the weight of your order. You can find detailed information about international shipping options and costs at checkout or on our shipping information page. Please note that international orders may be subject to customs fees and import taxes, which are the responsibility of the recipient."
          />
        </div>
      </article>
    </section>
  );
};

export default FAQ;
