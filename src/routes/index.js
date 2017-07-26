/**
 * @file
 * Created by zhangzhang on 2017-04-05.
 */
const IndexPage = r => require(['views/indexPage/index'], r);
const HomePage= r => require(['views/homePage/index'], r);   /*首页*/
const NotFound = r => require(['views/notfound'], r); /** 未找到页面*/
const MyPage = r => require(['views/myPage/index'], r); /** 个人中心 **/
const MailPage = r => require(['views/mailPage/index'], r); /** 站内信列表 **/
const MailDetailPage = r => require(['views/mailDetailPage/index'], r); /** 站内信详情 **/


// 根目录
const rootPath = '';

// 页面路由
const routes = [{
		path: '',
		redirect: {
			name:'home' //重定向到首页 
		}
	}, {
		path: '/index',  // 主页
		components: {
	        default: IndexPage    // 内容区域
	    },
	    children:[{
	    	path:'homePage',
	    	component:HomePage,
	    	name:'home' 
	    },{
	    	path:'myPage',
	    	component:MyPage
	    }],
		name: 'index'
	},{
		path: '/mailPage',  // 站内信
		components: {
	        default: MailPage, 
	      },
		name: 'mail'
	},{
		path: '/mailDetailPage/:id',  // 站内信详情
		components: {
	        default: MailDetailPage, 
	      },
		name: 'mailDetailPage'
	}/*{
		path: 'campus', //  校园招聘
		components: {
	        default: Recommend,
	        header: Header,
	        copyright: Copyright
	      },
		name: 'recommend',
		children: [{
			path: '/detail',
			component: Detail
		}]
	},*//*{
		path: '/schedule/:id',  
		components: {
	        default:schedule
	      },
		name: 'schedule'
	}&*/].map(route => {
		route.path = rootPath + route.path;
		return route;
	});


	// 404 页
	routes.push({path: '*', component: NotFound, name: 'notfound'});

export default routes;