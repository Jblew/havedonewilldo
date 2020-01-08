import { HavedonewilldoConfig } from './model'

export const data: HavedonewilldoConfig = {
  title: 'Jędrzej Lewandowski prj',
  groups: [
    {
      public: {
        title: 'Status A public',
        text: 'Some text',
      },
      private: {
        title: 'Status A private',
        text: 'A secret text text',
      },
    },
    {
      private: {
        title: 'Status B private',
        text: 'A secret text text',
      },
    },
    {
      public: {
        title: 'Status C public',
        text: 'A public text',
      },
    },
  ],
}
