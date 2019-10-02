import React from 'react';
import DocumentMeta from 'react-helmet';
import { hot } from 'react-hot-loader/root';
import { app as appCopy } from 'app/copy';
import { Registration } from '../Registration';
import { Menu } from '../Menu';
import data from '../../../assets/data/menu-items.json';

class App extends React.Component {
  render() {
    return (
      <>
        <DocumentMeta
          defaultTitle={`${appCopy.title}`}
          titleTemplate={`%s | ${appCopy.title}`}
        >
          <html lang='en' />
          <meta charSet='utf-8' />
          <meta name='description' content={appCopy.meta.description} />
          <meta name='keywords' content={appCopy.meta.keywords} />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1.0'
          />
        </DocumentMeta>
        <Registration />
        <Menu menuList={data.menu} />
      </>
    );
  }
}

export default hot(App);
