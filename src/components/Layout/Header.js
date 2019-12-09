import React from 'react';
import PageHeader from '@atlaskit/page-header';
import Navigation from '../Routing/Navigation.js';

const Header = ({ title }) => {
  return (
    <PageHeader
      actions={<Navigation />}
    >
      {title}
    </PageHeader>
  );
};

export default Header;