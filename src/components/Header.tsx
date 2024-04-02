import { useTheme } from './theme-provider';

import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

type CustomLinkProps = {
  to: string;
  children: ReactNode;
};

const CustomLink = ({ to, children, ...props }: CustomLinkProps) => {
  const pathname = useLocation().pathname;
  const isActive = pathname === to;

  return (
    <NavigationMenuLink asChild active={isActive}>
      <Link to={to} className={navigationMenuTriggerStyle()} {...props}>
        {children}
      </Link>
    </NavigationMenuLink>
  );
};

const Header = () => {
  const { setTheme } = useTheme();

  return (
    <NavigationMenu className="min-w-full justify-end px-2 pt-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <CustomLink to={'/'}>Home</CustomLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <CustomLink to={'/cart'}>Cart</CustomLink>
        </NavigationMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
