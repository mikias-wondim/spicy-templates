import PaymentGatewayNewFaqOne from "@components/paymentGatewayNew/PaymentGatewayNewFaqOne";
import PaymentGatewayNewFaqTwo from "@components/paymentGatewayNew/PaymentGatewayNewFaqTwo";
import PaymentGatewayNewFooter from "@components/paymentGatewayNew/PaymentGatewayNewFooter";
import PaymentGatewayNewHero from "@components/paymentGatewayNew/PaymentGatewayNewHero";
import PaymentGatewayNewInfocard from "@components/paymentGatewayNew/PaymentGatewayNewInfocard";
import PaymentGatewayNewPayment from "@components/paymentGatewayNew/PaymentGatewayNewPayment";
import PaymentGatewayNewTestimonial from "@components/paymentGatewayNew/PaymentGatewayNewTestimonial";
import PaymentGatewayNewTools from "@components/paymentGatewayNew/PaymentGatewayNewTools";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pay-body-color">
        <PaymentGatewayNewHero />
        <PaymentGatewayNewPayment />
        <PaymentGatewayNewTools />
        <PaymentGatewayNewFaqOne />
        <PaymentGatewayNewInfocard />
        <PaymentGatewayNewTestimonial />
        <PaymentGatewayNewFaqTwo />
        <PaymentGatewayNewFooter />
      </div>
    </Layout>
  );
};

export default index;
