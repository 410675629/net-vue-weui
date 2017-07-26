/**
 *
 * @author ：zhangz
 */

const homePageApi ={
	campusNewsList:'/api/campus/index/campusNewsList', //校招动态[A]
};

const personalApi  ={
	center:'/api/campus/personal/center', //个人中心首页
	mailList:'/api/campus/personal/mailList', //个人中心--站内信列表
	mailListDetail:'/api/campus/personal/mailList/detail' //个人中心--站内信列表--详情
}

export default {
	homePageApi, //一、首页接口
	personalApi //二、 个人中心
}