import ItCompanyAbout from "@components/itCompany/ItCompanyAbout";
import ItCompanyFaq from "@components/itCompany/ItCompanyFaq";
import ItCompanyFeature from "@components/itCompany/ItCompanyFeature";
import ItCompanyFooter from "@components/itCompany/ItCompanyFooter";
import ItCompanyHero from "@components/itCompany/ItCompanyHero";
import ItCompanyProject from "@components/itCompany/ItCompanyProject";
import ItCompanySupport from "@components/itCompany/ItCompanySupport";
import ItCompanySupportTwo from "@components/itCompany/ItCompanySupportTwo";
import ItCompanyTeam from "@components/itCompany/ItCompanyTeam";
import ItCompanyTestimonial from "@components/itCompany/ItCompanyTestimonial";
import IteCompanyServices from "@components/itCompany/IteCompanyServices";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <Layout>
      <Navbar navDark itCompany />
      <ItCompanyHero />
      <ItCompanyAbout />
      <IteCompanyServices />
      <ItCompanySupport />
      <ItCompanyTeam />
      <ItCompanyProject />
      <ItCompanyFeature />
      <ItCompanySupportTwo />
      <ItCompanyTestimonial />
      <ItCompanyFaq />
      <ItCompanyFooter />
    </Layout>
  );
};

export default index;
