import { Link, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

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
  return (
    <NavigationMenu className='min-w-full justify-end pt-1'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <CustomLink to={'/'}>Home</CustomLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <CustomLink to={'/cart'}>Cart</CustomLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Header;
