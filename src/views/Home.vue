<template>
	<div class="home">
		
		<div style="border-bottom: solid 1px #ccc;min-height:2.5rem">
			<span class="el-icon-arrow-left bun-home-l"></span>
			<span style="font-size: 1rem;line-height: 2.5rem;">庆丰包子铺（窦店）</span>
			
			<span class="el-icon-search bun-home-r"></span>
		</div>
		<HelloWorld></HelloWorld>
		
		<div>
			<div style="height: 100%;margin-top: 4rem;">
				<div style="overflow: hidden;">
					<div style="padding: 0 5%;float: left;" v-for="i in arr" :key='i.title'>
						<div v-if="inx == i.title">
							<div v-for="(a,index) in i.arr" :key='index' style="margin-bottom: 4rem;">
								<div style="overflow: hidden;">
									<div style="float: left;width: 20%;">
										<img src="https://f10.baidu.com/it/u=4282036640,831512286&fm=72" alt="" style="width: 100%;height: 100%;display: block;" />
									</div>
									<div style="float: left;text-align: left;width: 75%;margin-left: 5%;">
										<p class="bun-home-title">{{a.title}}</p>
										<p class="bun-home-ice">{{a.ice}}</p>
										<p class="bun-home-jg">￥{{a.jg}}</p>
										<p>{{a.js}}</p>
										<jia v-model="a.num"></jia>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div style="padding-right: 10px;min-height:2.25rem;">
			<div style="float: left; width:80%;background:#ccc;min-height:2.25rem;">
				<span>总价</span><span class="bun-home-zj">￥{{totalPrice}}</span>
			</div>
			<div style="float: left; min-height:2.25rem;width:20%;">
				<router-link class="bun-home-btn" to="/accounts" style="">
				去结算
			</router-link>
			</div>
		</div>
		
	</div>
</template>

<script>
	// @ is an alias to /src
	import {mapState,mapGetters} from 'vuex'
	import HelloWorld from "@/components/HelloWorld.vue";
	import jia from "./../views/jia.vue"

	export default {
		name: "home",
		components: {
			HelloWorld,
			jia
		},
		watch: {
			'arr': {
				handler(v1) {
					this.are = [];
					v1.forEach(el => {
						el.arr.forEach(ele => {
							if(ele.num) {
								this.are.push(ele)
							}
						})
					})
					// 同步到vuex里
					this.$store.commit('addOrder', this.are)
				},
				deep: true
			}
		},
		data() {
			return {
				arr: '',
				are:[],
				inx: '水饺',
				num: '',
			}
		},
		methods: {
			fn(i) {
				this.inx = i
			},
		},
		created() {
			this.$http.get('/web.json').then((data) => {
				this.arr = data.data.arr
			})
		},
		computed: {
			...mapState(['orderList']),
			...mapGetters(['totalPrice'])
		},
	};
</script>
<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.bun-home-title{
		font-weight: bold;
		margin-bottom: 8px;
	}
	.bun-home-ice{
		color: #ccc;
		margin-bottom: 8px;
	}
	.bun-home-jg{
		color: red;
		margin-bottom: 8px;
	}
	.bun-home-l{
		font-size: 24px;
		color: #2783c2;
		float: left;
		margin-top: 10px;
		margin-left: 10px;
	}
	.bun-home-r{
		font-size: 24px;
		color: #2783c2;
		float: right;
		margin-top: 10px;
		margin-right: 30px;
	}
	.bun-home-zj{
		margin-left: 50%;
		line-height:2.25rem;
	}
	.bun-home-btn{
		color: #fff;
		background: #2783c2;
		float: right;
		min-height:2.25rem;
		width: 100%;
		text-align: center;
		line-height:2.25rem;
	}
</style>