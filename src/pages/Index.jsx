import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon, IconButton, HStack, Link, Image } from "@chakra-ui/react";
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
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaChartLine} color="green.500" />
              <Image src="/images/sales_management.jpg" alt="Sales Management" boxSize="50px" borderRadius="full" />
              <Image src="/images/sales_management.jpg" alt="Sales Management" boxSize="50px" borderRadius="full" />
              Sales Management
            </ListItem>
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaBullhorn} color="blue.500" />
              <Image src="/images/marketing.jpg" alt="Marketing" boxSize="50px" borderRadius="full" />
              <Image src="/images/marketing.jpg" alt="Marketing" boxSize="50px" borderRadius="full" />
              Marketing
            </ListItem>
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaProductHunt} color="purple.500" />
              <Image src="/images/product_development.jpg" alt="Product Development" boxSize="50px" borderRadius="full" />
              <Image src="/images/product_development.jpg" alt="Product Development" boxSize="50px" borderRadius="full" />
              Product Development
            </ListItem>
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaChartPie} color="orange.500" />
              <Image src="/images/market_analysis.jpg" alt="Market Analysis" boxSize="50px" borderRadius="full" />
              <Image src="/images/market_analysis.jpg" alt="Market Analysis" boxSize="50px" borderRadius="full" />
              Market Analysis
            </ListItem>
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaTachometerAlt} color="red.500" />
              <Image src="/images/performance_optimization.jpg" alt="Performance Optimization" boxSize="50px" borderRadius="full" />
              <Image src="/images/performance_optimization.jpg" alt="Performance Optimization" boxSize="50px" borderRadius="full" />
              Performance Optimization
            </ListItem>
          </List>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Benefits
          </Heading>
          <List spacing={3}>
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaRocket} color="teal.500" />
              <Image src="/images/increase_revenue.jpg" alt="Increase in Revenue" boxSize="50px" borderRadius="full" />
              <Image src="/images/increase_revenue.jpg" alt="Increase in Revenue" boxSize="50px" borderRadius="full" />
              Increase in Revenue
            </ListItem>
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaRocket} color="teal.500" />
              <Image src="/images/increase_views.jpg" alt="Increase in Views" boxSize="50px" borderRadius="full" />
              <Image src="/images/increase_views.jpg" alt="Increase in Views" boxSize="50px" borderRadius="full" />
              Increase in Views
            </ListItem>
            <ListItem _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
              <ListIcon as={FaRocket} color="teal.500" />
              <Image src="/images/reaching_audience.jpg" alt="Reaching Direct Audience" boxSize="50px" borderRadius="full" />
              <Image src="/images/reaching_audience.jpg" alt="Reaching Direct Audience" boxSize="50px" borderRadius="full" />
              Reaching Direct Audience
            </ListItem>
          </List>
        </Box>

        <Box w="100%">
          <Heading as="h2" size="lg" mb={4}>
            Contact Us
          </Heading>
          <HStack spacing={3} _hover={{ transform: "scale(1.05)", transition: "0.3s" }}>
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
