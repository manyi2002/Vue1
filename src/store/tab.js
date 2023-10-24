import Cookies from "js-cookie"
export default {
    state: {
        isCollapse: false, //控制菜单展开收起
        tabList: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/home',
        }], //面包屑数据
        menu: [],
    },
    mutations: {
        //修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            // 判断添加数据是否为首页
            if (val.name !== 'home') {
                // 判断如果不存在
                const index = state.tabList.findIndex(item => item.name === val.name)
                    // 如果不存在
                if (index === -1) {
                    state.tabList.push(val)
                }
            }
        },
        //删除指定的tag数据
        closeTag(state, item) {
            console.log(item, 'item')
            const index = state.tabList.findIndex(val => val.name === item.name)
            state.tabList.splice(index, 1)
        },
        //设置menu的数据
        setMenu(state, val) {
            state.menu = val
            Cookies.set('menu',JSON.stringify(val))
        }
    }
}