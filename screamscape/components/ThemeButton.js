import { useTheme as useNextTheme } from 'next-themes';
import { Switch, useTheme } from '@nextui-org/react';
import { SunIcon } from './SunIcon';
import { MoonIcon } from './MoonIcon';

export default function ThemeButton() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <Switch
          checked={isDark}
          size="sm"
          iconOn={<SunIcon filled />}
          iconOff={<MoonIcon filled />}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
    </div>
  )
}
