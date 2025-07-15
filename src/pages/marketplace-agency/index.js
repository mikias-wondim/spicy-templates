import MarketplaceAgencyCard from "@components/marketplaceAgency/MarketplaceAgencyCard";
import MarketplaceAgencyContact from "@components/marketplaceAgency/MarketplaceAgencyContact";
import MarketplaceAgencyDarkCard from "@components/marketplaceAgency/MarketplaceAgencyDarkCard";
import MarketplaceAgencyFaq from "@components/marketplaceAgency/MarketplaceAgencyFaq";
import MarketplaceAgencyFeedback from "@components/marketplaceAgency/MarketplaceAgencyFeedback";
import MarketplaceAgencyHero from "@components/marketplaceAgency/MarketplaceAgencyHero";
import MarketplaceAgencyLogo from "@components/marketplaceAgency/MarketplaceAgencyLogo";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <Layout>
      <Navbar />
      <MarketplaceAgencyHero />
      <MarketplaceAgencyCard />
      <MarketplaceAgencyLogo />
      <MarketplaceAgencyDarkCard />
      <MarketplaceAgencyFeedback />
      <MarketplaceAgencyContact />
      <MarketplaceAgencyFaq />
      <Footer
        style={{
          background: "url('/page-header-bg.svg')no-repeat bottom right",
        }}
      />
    </Layout>
  );
};

export default index;
