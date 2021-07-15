import { Container, CssBaseline } from '@material-ui/core';
import { startRouter } from 'mobx-router';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
// import AssetAllocation from './components/AssetAllocation';
// import AssetBalance from './components/AssetBalance';
// import MyBoost from './components/MyBoost';
// import NetWorth from './components/NetWorth';
// import Pending from './components/Pending';
// import SettVoults from './components/SettVoults';
// import StrategyAllocation from './components/StrategyAllocation';
// import StrategyBalance from './components/StrategyBalance';
import routes from './config/routes';
import App from './App';
import store, { RootStore } from './mobx/store';

export const StoreContext = createContext({} as RootStore);
export const StoreProvider = StoreContext.Provider;

startRouter(routes, store, {
  html5history: true,
});

ReactDOM.render(
  <StoreProvider value={store}>
    <CssBaseline />
    <Container fixed>
      <App />
    </Container>
    {/* <NetWorth />
    <Pending />
    <MyBoost />
    <SettVoults />
    <AssetAllocation />
    <AssetBalance />
    <StrategyAllocation />
    <StrategyBalance /> */}
  </StoreProvider>,
  document.getElementById('root'),
);
