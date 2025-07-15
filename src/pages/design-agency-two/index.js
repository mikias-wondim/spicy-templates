import DesignAgencyTwoAbout from "@components/designAgencyTwo/DesignAgencyTwoAbout";
import DesignAgencyTwoBlog from "@components/designAgencyTwo/DesignAgencyTwoBlog";
import DesignAgencyTwoFeedback from "@components/designAgencyTwo/DesignAgencyTwoFeedback";
import DesignAgencyTwoHero from "@components/designAgencyTwo/DesignAgencyTwoHero";
import DesignAgencyTwoIntegratin from "@components/designAgencyTwo/DesignAgencyTwoIntegratin";
import DesignAgencyTwoPorfolio from "@components/designAgencyTwo/DesignAgencyTwoPorfolio";
import DesignAgencyTwoPricing from "@components/designAgencyTwo/DesignAgencyTwoPricing";
import DesignAgencyTwoService from "@components/designAgencyTwo/DesignAgencyTwoService";
import DesignAgencyTwoSubscribe from "@components/designAgencyTwo/DesignAgencyTwoSubscribe";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const DesignAgencyTwo = () => {
  return (
    <Layout>
      <Navbar />
      <DesignAgencyTwoHero />
      <DesignAgencyTwoAbout />
      <DesignAgencyTwoService />
      <DesignAgencyTwoFeedback />
      <DesignAgencyTwoPorfolio />
      <DesignAgencyTwoPricing />
      <DesignAgencyTwoIntegratin />
      <DesignAgencyTwoSubscribe />
      <DesignAgencyTwoBlog />
      <Footer
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default DesignAgencyTwo;
