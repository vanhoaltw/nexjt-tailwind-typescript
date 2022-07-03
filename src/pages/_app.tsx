import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import SeoTags from '~/components/base/SeoTags';
import store from '~/redux/store';

import '../styles/globals.css';

interface MyAppProps extends AppProps {
  Component: {
    Layout?: React.ExoticComponent<{
      pageProps?: any;
      children?: React.ReactNode;
    }>;
  } & NextComponentType<NextPageContext, any, {}>;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Component.Layout || Fragment;

  return (
    <Provider store={store}>
      <SeoTags />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
