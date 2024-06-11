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

const TechStackSection = () => {
  const columns = useBreakpointValue({ base: 1, md: 3 });

  return (
    <Center py="100px" w="100%" bg="#163f27" color="white">
      <Center w="100%">
        <VStack w="80%">
          <Heading size="lg" mb={4}>
            Tech Stack
          </Heading>
          <Text align="center" mb={6}>
            Here are some of the technologies I have experience with:
          </Text>
          <Grid
            pt="50px"
            w="90%"
            templateColumns={`repeat(${columns}, 1fr)`}
            gap={6}
          >
            <VStack>
              <Heading size="md" mb={4}>
                Frontend
              </Heading>
              <VStack align="start">
                <HStack>
                  <FontAwesomeIcon icon={faReact} />
                  <Text ml={2}>React.js</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faReact} />
                  <Text ml={2}>Next.js</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faReact} />
                  <Text ml={2}>Gatsby.js</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faHtml5} />
                  <Text ml={2}>HTML</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faCss3Alt} />
                  <Text ml={2}>CSS</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faJs} />
                  <Text ml={2}>JavaScript</Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack>
              <Heading size="md" mb={4}>
                Backend
              </Heading>
              <VStack align="start">
                <HStack>
                  <FontAwesomeIcon icon={faNodeJs} />
                  <Text ml={2}>Node.js</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faNodeJs} />
                  <Text ml={2}>Express.js</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faNodeJs} />
                  <Text ml={2}>MongoDB</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faNodeJs} />
                  <Text ml={2}>PostgreSQL</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faNodeJs} />
                  <Text ml={2}>Firebase</Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack>
              <Heading size="md" mb={4}>
                Tools
              </Heading>
              <VStack align="start">
                <HStack>
                  <FontAwesomeIcon icon={faGitAlt} />
                  <Text ml={2}>Git</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faGithub} />
                  <Text ml={2}>GitHub</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faNpm} />
                  <Text ml={2}>Heroku</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faNpm} />
                  <Text ml={2}>Netlify</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faNpm} />
                  <Text ml={2}>Vercel</Text>
                </HStack>
                <HStack>
                  <FontAwesomeIcon icon={faWordpress} />
                  <Text ml={2}>WordPress</Text>
                </HStack>
              </VStack>
            </VStack>
          </Grid>
        </VStack>
      </Center>
    </Center>
  );
};

export default TechStackSection;
