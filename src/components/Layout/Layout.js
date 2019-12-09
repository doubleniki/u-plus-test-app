import React, {Fragment} from 'react';
import Header from './Header.js';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// UI Frameworks components
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Spinner from '@atlaskit/spinner';

//styles
const SpinnerContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '50vh',
  alignItems: 'center',
});



const Layout = ({ children, title }) => {
  const isAppLoading = useSelector(state => state.app.isAppLoading);
  return (
    <Page>
      <Grid layout="fluid">
        <GridColumn>
          { isAppLoading &&
            <SpinnerContainer>
              <h3>The App is loading...</h3>
              <hr/>
              <Spinner size={'large'}/>
            </SpinnerContainer>
          }
          { !isAppLoading &&
            <Fragment>
              <Header title={title} key={'header'}/>
              {children}
            </Fragment>
          }
        </GridColumn>
      </Grid>
    </Page>
  );
};

export default Layout;