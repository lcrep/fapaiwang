const request = {}
let token = "";

uni.getStorage({
	key: 'token',
	success: function(res) {
		token = res.data
	}
});

request.globalRequest = (url, method, data) => {
	return uni.request({
		url:  url,
		method,
		data: JSON.stringify(Object.assign(data,baseParam)),
		dataType: 'json',
		header: {
				// 'Token': token,
				'Accept': 'application/json',
				'Content-Type': 'application/json', //自定义请求头信息
			}
	}).then(res => {
		if (res[1].data.status && res[1].data.code == 200) {
			return res[1]
		} else {
			throw res[1].data
		}
	}).catch(parmas => {
		switch (parmas.code) {
			case 401:
				uni.clearStorageSync()
				break
			default:
				uni.showToast({
					title: parmas.message,
					icon: 'none'
				})
				return Promise.reject()
				break
		}
	})
}

export default request
