import { FC, useState, useEffect } from 'react'
import './StatSection.css'
import {
  Container,
  Text,
  SimpleGrid,
  Box,
  Center,
  Image,
  chakra,
} from '@chakra-ui/react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface StatData {
  id: number
  label: string
  score: string
}

const statData: StatData[] = [
  {
    id: 1,
    label: 'Clients',
    score: '450',
  },
  {
    id: 2,
    label: 'Projects',
    score: '820',
  },
  {
    id: 3,
    label: 'Hours of Support',
    score: '10,364',
  },
  {
    id: 4,
    label: 'Hard Workers',
    score: '48',
  },
]

interface StatSectionProps {}

const StatSection: FC<StatSectionProps> = () => {
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
      <Container maxW="7xl" px={8} py={4} mx="auto">
        <Center>
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
                Trusted by Developers & Companies
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
            <chakra.p
              mb={5}
              textAlign={{
                base: 'center',
              }}
              color="gray.600"
              _dark={{
                color: 'gray.400',
              }}
              fontSize={{
                md: 'lg',
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              provident dolorum.
            </chakra.p>
          </Box>
        </Center>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={{ base: 2, sm: 5 }}
          mt={12}
          mb={4}
        >
          {statData.map((data) => (
            <Box key={data.id} p={{ base: 2, sm: 5 }} textAlign="center">
              <Text fontWeight="extrabold" fontSize="xx-large">
                {data.score}
              </Text>
              <Text fontSize="sm">{data.label}</Text>
            </Box>
          ))}
        </SimpleGrid>
        <Image
          mx={'auto'}
          justifySelf={'center'}
          w={'720px'}
          src="/techlogos.svg"
        />
      </Container>
    </motion.div>
  )
}

export default StatSection
