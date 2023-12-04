import { FC, useState, useEffect } from 'react'
import './FeatureSection.css'
import {
  Box,
  SimpleGrid,
  Flex,
  chakra,
  Button,
  Text,
  Image,
} from '@chakra-ui/react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FeatureSectionProps {}

const FeatureSection: FC<FeatureSectionProps> = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({ scale: 1, opacity: 1 })
      setHasAnimated(true)
    }
  }, [inView, controls, hasAnimated])
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <Flex px={8} py={4} w="full" justifyContent="center" alignItems="center">
        <Box px={8} pt={20} mx="auto">
          <SimpleGrid
            alignItems="start"
            columns={{
              base: 1,
              md: 2,
            }}
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box>
              <chakra.h2
                mb={4}
                fontSize={{
                  base: '2xl',
                  md: '4xl',
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: 'center',
                  md: 'left',
                }}
                color="gray.900"
                _dark={{
                  color: 'gray.400',
                }}
                lineHeight={{
                  md: 'shorter',
                }}
                textShadow="2px 0 currentcolor"
              >
                <Text
                  display={{
                    base: 'block',
                    lg: 'inline',
                  }}
                  w="full"
                  bgClip="text"
                  bgGradient="linear(to-r, primary.400,secondary.500)"
                  fontWeight="extrabold"
                >
                  How it Works?
                </Text>
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: 'center',
                  sm: 'left',
                }}
                color="gray.600"
                _dark={{
                  color: 'gray.400',
                }}
                fontSize={{
                  md: 'lg',
                }}
              >
                Getting started with CodeCraft Pro is as easy as writing your
                first line of code. Clone our GitHub repository, follow our
                comprehensive documentation, and start coding with unparalleled
                ease.
              </chakra.p>
              <Button
                w={{
                  base: 'full',
                  sm: 'auto',
                }}
                size="lg"
                colorScheme="secondary"
                _dark={{
                  bg: 'primary.400',
                }}
                _hover={{
                  bg: 'secondary.700',
                  _dark: {
                    bg: 'primary.600',
                  },
                }}
                color="gray.100"
              >
                Learn More
              </Button>
            </Box>
            <Box w="full" h="full">
              <Image src="/feature-2.png" />
            </Box>
          </SimpleGrid>
          <SimpleGrid
            alignItems="center"
            columns={{
              base: 1,
              md: 2,
            }}
            flexDirection="column-reverse"
            mb={24}
            spacingY={{
              base: 10,
              md: 32,
            }}
            spacingX={{
              base: 10,
              md: 24,
            }}
          >
            <Box
              order={{
                base: 'initial',
                md: 2,
              }}
            >
              <chakra.h2
                mb={4}
                fontSize={{
                  base: '2xl',
                  md: '4xl',
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{
                  base: 'center',
                  md: 'left',
                }}
                color="gray.900"
                _dark={{
                  color: 'gray.400',
                }}
                lineHeight={{
                  md: 'shorter',
                }}
              >
                <Text
                  display={{
                    base: 'block',
                    lg: 'inline',
                  }}
                  w="full"
                  bgClip="text"
                  bgGradient="linear(to-r, primary.400,secondary.500)"
                  fontWeight="extrabold"
                >
                  Key Features
                </Text>
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{
                  base: 'center',
                  sm: 'left',
                }}
                color="gray.600"
                _dark={{
                  color: 'gray.400',
                }}
                fontSize={{
                  md: 'lg',
                }}
              >
                The intuitive interface, paired with advanced features, makes
                CodeCraft Pro the go-to choice for developers looking to
                streamline their workflow.
              </chakra.p>
              <Button
                w={{
                  base: 'full',
                  sm: 'auto',
                }}
                size="lg"
                colorScheme="secondary"
                _dark={{
                  bg: 'primary.400',
                }}
                _hover={{
                  bg: 'secondary.700',
                  _dark: {
                    bg: 'primary.600',
                  },
                }}
                color="gray.100"
              >
                Learn More
              </Button>
            </Box>
            <Box w="full" h="full">
              <Image src="/feature-1.png" />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </motion.div>
  )
}

export default FeatureSection
