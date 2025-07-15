import AiContentGeneratorFooter from "@components/aiContentGenerator/AiContentGeneratorFooter";
import AiContentMarketingCta from "@components/aiContentMarketing/AiContentMarketingCta";
import AiContentMarketingEnhanced from "@components/aiContentMarketing/AiContentMarketingEnhanced";
import AiContentMarketingFaq from "@components/aiContentMarketing/AiContentMarketingFaq";
import AiContentMarketingFeedback from "@components/aiContentMarketing/AiContentMarketingFeedback";
import AiContentMarketingHero from "@components/aiContentMarketing/AiContentMarketingHero";
import AiContentMarketingInfocard from "@components/aiContentMarketing/AiContentMarketingInfocard";
import AiContentMarketingJourney from "@components/aiContentMarketing/AiContentMarketingJourney";
import AiContentMarketingPricing from "@components/aiContentMarketing/AiContentMarketingPricing";
import AiContentMarketingTestimonial from "@components/aiContentMarketing/AiContentMarketingTestimonial";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <Layout classOpt="ai-wt-body-bg">
      <Navbar />
      <AiContentMarketingHero />
      <AiContentMarketingInfocard />
      <AiContentMarketingJourney />
      <AiContentMarketingTestimonial />
      <AiContentMarketingEnhanced />
      <AiContentMarketingFeedback />
      <AiContentMarketingPricing />
      <AiContentMarketingCta />
      <AiContentMarketingFaq />

      <AiContentGeneratorFooter />
    </Layout>
  );
};

export default index;
