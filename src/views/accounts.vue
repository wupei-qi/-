<template>
	<div>
	<div style="width: 100%;overflow: hidden;">
		<div style="font-size: 1rem;margin-top: 1rem;min-height:1.25rem;">
			<router-link to="/" slot="left">
				<span class="el-icon-arrow-left" style="color: #000;float:left;">确认订单</span>
			</router-link>
		</div>
		<div style="min-height: 19.75rem;padding: 0.7rem;">
			<div style="background: #FFFFFF;height: 100%;padding: 0.5rem;">
				<p style="border-bottom: solid 1px #CCCCCC;text-align: left;font-size: 1rem;padding-bottom: 0.5rem;">庆丰包子铺（窦店）</p>
				<p style="line-height: 3.25rem;font-size: 1rem;border-bottom: solid 1px #CCCCCC;display: flex;" v-for="(i,index) in $store.state.orderList" :key='index'>
					<span style="flex: 1;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;">{{i.title}}</span>
					<span style="flex: 1;text-align: center;">x{{i.num}}</span>
					<span style="flex: 1;float:right">￥{{i.num*i.jg}}</span>
				</p>
				<p style="overflow: hidden;margin-top: 1rem;">
					<span style="float: left;">餐盒</span><span style="float: right;">￥5</span>
				</p>
				<p style="overflow: hidden;text-align: right;margin-top: 0.75rem;font-size: 1.25rem;">
					<span>小计</span>
					<span>￥{{totalPrice+5}}</span>
				</p>
			</div>
		</div>
		<div style="position: relative;min-height: 60px;background: black;bottom: 0;overflow: hidden;">
			<p style="color: #FFFFFF;line-height: 60px;text-align: left;font-size:1rem;float: left;">
				￥{{totalPrice+5}}
			</p>
			<p style="float: right;line-height: 60px;padding: 0 2rem;background: green;color: #FFFFFF;">
				去支付
			</p>
		</div>
	</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		name: "accounts",
		data() {
			return {
				arr: [],
				price: '',
				num: 0,
				name: '',
				are:[]
			}
		},
		mounted() {
			for(var i=0;i<this.$store.state.orderList.length;i++){
				this.num+=this.$store.state.orderList[i].num
			}
		},
		computed: {
			
			...mapGetters(['totalPrice'])
		},
	}
</script>

<style>

</style>