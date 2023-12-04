import { FC, useState, useEffect } from 'react'
import './HeroSection.css'
import { Box, Button, Icon, Image, Stack, Text, chakra } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
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
      <Box px={8} py={24} mx="auto">
        <Box
          w={{
            base: 'full',
            md: 11 / 12,
            xl: 9 / 12,
          }}
          mx="auto"
          textAlign={{
            base: 'left',
            md: 'center',
          }}
        >
          <chakra.h1
            mb={6}
            fontSize={{
              base: '4xl',
              md: '6xl',
            }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{
              base: 'normal',
              md: 'tight',
            }}
            color="gray.900"
            _dark={{
              color: 'gray.100',
            }}
          >
            Its time to{' '}
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
              Revolutionize
            </Text>{' '}
            Your Development Experience
          </chakra.h1>
          <chakra.p
            px={{
              base: 0,
              lg: 24,
            }}
            mb={6}
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            color="gray.600"
            _dark={{
              color: 'gray.300',
            }}
          >
            Effortless Coding, Seamless Collaboration - Elevate Your Projects
            with CodeCraft Pro
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
            justifyContent={{
              sm: 'left',
              md: 'center',
            }}
          >
            <Button
              as="a"
              colorScheme="primary"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{
                base: 'full',
                sm: 'auto',
              }}
              mb={{
                base: 2,
                sm: 0,
              }}
              size="lg"
              cursor="pointer"
            >
              Get Started
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
            <Button
              as="a"
              colorScheme="gray"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{
                base: 'full',
                sm: 'auto',
              }}
              mb={{
                base: 2,
                sm: 0,
              }}
              size="lg"
              cursor="pointer"
            >
              <Text mr={2}>Docs</Text>
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </Stack>
        </Box>
        <Box
          w={{
            base: 'full',
            md: 10 / 12,
          }}
          mx="auto"
          mt={20}
          textAlign="center"
        >
          <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src="/screen.png"
            alt="Hellonext feedback boards software screenshot"
          />
        </Box>
      </Box>
    </motion.div>
  )
}

export default HeroSection
