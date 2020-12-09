import axios from 'axios'
import qs from 'qs'

// 响应拦截
axios.interceptors.response.use(res=>{
    console.log('=============请求的路径:'+res.config.url+'=======');
    console.log(res);
    return res
});


const baseUrl = '/api'
// 菜单管理
export const reqMenuAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}

// 菜单列表渲染
export const reqMenuList=(data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:data
    })
}
// 菜单列表渲染获取一条数据
export const reqMenuListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:data
    })
}
// 菜单编辑
export const reqMenuEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:data
    })
}
// 删除
export const reqMenuDel=(data)=>{
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:data
    })
}
// export const reqMenuDel=(data)=>{
//     return axios({
//         url:baseUrl+'/api/menudelete',
//         method:'post',
//         data:data
//     })
// }
// /////////////////////////角色管理//////////////////////////////////////////
// 提交数据
export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:data
    })
}

// 渲染数据
export const reqRoleList=()=>{
    return axios({
        url:baseUrl+'/api/rolelist',
        method:'get',
        
    })
}
// 删除一条数据
export const reqRoleDel=(id)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:id
        
    })
}

// 编辑一条数据时，渲染当时的 数据
export const reqRoleListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:id
        
    })
}

// 点击修改，修改内容
/* export const reqRoleEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:id
        
    })
} */
export const reqRoleEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:id
    })
}
// /////////////////////////////////////////管理员管理///////////////////////////
// 添加数据
export const reqMangerAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data:data
    })
}

// 渲染管理员列表
export const reqMangerList=(data)=>{
    return axios({
        url:baseUrl+'/api/userlist',
        method:'get',
        params:data
    })
}
// 获取列表格数
export const reqMangerCount=()=>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',
    })
}

// 获取一条数据
export const reqMangerListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:id
        
    })
}

// 修改一条内容
export const reqMangerEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:id
    })
}

// 删除
export const reqMangerDel=(id)=>{
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:id
        
    })
}

// ////////////////////////////////商品分类、、、、、、、、、、、、、、、、、、、
export const reqClassifyAdd=(data)=>{
    // 要用qs上传图片
    /*  // 由于上传的是文件 所以需要用qs转一下
     var form  = new FormData()
     // {pid:1,catename:'s',img,status}
     for(var i in data){
         form.append(i,data[i])
     } */
     var form = new FormData()
     for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateadd',
        method:'post',
        data:form
    })
}

// 商品分类列表渲染
export const reqClassifyList=(data)=>{
    return axios({
        url:baseUrl+'/api/catelist',
        method:'get',
        params:data
    })
}

// 商品分类一条数据
export const reqClassifyListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/cateinfo',
        method:'get',
        params:data
    })
}

// 修改一条数据
export const reqClassifyEdit=(data)=>{
    var form = new FormData()
    for(var i in data){
        form.append(i,data[i])
    }
    return axios({
        url:baseUrl+'/api/cateedit',
        method:'post',
        data:form
    })
}

// 删除一条数据
export const reqClassifyDel=(id)=>{
    return axios({
        url:baseUrl+'/api/catedelete',
        method:'post',
        data:id
        
    })
}
// ---------------------------------------商品规格---------------------
// 添加
export const reqSpecAdd=(data)=>{
   
    return axios({
        url:baseUrl+'/api/specsadd',
        method:'post',
        data:data
    })
}
// 请求数据总数
export const reqSpecListCount=()=>{
    return axios({
        url:baseUrl+'/api/specscount',
        method:'get',
    })
}
// 获取数据列表
export const reqSpecList=(data)=>{
    return axios({
        url:baseUrl+'/api/specslist',
        method:'get',
        params:data
    })
}
// 获取一条
export const reqSpecListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/specsinfo',
        method:'get',
        params:id
        
    })
}
// 修改一条内容
export const reqSpecEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/specsedit',
        method:'post',
        data:id
    })
}

// 删除
export const reqSpecDel=(id)=>{
    return axios({
        url:baseUrl+'/api/specsdelete',
        method:'post',
        data:id
        
    })
}
// --------------------------------------登录-------------------------------
// 登录
export const requrseLogin=(data)=>{
    return axios({
        url:baseUrl+'/api/userlogin',
        method:'post',
        data:data
        
    })
}