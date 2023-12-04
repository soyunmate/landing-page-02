import React, { FC } from 'react'
import './NavBar.css'
import {
  Box,
  chakra,
  Button,
  CloseButton,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Flex,
  Link,
  HStack,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useViewportScroll } from 'framer-motion'
import { FaGithub, FaHome, FaPaperPlane, FaPencilAlt } from 'react-icons/fa'

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const mobileNav = useDisclosure()
  const { toggleColorMode: toggleMode } = useColorMode()

  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)
  const bg = useColorModeValue('white', 'gray.800')
  const ref = React.useRef(null)
  const [y, setY] = React.useState(0)
  const height = 0
  const { scrollY } = useViewportScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])
  const GetStartedBtn = (
    <Box
      display={{
        base: 'none',
        md: 'flex',
      }}
      alignItems="center"
      as="a"
      aria-label="Sponsor Choc UI on Open Collective"
      href={''}
      target="_blank"
      rel="noopener noreferrer"
      bg="primary.300"
      borderWidth="1px"
      borderColor="gray.200"
      px="1em"
      minH="36px"
      rounded="md"
      fontSize="sm"
      color="gray.800"
      outline="0"
      transition="all 0.3s"
      _hover={{
        bg: 'primary.500',
        borderColor: 'gray.300',
      }}
      _active={{
        borderColor: 'gray.200',
      }}
      _focus={{
        boxShadow: 'outline',
      }}
      ml={5}
    >
      <Box as="strong" lineHeight="inherit" fontWeight="semibold">
        Get Started
      </Box>
    </Box>
  )
  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? 'flex' : 'none'}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<FaHome />}>
        Home
      </Button>
      <Button w="full" variant="ghost" leftIcon={<FaPaperPlane />}>
        Documentation
      </Button>
      <Button w="full" variant="ghost" leftIcon={<FaPencilAlt />}>
        Blog
      </Button>
    </VStack>
  )
  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        _dark={{ bg: 'gray.900' }}
        borderTopColor="primary.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Image h={'35px'} src="/logo.png" />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <HStack
                spacing="5"
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              >
                <Text
                  p={1}
                  rounded={5}
                  as={'button'}
                  _hover={{ bg: 'gray.100' }}
                  _dark={{ _hover: { bg: 'gray.600' } }}
                  variant={'ghost'}
                >
                  Docs
                </Text>
                <Text
                  p={1}
                  rounded={5}
                  as={'button'}
                  _hover={{ bg: 'gray.100' }}
                  _dark={{ _hover: { bg: 'gray.600' } }}
                  variant={'ghost'}
                >
                  Blog
                </Text>

                <IconButton
                  size="md"
                  fontSize="lg"
                  aria-label={``}
                  variant="ghost"
                  color="current"
                  icon={<FaGithub />}
                />
              </HStack>
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={``}
                variant="ghost"
                color="current"
                ml={{
                  base: '0',
                  md: '3',
                }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              {GetStartedBtn}
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  )
}

export default NavBar
