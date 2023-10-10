import Image from 'next/image';
import Link from 'next/link';

import logoCSIS from '@/assets/LogoImage.svg'
import { FiHome, FiTarget, FiPhone } from 'react-icons/fi'

import { Container, MenuItem, MenuList } from './styles';
import { useRouter } from 'next/router';

export function Header () {
  const route = useRouter()
 
  return (
    <Container>
      <Link href="/" legacyBehavior>
        <Image src={logoCSIS} alt="Logomarca do CSIS" />
      </Link>
     
      <MenuList>
        <Link href="/" passHref legacyBehavior>
          <MenuItem isActive={route.pathname === '/'}>
            <FiHome />
            Ínicio
          </MenuItem>
        </Link>

        <Link href="/occurrences" passHref legacyBehavior>
          <MenuItem isActive={route?.pathname?.includes('/occurrences') }>
            <FiTarget />
            Ocorrências
          </MenuItem>
        </Link>

        {/* <Link href="/" passHref legacyBehavior>
          <MenuItem isActive={false}>
            <FiPhone />
            Contato
          </MenuItem>
        </Link> */}

      </MenuList>
    </Container>
  )
 ;
}

