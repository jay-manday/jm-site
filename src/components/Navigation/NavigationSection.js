import React from 'react';
import {
  LinkStyle,
  TitleStyle,
} from './Navigation.styled';

const NavigationSection = ({ title }) => (
  <LinkStyle href={`/${title}`}>
    <TitleStyle>{title}</TitleStyle>
  </LinkStyle>
);

export default NavigationSection;
