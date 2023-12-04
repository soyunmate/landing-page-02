import { FC } from 'react'
import './Footer.css'
import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react'

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa'

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <Box
      _dark={{
        bg: 'gray.900',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Flex justify="center">
          <Image
            src="/logo.png"
            alt="Company Logo"
            rounded="lg"
            width={{
              base: '75px',
              lg: '125px',
            }}
            height={{
              base: '75px',
              lg: '125px',
            }}
            my={{
              base: 2,
              lg: 0,
            }}
          />
        </Flex>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: '12px',
            md: '16px',
          }}
          color="gray.800"
          _dark={{
            color: 'white',
          }}
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Home</Link>
            <Link textTransform="uppercase">Download</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Documentation</Link>
            <Link textTransform="uppercase">Pricing</Link>
          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: '12px',
            md: '16px',
          }}
          color="gray.800"
          _dark={{
            color: 'white',
          }}
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Blog</Link>
            <Link textTransform="uppercase">Privacy Policy</Link>
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">About Us</Link>
            <Link textTransform="uppercase">Contact Us</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{
          color: '#F9FAFB',
        }}
        h="3.5px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={FaFacebook}
            />
          </Link>
          <Link>
            <Icon
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={FaTwitter}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={FaGithub}
            />
          </Link>
          <Link>
            <Icon
              _dark={{
                color: 'white',
              }}
              h="20px"
              w="20px"
              as={FaLinkedin}
            />
          </Link>
        </HStack>

        <Text
          textAlign="center"
          fontSize="smaller"
          _dark={{
            color: 'white',
          }}
        >
          &copy;Demo Landing Page Project by github/soyunmate
        </Text>
      </VStack>
    </Box>
  )
}

export default Footer
