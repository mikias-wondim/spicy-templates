import AiContentGeneratorCta from "@components/aiContentGenerator/AiContentGeneratorCta";
import AiContentGeneratorFeedback from "@components/aiContentGenerator/AiContentGeneratorFeedback";
import AiContentGeneratorFooter from "@components/aiContentGenerator/AiContentGeneratorFooter";

import AiContentGeneratorHero from "@components/aiContentGenerator/AiContentGeneratorHero";
import AiContentGeneratorInfocard from "@components/aiContentGenerator/AiContentGeneratorInfocard";
import AiContentGeneratorIntegration from "@components/aiContentGenerator/AiContentGeneratorIntegration";
import AiContentGeneratorLogo from "@components/aiContentGenerator/AiContentGeneratorLogo";
import AiContentGeneratorPricing from "@components/aiContentGenerator/AiContentGeneratorPricing";
import AiContentGeneratorTab from "@components/aiContentGenerator/AiContentGeneratorTab";
import AiContentGeneratorWork from "@components/aiContentGenerator/AiContentGeneratorWork";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <Layout>
      <Navbar />
      <AiContentGeneratorHero />
      <AiContentGeneratorLogo />
      <AiContentGeneratorTab />
      <AiContentGeneratorInfocard />
      <AiContentGeneratorWork />
      <AiContentGeneratorIntegration />
      <AiContentGeneratorFeedback />
      <AiContentGeneratorPricing />
      <AiContentGeneratorCta />
      <AiContentGeneratorFooter />
    </Layout>
  );
};

export default index;
