import AgencyFaq from "@components/agencyNewHome/AgencyFaq";
import AgencyHero from "@components/agencyNewHome/AgencyHero";
import AgencyHowItWork from "@components/agencyNewHome/AgencyHowItWork";
import AgencyIntegration from "@components/agencyNewHome/AgencyIntegration";
import AgencyLogo from "@components/agencyNewHome/AgencyLogo";
import AgencyNewsBlog from "@components/agencyNewHome/AgencyNewsBlog";
import AgencyNewsletter from "@components/agencyNewHome/AgencyNewsletter";
import AgencyPricing from "@components/agencyNewHome/AgencyPricing";
import AgencyService from "@components/agencyNewHome/AgencyService";
import AgencyTestimonials from "@components/agencyNewHome/AgencyTestimonials";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const Agency = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <AgencyHero />
        <AgencyLogo />
        <AgencyHowItWork />
        <AgencyService />
        <AgencyTestimonials />
        <AgencyIntegration />
        <AgencyNewsBlog />
        <AgencyPricing />
        <AgencyFaq />
        <AgencyNewsletter />

        <Footer
          style={{
            background: "url('/page-header-bg.svg')no-repeat bottom right",
          }}
        />
      </Layout>
    </>
  );
};

export default Agency;
