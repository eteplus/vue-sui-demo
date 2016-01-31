import Home from './views/home'
import Article from './views/article'
import User from './views/user'
import More from './views/more'
import Feedback from './views/more/feedback'
import About from './views/more/about'
import Rank from './views/home/rank'
import Tasks from './views/home/tasks'
import Invite from './views/home/invite'
import Profile from './views/user/profile'
import Profit from './views/user/profit'
import ProfitRecord from './views/user/profitRecord'
import Withdraw from './views/user/withdraw'
import $ from 'zepto'

export default function (router) {
  router.map({
    '/home': {
      component: Home
    },
    '/home/rank': {
      component: Rank
    },
    '/home/tasks': {
      component: Tasks
    },
    '/home/invite': {
      component: Invite
    },
    '/article': {
      component: Article
    },
    '/user': {
      component: User
    },
    '/user/withdraw': {
      component: Withdraw
    },
    '/user/profile': {
      component: Profile
    },
    '/user/profit': {
      component: Profit
    },
    '/user/profit/record': {
      component: ProfitRecord
    },
    '/more': {
      component: More
    },
    '/more/feedback': {
      component: Feedback
    },
    '/more/about': {
      component: About
    }
  })
  router.redirect({
    '/': '/home'
  })

  router.beforeEach(function ({to, from, next}) {
    let toPath = to.path
    let fromPath = from.path
    console.log('to: ' + toPath + ' from: ' + fromPath)
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false
    }
    else {
      router.app.isIndex = true
    }
    next()
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
    $.refreshScroller()
  })
}
