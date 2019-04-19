import {
  Spanned,
  LinkStyleSpecial,
} from './Navigation.styled';

const NavigationTitle = () => (
  <LinkStyleSpecial href={'/'}>
    J<Spanned>ason</Spanned> Mandel
  </LinkStyleSpecial>
);

export default NavigationTitle;
