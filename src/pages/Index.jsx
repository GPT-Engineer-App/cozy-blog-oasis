import { Box, Container, Flex, Heading, HStack, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <HStack spacing={8} justify="space-between">
            <Heading size="md">My Blog</Heading>
            <HStack spacing={4}>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Home</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>About</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Blog</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Contact</Link>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          {/* Blog Posts Section */}
          <Box flex="3">
            <VStack spacing={8} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title</Heading>
                <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Another Blog Post</Heading>
                <Text mt={4}>This is another summary of a blog post. Click to read more...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
            <Heading fontSize="lg" mb={4}>Recent Posts</Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 1</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 2</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 3</Link>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <FaFacebook />
              </Link>
              <Link href="#" isExternal>
                <FaTwitter />
              </Link>
              <Link href="#" isExternal>
                <FaInstagram />
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;