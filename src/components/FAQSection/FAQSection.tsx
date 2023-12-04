import { FC, useEffect, useState } from 'react'
import './FAQSection.css'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Box,
} from '@chakra-ui/react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { ChevronDownIcon } from '@chakra-ui/icons'

interface FaqSectionProps {}

const FaqSection: FC<FaqSectionProps> = () => {
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
        align={'center'}
        justify={'center'}
        my={20}
        px={8}
        py={4}
        bg={useColorModeValue('white', 'gray.800')}
      >
        <Container>
          <Box textAlign="center" mb={10}>
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
                Have any questions? We are happy to answer!
              </Box>
            </Text>
          </Box>

          <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">
                  How do I get started with CodeCraft Pro?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Getting started is easy! Simply visit our GitHub page, clone
                  the repository, and follow the installation instructions in
                  our documentation.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">
                  Does CodeCraft Pro support version control other than Git?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Yes, CodeCraft Pro supports both Git and SVN for version
                  control. You can seamlessly manage your codebase with your
                  preferred version control system.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">
                  Is there a free version of CodeCraft Pro available?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Absolutely! We offer a free version for open source
                  enthusiasts, including access to our intelligent code editor
                  and basic documentation. Check out our GitHub page for more
                  details.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">
                  How can I collaborate with team members in real-time?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  A4: CodeCraft Pro has integrated real-time collaboration
                  tools. Invite your team members, and you can code together in
                  real-time, share ideas, and enhance productivity.
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text fontSize="md">
                  What kind of support is available for the paid plans?
                </Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                  Paid plans include priority email support. Our dedicated
                  support team is ready to assist you with any questions or
                  issues you may encounter. For enterprise solutions, additional
                  support options are available, including a dedicated account
                  manager and on-site support if required.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
    </motion.div>
  )
}

export default FaqSection
