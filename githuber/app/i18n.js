import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { mergeAll as merge } from 'ramda';

import navigation from 'navigation/translations';
import customers from 'customers/translations';
import common from 'common/translations';
import userSettings from 'user-settings/translations';
import bid from 'bid/translations';
import pricing from 'pricing/translations';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en_US',
    resources: {
      en_US: merge([
        navigation.en_US,
        customers.en_US,
        userSettings.en_US,
        common.en_US,
        bid.en_US,
        pricing.en_US,
      ]),
      es_ES: merge([
        navigation.es_ES,
        customers.es_ES,
        userSettings.es_ES,
        common.es_ES,
        bid.es_ES,
        pricing.es_ES,
      ]),
      pt_BR: merge([
        navigation.pt_BR,
        customers.pt_BR,
        userSettings.pt_BR,
        common.pt_BR,
        bid.pt_BR,
        pricing.pt_BR,
      ]),
    },
    debug: __DEV__,
    cache: {
      enabled: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;
