import React from 'react';
import {
  LinkStyle,
  TitleStyle,
} from './Navigation.styled';

const NavigationSection = props => (
  <LinkStyle href={`/${props.title}`}>
    <TitleStyle>{props.title}</TitleStyle>
  </LinkStyle>
);

export default NavigationSection;
