import {
  Heading,
  Grid,
  VStack,
  Text,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faGitAlt,
  faGithub,
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
        { name: "JavaScript", icon: faJs },
      ],
    },
    {
      title: t("techStack.backend"),
      items: [
        { name: "Node.js", icon: faNodeJs },
        { name: "Express.js", icon: faNodeJs },
      ],
    },
    {
      title: t("techStack.tools"),
      items: [
        { name: "Git", icon: faGitAlt },
        { name: "GitHub", icon: faGithub },
      ],
    },
  ];

  return (
    <>
      <Text align="center" mb={6}>
        {t("techStack.techStackSubtitle")}
      </Text>
      <Grid w="90%" templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
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
    </>
  );
};

export default TechStackSection;
