import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  base: 'vuepress-tcb',
  lang: 'vi-VN',
  title: 'TCB x IC',
  description: 'Kịch bản CSKH Techcombank',
  search: true,
  searchMaxSuggestions: 10,

  theme: defaultTheme({
    logo: '/images/logo-techcombank-1.png',
    logoDark: '/images/logo-techcombank-3.png',
    // sidebar: {
    //   '/topic/': [
    //     {
    //       title: 'Hướng dẫn',
    //       collapsable: false,
    //       children: ['bo-quy-tac', 'bao-hiem', 'chung-chi-tien-gui-bao-loc', 'cuoc-goi-sms-email-tu-techcombank'],
    //     },
    //   ],
    //   '/': [],
    // },
    navbar: [
      { text: 'Trang chủ', link: '/' },
      {
        text: 'Chủ đề',
        children: [
          { text: 'Bộ quy tắc', link: '/topic/bo-quy-tac' },
          { text: 'Bảo hiểm', link: '/topic/bao-hiem' },
          { text: 'Chứng chỉ tiền gửi Bảo Lộc', link: '/topic/chung-chi-tien-gui-bao-loc' },
          { text: 'Cuộc gọi/ SMS/ Email từ Techcombank', link: '/topic/cuoc-goi-sms-email-tu-techcombank' },
          {
            text: 'Các sản phẩm chủ yếu dành cho KH cá nhân',
            link: '/topic/cac-san-pham-chu-yeu-danh-cho-kh-ca-nhan',
          },
          { text: 'Chuyển nhận tiền', link: '/topic/chuyen-nhan-tien' },
          { text: 'Techcombank Mobile', link: '/topic/techcombank-mobile' },
          { text: 'Inspire & MyCash', link: '/topic/inspire-mycash' },
          { text: 'KH doanh nghiệp', link: '/topic/kh-doanh-nghiep' },
          { text: 'Khác (giờ làm việc, thông tin hotline, chi nhánh,...)', link: '/topic/khac' },
          { text: 'Khen ngợi/Khích lệ & Khiếu nại', link: '/topic/khen-ngoi-khieu-nai' },
          { text: 'Sự kiện', link: '/topic/su-kien' },
          {
            text: 'Yêu cầu hỗ trợ đến Bộ phận CSKH Zalo (không dành cho chatbot)',
            link: '/topic/yeu-cau-ho-tro-den-bo-phan-cskh-zalo',
          },
          { text: 'Kịch bản Minigame', link: '/topic/kich-ban-minigame' },
          { text: 'TCB Family (dành cho KH có con từ 11 tuổi đến dưới 18 tuổi)', link: '/topic/tcb-family' },
        ],
      },
    ],
    contributors: false,
  }),
  plugins: [
    searchPlugin({
      // options
    }),
  ],
  bundler: viteBundler(),
});
