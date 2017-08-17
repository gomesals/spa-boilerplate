<template lang="pug">
	div
		header
		nav(role="navigation")
			.logo 
				nuxt-link(exact to="/" title="SPA") SPA
				ul
			.links
				ul
					li(v-for="link in navigation")
						nuxt-link(v-bind:to="link.url" v-bind:title="link.title") {{link.title}}
		#menu(title="Alternar menu" v-on:click="toggleMenu" v-bind:class="{'mobile': isMenuVisible}")
			.icon-bar
			.icon-bar
			.icon-bar
		#nav-links(v-bind:class="{'mobile': isMenuVisible}")
			ul
				li(v-for="link in navigation")
					nuxt-link(v-bind:to="link.url" v-bind:title="link.title") {{link.title}}
</template>
<style src="~/assets/css/components/navigation.scss"></style>
<script>
	export default {
		data() {
			return {
				navigation: [{
					title: 'Sobre',
					url: '/sobre',
				}, {
					title: 'Item',
					url: '/',
				}, {
					title: 'Item',
					url: '/',

				}],
				isMenuVisible: false,
			};
		},
		methods: {
			toggleMenu() {
				this.isMenuVisible = !this.isMenuVisible;
			},
		},
	};
</script>
