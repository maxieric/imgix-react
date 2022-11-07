import React from 'react';
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SettingProvider from './context/setting-context';
import Layout from './components/layout';
import Dashboard from './components/dashboard';
import SettingImage from './components/setting-image';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <SettingProvider>
    <Layout>
      <Dashboard />
      <SettingImage />
    </Layout>
  </SettingProvider>,
);
