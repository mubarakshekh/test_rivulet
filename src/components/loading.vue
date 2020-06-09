<template>
	<div>
		<moon-loader :loading="loading" :color="color1"></moon-loader>
	</div>
</template>
<script>
	import MoonLoader from "vue-spinner/src/MoonLoader.vue";
	export default {
		name: "Loading",
		props: ["loading"],
		data() {
			return {
				color1: "#5bc0de"
			};
		},
		components: {
			MoonLoader
		}
	};
</script>