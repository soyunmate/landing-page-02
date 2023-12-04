import React, { FC, useState, useEffect } from 'react'
import './TestimonialSection.css'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

interface TestimonialSectionProps {}

const TestimonialSection: FC<TestimonialSectionProps> = () => {
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
      <Box px={8} pb={8}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            {/* <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text> */}
            <Box textAlign="center">
              <Text
                fontWeight="extrabold"
                mb={2}
                fontSize={{
                  base: '2xl',
                  md: '4xl',
                }}
                letterSpacing="tight"
                textAlign={{
                  base: 'center',
                }}
                color="gray.900"
                _dark={{
                  color: 'gray.400',
                }}
                lineHeight={{
                  md: 'shorter',
                }}
              >
                <Box as="span" display="inline-block" position="relative">
                  Our Clients Speak
                  <Box
                    as="span"
                    display="block"
                    position="absolute"
                    bg={'primary.600'}
                    w={'100%'}
                    h={'1px'}
                  />
                </Box>
              </Text>
            </Box>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                  CodeCraft Pro has become an integral part of my coding
                  arsenal. The real-time collaboration features have transformed
                  the way our remote team works together.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={'https://bit.ly/dan-abramov'}
                name={'Ryan P.'}
                title={'Software Engineer'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Seamless Integration</TestimonialHeading>
                <TestimonialText>
                  CodeCraft Pro has streamlined my projects. The version control
                  integration is seamless, and the comprehensive documentation
                  is a lifesaver.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={'https://bit.ly/prosper-baba'}
                name={'Alex H.'}
                title={'Full Stack Developer'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Clean Interface</TestimonialHeading>
                <TestimonialText>
                  The clean interface and intelligent code suggestions in
                  CodeCraft Pro have significantly improved my coding speed.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'Jessica G.'}
                title={'Freelancer'}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  )
}

export default TestimonialSection
