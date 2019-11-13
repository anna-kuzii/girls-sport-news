import React from 'react';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { Routes } from './routes';
import store from './redux/store';

class App extends React.Component<{}> {
  public render(): JSX.Element {
    return (
      <>
        <Helmet
          defaultTitle='sport-news'
          titleTemplate='sport-news'
        >
          <html lang='en' />
          <meta charSet='utf-8' />
          <meta name='description' content='sport-news' />
          <meta name='keywords' content='sport-news' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1.0'
          />
        </Helmet>
        <Provider store={store}>
            <Routes />
        </Provider>
      </>
    );
  }
}

export default hot(App);
