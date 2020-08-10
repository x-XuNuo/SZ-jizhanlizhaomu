import Vue from 'vue'

import aFrame from '@/framework/components/a-frame.vue';
import aPage from '@/framework/components/a-page.vue';
import aButton from '@/framework/components/a-button.vue';
import aTabs from '@/framework/components/a-tabs.vue';
import aCrosswiseTab from '@/framework/components/a-crosswise-tab.vue';
import aRichContent from '@/framework/components/a-rich-content.vue';
import aTitleBar from '@/framework/components/a-title-bar.vue';
import aComment from '@/framework/components/a-comment.vue';
import aAudio from '@/framework/components/a-audio.vue';
import aCard from '@/framework/components/a-card.vue';
import aCardList from '@/framework/components/a-card-list.vue';
import aTwoColumnsList from '@/framework/components/a-two-columns-list.vue';
import aConnentDescription from '@/framework/components/a-connent-description.vue';
import aNavBar from '@/framework/components/a-nav-bar.vue';
import aSwiper from '@/framework/components/a-swiper.vue';
import aIconList from '@/framework/components/a-icon-list.vue';
import aGrid from '@/framework/components/a-grid.vue';
import aTwoColumnsCard from '@/framework/components/a-two-columns-card.vue';
import aCalendar from '@/framework/components/a-calendar.vue';
import aModal from '@/framework/components/a-modal.vue';

import uNavBar from '@/framework/components/u-nav-bar.vue';
import uIcons from '@/framework/components/u-icons/u-icons.vue';
import uStatusBar from '@/framework/components/u-status-bar.vue';
import uSwiperDot from '@/framework/components/u-swiper-dot.vue';
import uWucTab from "@/framework/components/u-wuc-tab.vue";
import uQsQrid from '@/framework/components/u-qs-grid/u-qs-grid.vue';
import uMescrollBody from '@/framework/components/u-mescroll-uni/u-mescroll-body.vue';
import uMescrollUni from '@/framework/components/u-mescroll-uni/u-mescroll-uni.vue';
import uMosoweSwiper from '@/framework/components/u-mosowe-swiper.vue';
import uCalendar from '@/framework/components/u-calendar/u-calendar.vue';
import uCalendarItem from '@/framework/components/u-calendar/u-calendar-item.vue';
import uCard from '@/framework/components/u-card.vue';

import aRouter from '@/framework/ARouter.js'
import uMescrollMixin from '@/framework/components/u-mescroll-uni/u-mescroll-mixins.js';

class AApp extends Vue {
	constructor(arg) {
		super();
		this.init();
	}

	init() {
		this.initComponent();
		this.initRouter();
		this.initMixins();
	}

	// 自定义组件初始化注册
	initComponent() {
		Vue.component('a-page', aPage);
		Vue.component('a-frame', aFrame);
		Vue.component('a-button', aButton);
		Vue.component('a-tabs', aTabs);
		Vue.component('a-crosswise-tab', aCrosswiseTab);
		Vue.component('a-rich-content', aRichContent);
		Vue.component('a-title-bar', aTitleBar);
		Vue.component('a-comment', aComment);
		Vue.component('a-audio', aAudio);
		Vue.component('a-card', aCard);
		Vue.component('a-card-list', aCardList);
		Vue.component('a-two-columns-list', aTwoColumnsList);
		Vue.component('a-connent-description', aConnentDescription);
		Vue.component('a-nav-bar', aNavBar);
		Vue.component('a-swiper', aSwiper);
		Vue.component('a-icon-list', aIconList);
		Vue.component('a-grid', aGrid);
		Vue.component('a-two-columns-card', aTwoColumnsCard);
		Vue.component('a-calendar',aCalendar);
		Vue.component('a-modal',aModal);
		
		Vue.component('u-nav-bar', uNavBar);
		Vue.component('u-icons', uIcons);
		Vue.component('u-status-bar', uStatusBar);
		Vue.component('u-swiper-dot', uSwiperDot);
		Vue.component('u-wuc-tab',uWucTab);
		Vue.component('u-qs-grid', uQsQrid);
		Vue.component('u-mescroll-body',uMescrollBody);
		Vue.component('u-mescroll-uni',uMescrollUni);
		Vue.component('u-mosowe-swiper',uMosoweSwiper);
		Vue.component('u-calendar', uCalendar);
		Vue.component('u-calendar-item', uCalendarItem);
		Vue.component('u-card',uCard);
	}

	// 初始化路由器
	initRouter() {
		aRouter.beforeEach((navType, to) => {
			console.log("navType => {}", navType);
			console.log("to => {}", to);
			if (to.requiresAuth) {
				console.log("need auth ----->   ");
			} else {
				console.log("no need --->", to);
				if (navType == "jumpLink") {

					// #ifdef APP-PLUS
					uni.navigateTo({
						url: to
					});
					// #endif

					// #ifdef H5
					window.location.href = to;
					// #endif

				} else {

					uni[navType]({
						url: to
					});
				}

			}
		})
	}
	
	// 初始化mixins 
	initMixins(){
		Vue.mixin(uMescrollMixin);
	}

	// 统一路由管理
	async main(query) {
		return new Promise((resolve, reject) => {
			console.log("query is =>  {}", query);
		});
	}
}

export default new AApp();
