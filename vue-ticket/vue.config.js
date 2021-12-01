module.exports={
	configureWebpack:{
		resolve:{
			alias:{                       //@是默认配置好的，代表src
				'assets':'@/assets',
				'common':'@/common',
				'components':'@/components',
				'network':'@/network',
				'views':'@/views'
			}
		}
	}
}