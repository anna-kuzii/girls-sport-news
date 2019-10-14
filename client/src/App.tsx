import React from 'react';
import { Helmet } from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { Registration } from './components/Registration';
import { Menu } from './components/Menu/index';
import { Login } from './containers/Login';

class App extends React.Component<{}> {
  public render(): JSX.Element {
    // Todo uncomment when we will have routing on UI
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
        {/*<Registration />*/}
        {/*<Menu />*/}
        <Login />
      </>
    );
  }
}

export default hot(App);
