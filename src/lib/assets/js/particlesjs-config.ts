export default {
	particles: {
		number: {
			value: 300,
			density: {
				enable: false
			}
		},
		color: {
			value: '#fff' as any
		},
		shape: {
			type: 'circle' as any
		},
		opacity: {
			value: 0.2,
			random: true,
			anim: {
				enable: true,
				speed: 0.1,
				opacity_min: 0,
				opacity_max: 0.4,
				sync: false
			}
		},
		size: {
			value: 4,
			random: true,
			anim: {
				enable: false,
				speed: 2,
				size_min: 0,
				sync: false
			}
		},
		line_linked: {
			enable: false
		},
		move: {
			enable: true,
			speed: 0.5,
			direction: 'top-left' as any,
			random: true,
			straight: false,
			out_mode: 'out' as any,
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 600
			}
		}
	},
	interactivity: {
		detect_on: 'canvas' as any,
		events: {
			onhover: {
				enable: false
			},
			onclick: {
				enable: false
			},
			resize: true
		}
	},
	retina_detect: true
}
