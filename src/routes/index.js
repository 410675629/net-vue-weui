/**
 * @file
 * Created by zhangzhang on 2017-04-05.
 */
const Hello = r => require(['views/hello'], r);
const Index = r => require(['views/home/index'], r);   /*首页*/
const CampusNews = r => require(['views/campusNews'], r);   /*版权*/
//const Copyright = r => require(['views/copyright'], r);   /*版权*/
//const Header = r => require(['views/header'], r);   /*头部*/
//const schedule= r => require(['views/campus/index'], r);   /*校园招聘*/

//const Netease= r => require(['views/Netease/index'], r);   /*关于网易*/

const NotFound = r => require(['views/notfound'], r);
const HomePage = r => require(['views/homePage/index'], r);
const MailPage = r => require(['views/mailPage/index'], r);



// 根目录
const rootPath = '';

// 页面路由
const routes = [{
		path: '',
		redirect: {
			name:'home' //重定向到首页 
		}
	}, {
		path: '/homePage',  // 主页
		components: {
	        default: HomePage,      // 内容区域
	      },
		name: 'home'
	},{
		path: '/mailPage',  // 站内信
		components: {
	        default: MailPage, 
	      },
		name: 'home'
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