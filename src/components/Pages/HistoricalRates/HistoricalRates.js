import React from 'react';
import Layout from '../../Layout/Layout.js';
import FilterForm from '../CommonComponents/FilterForm.js';
import Rates from '../CommonComponents/Rates.js';

const HistoricalRates = () => {
  return (
    <Layout title={'Historical rates'} >
      <FilterForm isHistorical />
      <Rates reducer='historicalRates'/>
    </Layout>
  );
};

export default HistoricalRates;