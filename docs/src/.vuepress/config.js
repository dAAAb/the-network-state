const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '網路國家',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Ch 1 快速開始',
        link: '/Ch-1/',
      },
      {
        text: 'Ch 2 作為軌跡的歷史',
        link: '/Ch-2/'
      },
      {
        text: 'Ch 3 三極時刻',
        link: '/Ch-3/'
      },
      {
        text: 'Ch 4 去中心化、再中心化',
        link: '/Ch-4/'
      },
      {
        text: 'Ch 5 從民族國家到網路國家',
        link: '/Ch-5/'
      },
      {
        text: 'Ch 6 附錄',
        link: '/Ch-6/'
      },
    ],
    sidebar: {
      '/Ch-1/': [
        {
          title: '快速開始',
          collapsable: false,
          children: [
            '',
            '1-2 一句話中的網路國家',
            '1-3 一張圖中的網路國家',
            '1-4 一千字中的網路國家',
            '1-5 一篇文章中的網路國家',
          ]
        }
      ],
      '/Ch-2/': [
        {
          title: '作為軌跡的歷史',
          collapsable: false,
          children: [
            '',
            '2-2 微觀歷史和宏觀歷史',
            '2-3 政治權力與技術真理',
            '2-4 神明、國家、網路',
            '2-5 神民、國民、網民',
            '2-6 如果新聞是假的，想像歷史',
            '2-7 碎片、邊疆、轉折、回溯',
            '2-8 左是新的右是新的左',
            '2-9 一誡',
          ]
        }
      ],
      '/Ch-3/': [
        {
          title: '三極時刻',
          collapsable: false,
          children: [
            '',
            '3-2 過時的和永恆的',
            '3-3 兩極的美國和三極的三角地帶',
            '3-4 道德力量、軍事力量、金錢力量',
            '3-5 臣服、同情、主權',
            '3-6 衝突與聯盟',
          ]
        }
      ],
      '/Ch-4/': [
        {
          title: '去中心化、再中心化',
          collapsable: false,
          children: [
            '',
            '4-2 社會政治軸線',
            '4-3 技術經濟軸線',
            '4-4 可預見的未來',
            '4-5 美國式無政府、中國式控制、國際中間態',
            '4-6 勝利條件與意外結局',
            '4-7 通往再中心化的中心',
          ]
        }
      ],
      '/Ch-5/': [
        {
          title: '從民族國家到網路國家',
          collapsable: false,
          children: [
            '',
            '5-2 關於民族國家',
            '5-3 關於網路國家',
          ]
        }
      ],
      '/Ch-6/': [
        {
          title: '附錄',
          collapsable: false,
          children: [
            '',
            '6-2 關於 1729',
            '6-3 註腳',
          ]
        }
      ],
    }
  },
}
