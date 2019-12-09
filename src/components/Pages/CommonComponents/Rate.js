import React, {Fragment} from 'react';
import styled from 'styled-components'

const RateWrapper = styled.div({
  margin: '0 0 .75rem 0'
});

const Symbol = styled.span({
  padding: '.25rem',
  margin: '0 .5rem 0 0',
  borderRadius: '2px',
  backgroundColor: '#8bc34a',
});

const RateValue = styled.span(({ minWidth = '0px' }) => ({
  display: 'inline-block',
  padding: '.25rem',
  marginRight: '.25rem',
  minWidth: minWidth,
  ['@media (max-width: 768px)']: {
    minWidth: '35%'
  },
  ['@media (max-width: 576px)']: {
    minWidth: '50%'
  }
}));

const Rate = (props) => {
  return (
    <RateWrapper>
      { !props.isBaseCurrency &&
        <Fragment>
          <RateValue minWidth='70px' >{props.rate}</RateValue>
          <Symbol>{props.code}</Symbol>
        </Fragment>
      }
      { props.isBaseCurrency &&
        <Fragment>
          <RateValue>{props.rate}</RateValue>
          <Symbol>{props.code}</Symbol>
        </Fragment>
      }
    </RateWrapper>
  );
};

export default Rate;