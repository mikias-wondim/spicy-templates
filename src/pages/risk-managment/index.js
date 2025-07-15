import RiskManagmentBlog from "@components/riskManagment/RiskManagmentBlog";
import RiskManagmentCard from "@components/riskManagment/RiskManagmentCard";
import RiskManagmentContact from "@components/riskManagment/RiskManagmentContact";
import RiskManagmentCounter from "@components/riskManagment/RiskManagmentCounter";
import RiskManagmentCta from "@components/riskManagment/RiskManagmentCta";
import RiskManagmentFooter from "@components/riskManagment/RiskManagmentFooter";

import RiskManagmentHero from "@components/riskManagment/RiskManagmentHero";
import RiskManagmentService from "@components/riskManagment/RiskManagmentService";
import RiskManagmentServiceContent from "@components/riskManagment/RiskManagmentServiceContent";
import RiskManagmentServiceContentTwo from "@components/riskManagment/RiskManagmentServiceContentTwo";
import RiskManagementTestimonial from "@components/riskManagment/RiskManagmentTestimonial";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const RiskManagment = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <RiskManagmentHero />
        <RiskManagmentCard />
        <RiskManagmentService />
        <RiskManagmentCounter />
        <RiskManagmentServiceContent />
        <RiskManagmentServiceContentTwo />
        <RiskManagmentCta />
        <RiskManagmentContact />
        <RiskManagementTestimonial />
        <RiskManagmentBlog />
        <RiskManagmentFooter />
      </Layout>
    </>
  );
};

export default RiskManagment;
