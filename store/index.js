export const state = () => ({
  app: {
    logo: require('@/static/logo.svg'),
    site_name: 'islamForBeginners',
    site_title: 'islam for beginners',
    description: 'learn islam',
    support_line: '0850 123 45 67',
    social_links: [
      { name: 'facebook', title: 'Facebook', url: '#', color: '#3B5998', icon: 'mdi-facebook' },
      { name: 'twitter', title: 'Twitter', url: '#', color: '#1DA1F2', icon: 'mdi-twitter' },
      { name: 'instagram', title: 'Instagram', url: '#', color: '#833AB4', icon: 'mdi-instagram' },
      { name: 'youtube', title: 'Youtube', url: '#', color: '#FF0000', icon: 'mdi-youtube' }
    ]
  }
})

