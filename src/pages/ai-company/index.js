import AiCompanyComminute from "@components/aiCompany/AiCompanyCominute";
import AiCompanyFaq from "@components/aiCompany/AiCompanyFaq";
import AiCompanyFooter from "@components/aiCompany/AiCompanyFooter";
import AiCompanyHero from "@components/aiCompany/AiCompanyHero";
import AiCompanyInfocard from "@components/aiCompany/AiCompanyInfocard";
import AiCompanyInfocardLarge from "@components/aiCompany/AiCompanyInfocardLarge";
import AiCompanyLineSlider from "@components/aiCompany/AiCompanyLineSlider";
import AiCompanyLogSlider from "@components/aiCompany/AiCompanyLogSlider";
import AiCompanyPortfolio from "@components/aiCompany/AiCompanyPortfolio";
import AiCompanyPricing from "@components/aiCompany/AiCompanyPricing";
import AiCompanyProcess from "@components/aiCompany/AiCompanyProcess";
import AiCompanyTestimonial from "@components/aiCompany/AiCompanyTestimonial";
import AiCompnayLogoSlider from "@components/aiCompany/AiCompnayLogoSlider";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <>
      <Layout>
        <Navbar navDark />
        <AiCompanyHero />
        <AiCompanyInfocard />
        <AiCompanyInfocardLarge />
        <AiCompanyLogSlider />
        <AiCompanyPortfolio />
        <AiCompanyLineSlider />
        <AiCompanyProcess />
        <AiCompanyPricing />
        <AiCompanyTestimonial />
        <AiCompanyFaq />
        <AiCompanyComminute />
        <AiCompnayLogoSlider />
        <AiCompanyFooter />
      </Layout>
    </>
  );
};

export default index;
