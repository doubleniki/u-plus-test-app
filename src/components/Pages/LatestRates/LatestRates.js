import React from 'react';
import Layout from '../../Layout/Layout.js';
import FilterForm from '../CommonComponents/FilterForm.js';
import Rates from '../CommonComponents/Rates.js';

const LatestRates = () => {
  return (
    <Layout title={'Latest rates'} >
      <FilterForm />
      <Rates reducer='latestRates' />
    </Layout>
  );
};

export default LatestRates;