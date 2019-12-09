import React, {Fragment} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

// UI Framework components
import Form, { Field, ErrorMessage } from '@atlaskit/form';
import Select from '@atlaskit/select';
import Button from '@atlaskit/button';
import { DatePicker } from '@atlaskit/datetime-picker';

import { fetchLastRates } from '../../../actions/app.js';
import { fetchHistoricalRates } from '../../../actions/app.js';

import { getRatesRequestData } from '../../../utils/getRatesRequestData.js';

const FieldWrapper = styled.div(({ width }) => ({
  flex: `0 1 ${width}`,
  margin: '0 1rem 0 0',
  ['& > div']: {
    margin: 0
  },
  ['@media (max-width: 768px)']: {
    margin: '0 0 1rem 0'
  }
}));

const ButtonWrapper = styled.div({
  alignSelf: 'center',
  marginLeft: 'auto'
});

const StyledForm = styled.form({
  display: 'flex',
  ['@media (max-width: 768px)']: {
    flexDirection: 'column'
  }
});


const FilterForm = ({ isHistorical }) => {
  const dispatch = useDispatch();
  const currenciesList = useSelector(state => state.app.currenciesList);
  const onSubmit = (data) => {
    const errors = {
      baseCurrency: !data.baseCurrency ? 'Please select base currency' : undefined,
      comparedCurrencies: !data.comparedCurrencies ? 'Please select at least one currency to compare' : undefined,
      dateInHistory: (isHistorical && (!data.dateInHistory || (new Date(data.dateInHistory) > new Date()))) ? 'Please choose a date earlier than today' : undefined,
    };
    
    if (!errors.baseCurrency && !errors.comparedCurrencies && !errors.dateInHistory) {
      const requestData = getRatesRequestData(data);
      !isHistorical
        ? dispatch(fetchLastRates(requestData))
        : dispatch(fetchHistoricalRates(requestData));
    }

    return errors;
  };
  return (
    <Form onSubmit={onSubmit}>
      {({ formProps }) => (
        <StyledForm {...formProps}>
          <FieldWrapper width={'20%'}>
            <Field name="baseCurrency">
              {({ fieldProps, error }) =>
                <Fragment>
                  <Select
                    {...fieldProps}
                    className="currencies-form__select"
                    classNamePrefix="react-select"
                    options={currenciesList}
                    isSearchable
                    placeholder="Choose a base currency"
                  />
                  { error && <ErrorMessage>{error}</ErrorMessage> }
                </Fragment>
              }
            </Field>
          </FieldWrapper>
          <FieldWrapper width={isHistorical ? '55%' : '75%'}>
            <Field name='comparedCurrencies'>
              {({ fieldProps, error }) =>
              <Fragment>
                <Select
                  {...fieldProps}
                  className="currencies-form__select"
                  classNamePrefix="react-select"
                  options={currenciesList}
                  isMulti
                  isSearchable
                  placeholder="Choose currencies to compare"
                />
                { error && <ErrorMessage>{error}</ErrorMessage> }
              </Fragment>}
            </Field>
          </FieldWrapper>
          { isHistorical &&
          <FieldWrapper width={'20%'}>
            <Field name='dateInHistory'>
              {({ fieldProps, error }) => <Fragment>
                <DatePicker {...fieldProps} id="date" />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </Fragment>}
            </Field>
          </FieldWrapper>
          }
          <ButtonWrapper>
            <Button type="submit" appearance="primary">
              Submit
            </Button>
          </ButtonWrapper>
        </StyledForm>
      )}
    </Form>
  );
};

export default FilterForm;