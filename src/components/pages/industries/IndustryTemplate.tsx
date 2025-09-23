import { motion } from "motion/react";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { LucideIcon } from "lucide-react";
import publicServicesImage from "figma:asset/07f93e297a8a1758e09a68b3c4ec8ec816ee1498.png";
import highTechImage from "figma:asset/440fddbbc85d01041f25a9d1b636218c3157f28b.png";
import healthcareImage from "figma:asset/6d0835866ce3eda5db67a9751197b5ad03027641.png";
import { SEO } from "../../SEO";

interface IndustryData {
  id: string;
  name: string;
  hero: {
    headline: string;
    subtext: string;
    ctaText: string;
    imageQuery: string;
  };
  whyChooseUs: {
    title: string;
    items: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      features: string[];
    }>;
  };
  advantages: {
    title: string;
    items: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
  };
  cta: {
    headline: string;
    subtext: string;
    ctaText: string;
    backgroundImageQuery: string;
  };
}

interface IndustryTemplateProps {
  data: IndustryData;
  onNavigate?: (page: string) => void;
}

export function IndustryTemplate({ data, onNavigate }: IndustryTemplateProps) {
  // Safety check to prevent errors if data is undefined
  if (
    !data ||
    !data.hero ||
    !data.whyChooseUs ||
    !data.services ||
    !data.advantages ||
    !data.cta
  ) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Industry Data Not Available
          </h1>
          <p className="text-gray-300 mb-8">
            The requested industry page data is not available.
          </p>
          <button
            onClick={() => onNavigate?.("home")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // Industry-specific hero images
  const getIndustryHeroImage = (industryId: string) => {
    const industryImages: { [key: string]: string } = {
      banking:
        "https://images.unsplash.com/photo-1533234944761-2f5337579079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwdGVjaG5vbG9neSUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NTgwOTkwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "capital-markets":
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      communications:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "consumer-goods":
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      education:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      energy:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      healthcare: healthcareImage,
      "high-tech": highTechImage,
      insurance:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "life-sciences":
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      manufacturing:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "public-services": publicServicesImage,
      retail:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
      travel:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral",
    };

    return (
      industryImages[industryId] ||
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral"
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* ✅ SEO Section */}
      <SEO
        title="HiveRift | Web, Mobile, Blockchain, E-commerce & Cloud Solutions"
        description="HiveRift provides end-to-end digital solutions including custom web development, mobile apps, blockchain, e-commerce, UI/UX design, digital marketing, SEO, business analytics, cloud migration, and DevOps services to help businesses grow."
        keywords="HiveRift, web development, mobile app development, blockchain solutions, e-commerce development, UI/UX design, digital marketing, SEO services, business analytics, cloud services, DevOps"
      />

      {/* Hero Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">{data.hero.headline}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                {data.hero.subtext}
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => onNavigate?.("services")}
              >
                {data.hero.ctaText}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImageWithFallback
                src={getIndustryHeroImage(data.id)}
                alt={`${data.name} technology and digital transformation`}
                className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose HiveRift */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {data.whyChooseUs.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.whyChooseUs.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 h-full hover:bg-gray-800/70 hover:border-blue-400/30 transition-colors">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {data.services.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.items.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/50 border-gray-700 h-full hover:bg-gray-800/70 hover:border-blue-400/30 transition-colors group">
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-blue-100 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 flex items-center"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The HiveRift Advantage */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {data.advantages.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.advantages.items.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:bg-gray-800/70 hover:border-blue-400/30 transition-colors group"
              >
                <div className="flex-shrink-0 p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-blue-800/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080&utm_source=figma&utm_medium=referral`}
            alt={`${data.name} digital transformation background`}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {data.cta.headline}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {data.cta.subtext}
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              onClick={() => onNavigate?.("/contact")}
            >
              {data.cta.ctaText}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
