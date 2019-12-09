import React from 'react';
import { Link } from 'react-router-dom';
import Button, { ButtonGroup } from '@atlaskit/button';


export default function Navigation() {
  return (
    <ButtonGroup>
      <Button>
        <Link to="/">
          Historical Rates
        </Link>
      </Button>
      <Button testId={'navButtonLatestRates'}>
        <Link to="/latest-rates">
          Latest Rates
        </Link>
      </Button>
    </ButtonGroup>
  )
}