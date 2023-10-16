import { Config } from 'next-i18n-router/dist/types';

const i18nConfig: Config = {
  locales: ['zh-CN', 'en'],
  defaultLocale: 'zh-CN',
  routingStrategy: 'dynamicSegment'
};

export default i18nConfig;
