import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import components from './Content.styled';

export default ({ Doc }) => (
  <MDXProvider components={components}>
    <Doc />
  </MDXProvider>
);
