import { FC, useEffect, useState } from 'react'
import './CTASection.css'
import { chakra, Stack, Box, Flex, Image, Text, Button } from '@chakra-ui/react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CtaSectionProps {}

const CtaSection: FC<CtaSectionProps> = () => {
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
      <Flex
        direction={{
          base: 'column',
          md: 'row',
        }}
        _light={{
          bg: 'white',
        }}
        px={12}
        py={4}
        mx="auto"
      >
        <Box
          w={{
            base: 'full',
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          pr={{
            md: 20,
          }}
        >
          <chakra.h2
            fontSize={{
              base: '3xl',
              sm: '4xl',
            }}
            fontWeight="extrabold"
            lineHeight="shorter"
            color="black"
            _dark={{
              color: 'gray.100',
            }}
            mb={6}
          >
            <chakra.span display="block">
              Ready to Elevate Your Coding Experience?
            </chakra.span>
            <chakra.span
              display="block"
              color="primary.400"
              _dark={{
                color: 'gray.500',
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
                Start your free trial today!
              </Text>
            </chakra.span>
          </chakra.h2>
          <chakra.p
            mb={6}
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="gray.500"
            _dark={{
              color: 'white',
            }}
          >
            Explore CodeCraft Pro on GitHub, Dive into Our Docs, and Transform
            the Way You Code Today!
          </chakra.p>
          <Stack
            direction={{
              base: 'column',
              sm: 'row',
            }}
            mb={{
              base: 4,
              md: 8,
            }}
            spacing={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Button
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                w="full"
                rounded="md"
                _light={{
                  color: 'white',
                }}
                bg="primary.400"
                _dark={{
                  bg: 'primary.500',
                }}
                _hover={{
                  bg: 'primary.600',
                  _dark: {
                    bg: 'primary.700',
                  },
                }}
              >
                Sign up for free
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          w={{
            base: 'full',
            md: 10 / 12,
          }}
          mx="auto"
          textAlign="center"
        >
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="/feature-3.png"
            alt="Hellonext feedback boards software screenshot"
          />
        </Box>
      </Flex>
    </motion.div>
  )
}

export default CtaSection
