import express from 'express';
import path from 'path';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-router-server';
import { StaticRouter } from 'react-router';
import {App} from './components/App';
import store from './store';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('*', (req, res) => {
  renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.url}>
        <App/>
      </StaticRouter>
    </Provider>
  ).then(({html}) => res.render('index', {html}));
});

app.listen(3000, () => console.log('running on 3000'));
