import Vue from 'vue'
import App from './App'

//引入框架
import aApp from '@/framework/AApp';
import aRouter from '@/framework/ARouter';
import aConfig from '@/framework/config/';
import aStore from '@/store'
import * as apis from '@/framework/apis/'
import utils from '@/framework/common/utils/'
import utils_p from '@/utils/'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$A = aApp;
Vue.prototype.$R = aRouter;
Vue.prototype.$C = aConfig;
Vue.prototype.$S = aStore;
Vue.prototype.$U = utils;
Vue.prototype.$PU = utils_p;
Vue.prototype.$apis = apis;

const app = new Vue({
  store : aStore,
  ...App
})

app.$mount()
