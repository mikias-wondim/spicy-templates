import DesignAgencyBlog from "@components/designAgencyOne/DesignAgencyBlog";
import DesignAgencyDesignSowcase from "@components/designAgencyOne/DesignAgencyDesignSowcase";
import DesignAgencyOneAbout from "@components/designAgencyOne/DesignAgencyOneAbout";
import DesignAgencyOneFeedback from "@components/designAgencyOne/DesignAgencyOneFeedback";
import DesignAgencyOneHero from "@components/designAgencyOne/DesignAgencyOneHero";
import DesignAgencyOneIntegration from "@components/designAgencyOne/DesignAgencyOneIntegration";
import DesignAgencyOnePricing from "@components/designAgencyOne/DesignAgencyOnePricing";
import DesignAgencyService from "@components/designAgencyOne/DesignAgencyService";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const DesignAgencyOne = () => {
  return (
    <>
      <Layout>
        <Navbar navDark />
        <DesignAgencyOneHero />
        <DesignAgencyOneAbout />
        <DesignAgencyService />
        <DesignAgencyDesignSowcase />
        <DesignAgencyOneIntegration />
        <DesignAgencyOnePricing />
        <DesignAgencyOneFeedback />
        <DesignAgencyBlog />
        <Footer
          style={{
            background: "url('/page-header-bg.svg')no-repeat bottom right",
          }}
        />
      </Layout>
    </>
  );
};

export default DesignAgencyOne;
