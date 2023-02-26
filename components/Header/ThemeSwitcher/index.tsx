import useSound from 'use-sound';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonStars, Sun } from 'phosphor-react';
import { Tooltip } from 'styles/primitives/Tooltip';
import { NavbarButton } from '../styles';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const [playOn] = useSound('/sound/switch-on.mp3');
  const [playOff] = useSound('/sound/switch-off.mp3');

  const toggle = () => {
    if (theme === 'dark') {
      setTheme('light');
      playOn();
    } else {
      setTheme('dark');
      playOff();
    }
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Tooltip content='Switch Theme'>
      <NavbarButton
        onClick={() => toggle()}
        css={{
          display: 'none',
          '@bp2': {
            display: 'flex',
          },
        }}
      >
        {theme === 'light' ? <MoonStars /> : <Sun />}
      </NavbarButton>
    </Tooltip>
  );
};
