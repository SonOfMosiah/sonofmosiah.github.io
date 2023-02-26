import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  CirclesThree,
  GithubLogo,
  HouseLine,
  Lightning,
  LinkedinLogo,
  List,
  MoonStars,
  PencilSimple,
  Sun,
  TwitterLogo,
  User,
  Wallet,
} from 'phosphor-react';
import { useAccount } from 'wagmi';
import { Box } from 'styles/primitives/Box';
import { Tooltip } from 'styles/primitives/Tooltip';
import { CustomConnectButton } from 'components/CustomConnectButton';
import { MobileMenu } from 'components/MobileMenu/index';
import {
  Divider,
  Navbar,
  NavbarButton,
  NavbarGroup,
  NavbarItem,
} from './styles';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();
  const { address } = useAccount();
  return (
    <Box
      css={{
        padding: '$9 $10',
        position: 'sticky',
        top: 0,
        width: '100%',
        background: '$secondaryA',
        zIndex: 4,
        backdropFilter: 'blur(2px)',
      }}
    >
      <Navbar>
        <NavbarGroup data-mobile-menu>
          <MobileMenu>
            <List />
          </MobileMenu>
        </NavbarGroup>
        <NavbarGroup data-desktop-navbar>
          <Tooltip content='Home' isAsChild={false}>
            <Link href='/'>
              <NavbarItem className={asPath === '/' ? 'activeLink' : undefined}>
                <HouseLine />
              </NavbarItem>
            </Link>
          </Tooltip>
          {/* <Tooltip content='Writing' isAsChild={false}>
            <Link href='/writing'>
              <NavbarItem
                className={asPath === '/writing' ? 'activeLink' : undefined}
              >
                <PencilSimple />
              </NavbarItem>
            </Link>
          </Tooltip> */}
          <Tooltip content='Projects' isAsChild={false}>
            <Link href='/projects'>
              <NavbarItem
                className={asPath === '/projects' ? 'activeLink' : undefined}
              >
                <Lightning />
              </NavbarItem>
            </Link>
          </Tooltip>
          <Tooltip content='NFTs' isAsChild={false}>
            <Link href='/nfts'>
              <NavbarItem
                className={asPath === '/nfts' ? 'activeLink' : undefined}
              >
                <CirclesThree />
              </NavbarItem>
            </Link>
          </Tooltip>
          <Divider />
          <Tooltip content='Github'>
            <NavbarItem href='https://github.com/sonofmosiah' target='_blank'>
              <GithubLogo />
            </NavbarItem>
          </Tooltip>
          <Tooltip content='Twitter'>
            <NavbarItem
              href='https://twitter.com/sonofmosiah_eth'
              target='_blank'
            >
              <TwitterLogo />
            </NavbarItem>
          </Tooltip>
          <Tooltip content='Linkedin'>
            <NavbarItem
              href='https://www.linkedin.com/in/ammon-werner/'
              target='_blank'
            >
              <LinkedinLogo />
            </NavbarItem>
          </Tooltip>
        </NavbarGroup>
        <NavbarGroup>
          <ThemeSwitcher />
          <CustomConnectButton>
            <NavbarButton>{address ? <User /> : <Wallet />}</NavbarButton>
          </CustomConnectButton>
        </NavbarGroup>
      </Navbar>
    </Box>
  );
};
