<template>
	<div style="float: right;">
		<button @click="btn1" style="font-size: 20px;padding: 5px 10px;">-</button>
		<input type="text" v-model="num" style="width: 10px;height: 40px;border: none;margin: 0 10px;" />
		<button @click="btn2" style="font-size: 20px;padding: 5px 10px;">+</button>
	</div>
</template>

<script>
	export default {
		props: ['value'],
		methods: {
			btn1() {
				this.num--
					if(this.num <= 0) {
						this.num = 0
					}
			},
			btn2() {
				this.num++
			},
		},
		computed: {
			num: {
				get() {
					return this.value
				},
				set(v) {
					this.$emit('input', v)
				}
			}
		},
	}
</script>

<style>
	button{
		border-radius: 50%;
		border: none;
		background-color: #2783c2;
	}
</style>