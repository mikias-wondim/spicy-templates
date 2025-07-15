import AiImageCompanion from "@components/aiImageGeneration/AiImageCompanion";
import AiImageGenerationArt from "@components/aiImageGeneration/AiImageGenerationArt";
import AiImageGenerationCommunity from "@components/aiImageGeneration/AiImageGenerationCommunity";
import AiImageGenerationCta from "@components/aiImageGeneration/AiImageGenerationCta";
import AiImageGenerationFooter from "@components/aiImageGeneration/AiImageGenerationFooter";
import AiImageGenerationHero from "@components/aiImageGeneration/AiImageGenerationHero";
import AiImageGenerationInfocard from "@components/aiImageGeneration/AiImageGenerationInfocard";
import AiImageGenerationLogoSlider from "@components/aiImageGeneration/AiImageGenerationLogoSlider";
import AiImageGenerationPlaning from "@components/aiImageGeneration/AiImageGenerationPlaning";
import AiImageGenerationPostSlider from "@components/aiImageGeneration/AiImageGenerationPostSlider";
import AiImageGeneratonImageSlider from "@components/aiImageGeneration/AiImageGeneratonImageSlider";
import Navbar from "@layout/Header/Navbar";
import Layout from "@layout/Layout";

const index = () => {
  return (
    <Layout classOpt="ail-main-bg aiart">
      <Navbar />
      <AiImageGenerationHero />
      <AiImageGenerationLogoSlider />
      <AiImageGenerationInfocard />
      <AiImageGenerationArt />
      <AiImageGenerationPostSlider />
      <AiImageCompanion />
      <AiImageGenerationPlaning />
      <AiImageGenerationCommunity />
      <AiImageGeneratonImageSlider />
      <AiImageGenerationCta />
      <AiImageGenerationFooter />
    </Layout>
  );
};

export default index;
