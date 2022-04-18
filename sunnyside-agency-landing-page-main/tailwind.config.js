module.exports = {
	content: ["*.html"],
	theme: {
		extend: {
			width : {
				menu: 'calc(100% - 2rem)'
			},
			colors: {
				"grey-blue-light": "hsl(210, 4%, 67%)",
				"dark-de-cyan": "hsl(167, 40%, 24%)",
				"dark-blue": "hsl(198, 62%, 26%)",
				"soft-red": "hsl(7, 99%, 70%)",
				yellow: "hsl(51, 100%, 49%)",
				"dark-mod-cyan": "rgba(145,212,196,255)",
				"vdark-de-blue": "hsl(212, 27%, 19%)",
				"very-dark-grey-blue": "hsl(213, 9%, 39%)",
				"dark-grey-blue": "hsl(232, 10%, 55%)",
				"grey-blue": "hsl(210, 4%, 67%)",
			},
			fontFamily: {
				fraunces: ["Fraunces", "serif"],
				barlow: ["Barlow", "sans serif"],
			},
			fontWeight: {
				xxBold: '900'
			}
		},
	},
	plugins: [],
};
