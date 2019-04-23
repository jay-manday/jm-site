/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import {
  Spanned,
  LinkStyle,
} from './Navigation.styled';

const NavigationTitle = () => (
  <LinkStyle href="/">
    J<Spanned>ason</Spanned> Mandel
  </LinkStyle>
);

export default NavigationTitle;
