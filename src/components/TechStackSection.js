import React from "react";
import {
  Heading,
  Grid,
  VStack,
  Center,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJs,
  faGitAlt,
  faGithub,
  faNpm,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const TechStackSection = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });
  const { t } = useTranslation();

  const techStack = [
    {
      title: t("techStack.frontend"),
      items: [
        { name: "React.js", icon: faReact },
        { name: "Next.js", icon: faReact },
        { name: "Gatsby.js", icon: faReact },
        { name: "HTML", icon: faHtml5 },
        { name: "CSS", icon: faCss3Alt },
        { name: "JavaScript", icon: faJs },
      ],
    },
    {
      title: t("techStack.backend"),
      items: [
        { name: "Node.js", icon: faNodeJs },
        { name: "Express.js", icon: faNodeJs },
        { name: "MongoDB", icon: faNodeJs },
        { name: "PostgreSQL", icon: faNodeJs },
        { name: "Firebase", icon: faNodeJs },
      ],
    },
    {
      title: t("techStack.tools"),
      items: [
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
        { name: "Heroku", icon: faNpm },
        { name: "Netlify", icon: faNpm },
        { name: "Vercel", icon: faNpm },
        { name: "WordPress", icon: faWordpress },
      ],
    },
  ];

  return (
    <Center py="100px" w="100%">
      <Center w="100%">
        <VStack w="80%">
          <Heading size="lg" mb={4}>
            {t("techStack.techStackTitle")}
          </Heading>
          <Text align="center" mb={6}>
            {t("techStack.techStackSubtitle")}
          </Text>
          <Grid
            pt="50px"
            w="90%"
            templateColumns={`repeat(${columns}, 1fr)`}
            gap={6}
          >
            {techStack.map((category, index) => (
              <VStack key={index}>
                <Heading size="md" mb={4}>
                  {category.title}
                </Heading>
                <VStack align="start">
                  {category.items.map((item, idx) => (
                    <HStack key={idx}>
                      <FontAwesomeIcon icon={item.icon} />
                      <Text ml={2}>{item.name}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Center>
    </Center>
  );
};

export default TechStackSection;
