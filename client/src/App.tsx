import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { Registration } from './components/Registration';
import { Menu } from './components/Menu/index';

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
        <Registration />
        <Menu />
      </>
    );
  }
}

export default hot(App);
