export const state = () =>  ({
  userMenu: [
    {
      path: '/',
      name: 'navbar.menu',
      icon: 'home'
    },
    {
      path: '/myCourses',
      name: 'navbar.myCourses',
      icon: 'menu'
    },
    {
      path: '/myQuestions',
      name: 'navbar.myQuestions',
      icon: 'forum'
    }
  ],
  profileMenu: [
    {
      path: '/profile',
      name: 'profile.settings'
    },
    {
      path: '/profile/myCourses',
      name: 'profile.myCourses'
    },
    {
      path: '/profile/lastCourse',
      name: 'profile.lastCourse'
    },
    {
      path: '/profile/myQuestions',
      name: 'profile.myQuestions'
    }
  ]
})
