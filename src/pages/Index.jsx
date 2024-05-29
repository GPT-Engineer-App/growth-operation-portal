import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon, IconButton, HStack, Link } from "@chakra-ui/react";
import { FaRocket, FaChartLine, FaBullhorn, FaProductHunt, FaChartPie, FaTachometerAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Ascentual
        </Heading>
        <Text fontSize="lg" textAlign="center">
          At Ascentual, we specialize in propelling businesses to new heights. Our mission is to empower companies to achieve sustainable growth through innovative strategies, data-driven insights, and personalized solutions. Whether you're a startup looking to scale or an established business aiming to expand your market presence, Ascentual provides the expertise and support you need to reach your goals.
        </Text>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Our Services
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaChartLine} color="green.500" />
              Sales Management
            </ListItem>
            <ListItem>
              <ListIcon as={FaBullhorn} color="blue.500" />
              Marketing
            </ListItem>
            <ListItem>
              <ListIcon as={FaProductHunt} color="purple.500" />
              Product Development
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartPie} color="orange.500" />
              Market Analysis
            </ListItem>
            <ListItem>
              <ListIcon as={FaTachometerAlt} color="red.500" />
              Performance Optimization
            </ListItem>
          </List>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Benefits
          </Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaRocket} color="teal.500" />
              Increase in Revenue
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="teal.500" />
              Increase in Views
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="teal.500" />
              Reaching Direct Audience
            </ListItem>
          </List>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Contact Us
          </Heading>
          <HStack spacing={3}>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
            <Link href="mailto:contact@ascentual.co" fontSize="lg">
              contact@ascentual.co
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
