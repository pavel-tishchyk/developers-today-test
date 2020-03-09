import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { Grid, Header, Icon } from 'semantic-ui-react';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

const App = (props) => {
  const {Component, pageProps, store}: any = props
  console.log(store.getState())
  return (
    <Provider store={store}>
      <Head>
        <link rel="stylesheet" 
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Head>
      <Grid container centered>
        <Grid.Row>
        <Header 
          as='h2' icon 
          textAlign='center'
          style={{
            paddingTop: '30px'
          }}>
          <Icon name='blogger b' circular />
          <Header.Content>BLOG</Header.Content>
        </Header>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column 
            mobile={16} computer={12} 
            largeScreen={10} 
            style={{
              minHeight: '50vh'
            }}>
            <Component {...pageProps} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Provider>

  )
}

App.getInitialProps = async ({Component, ctx}) => {
  return {
    pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
  }
}

export default withRedux(initStore)(App);
