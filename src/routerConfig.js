// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLayout from './layouts/UserLayout';
import BasicLayout from './layouts/BasicLayout';

const routerConfig = [{
	path: '/',
	component: BasicLayout,
}, {
	path: '/user',
	component: UserLayout,
}];

export default routerConfig;