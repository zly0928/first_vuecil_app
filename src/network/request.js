import axios from "axios"

export function request(config){
	//1. 创建axios实例
    const instance = axios.create({
        baseURL:process.env.VUE_APP_URL,
        timeout:5000
    })

    //2. 发送网络请求
    return instance(config);

}