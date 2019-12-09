import React from 'react';
import Rate from './Rate.js';
import {useSelector} from 'react-redux';
import styled from 'styled-components';

const RatesHeader = styled.header``;
const RatesTitle = styled.h3``;

const RatesBody = styled.main({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 4fr 5fr',
  margin: '1rem 0',
  ['@media (max-width: 768px)']: {
    gridTemplateColumns: '5fr 2fr 5fr',
  }
});

const RatesColumn = styled.div({
  padding: '0 .5rem',
});

const RatesWrapper = styled.section`

`;

const Rates = (props) => {
  const baseCurrency = useSelector(state => state[props.reducer].baseCurrency);
  const comparedCurrencies = useSelector(state => state[props.reducer].comparedCurrencies);
  const humanDate = useSelector(state => state[props.reducer].humanDate);
  
  return (
    <RatesWrapper>
      <RatesHeader>
        { humanDate &&
          <RatesTitle>Rates on {humanDate}</RatesTitle>
        }
      </RatesHeader>
      <RatesBody>
        <RatesColumn>
          { baseCurrency &&
          <Rate {...baseCurrency} isBaseCurrency />
          }
        </RatesColumn>
        <RatesColumn>
          { baseCurrency &&
            <div style={{ textAlign: 'center', padding: '.25rem' }}>=</div>
          }
        </RatesColumn>
        <RatesColumn>
          { comparedCurrencies.length > 0 &&
          comparedCurrencies.map(currency => {
            return (
              <Rate {...currency} key={currency.code} />
            )
          })
          }
        </RatesColumn>
      </RatesBody>
      
    </RatesWrapper>
  );
};

export default Rates;