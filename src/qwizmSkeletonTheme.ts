import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'qwizmSkeletonTheme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #009999
		'--color-primary-50': '217 240 240', // #d9f0f0
		'--color-primary-100': '204 235 235', // #ccebeb
		'--color-primary-200': '191 230 230', // #bfe6e6
		'--color-primary-300': '153 214 214', // #99d6d6
		'--color-primary-400': '77 184 184', // #4db8b8
		'--color-primary-500': '0 153 153', // #009999
		'--color-primary-600': '0 138 138', // #008a8a
		'--color-primary-700': '0 115 115', // #007373
		'--color-primary-800': '0 92 92', // #005c5c
		'--color-primary-900': '0 75 75', // #004b4b
		// secondary | #990000
		'--color-secondary-50': '240 217 217', // #f0d9d9
		'--color-secondary-100': '235 204 204', // #ebcccc
		'--color-secondary-200': '230 191 191', // #e6bfbf
		'--color-secondary-300': '214 153 153', // #d69999
		'--color-secondary-400': '184 77 77', // #b84d4d
		'--color-secondary-500': '153 0 0', // #990000
		'--color-secondary-600': '138 0 0', // #8a0000
		'--color-secondary-700': '115 0 0', // #730000
		'--color-secondary-800': '92 0 0', // #5c0000
		'--color-secondary-900': '75 0 0', // #4b0000
		// tertiary | #999900
		'--color-tertiary-50': '240 240 217', // #f0f0d9
		'--color-tertiary-100': '235 235 204', // #ebebcc
		'--color-tertiary-200': '230 230 191', // #e6e6bf
		'--color-tertiary-300': '214 214 153', // #d6d699
		'--color-tertiary-400': '184 184 77', // #b8b84d
		'--color-tertiary-500': '153 153 0', // #999900
		'--color-tertiary-600': '138 138 0', // #8a8a00
		'--color-tertiary-700': '115 115 0', // #737300
		'--color-tertiary-800': '92 92 0', // #5c5c00
		'--color-tertiary-900': '75 75 0', // #4b4b00
		// success | #00aa00
		'--color-success-50': '217 242 217', // #d9f2d9
		'--color-success-100': '204 238 204', // #cceecc
		'--color-success-200': '191 234 191', // #bfeabf
		'--color-success-300': '153 221 153', // #99dd99
		'--color-success-400': '77 196 77', // #4dc44d
		'--color-success-500': '0 170 0', // #00aa00
		'--color-success-600': '0 153 0', // #009900
		'--color-success-700': '0 128 0', // #008000
		'--color-success-800': '0 102 0', // #006600
		'--color-success-900': '0 83 0', // #005300
		// warning | #ff8800
		'--color-warning-50': '255 237 217', // #ffedd9
		'--color-warning-100': '255 231 204', // #ffe7cc
		'--color-warning-200': '255 225 191', // #ffe1bf
		'--color-warning-300': '255 207 153', // #ffcf99
		'--color-warning-400': '255 172 77', // #ffac4d
		'--color-warning-500': '255 136 0', // #ff8800
		'--color-warning-600': '230 122 0', // #e67a00
		'--color-warning-700': '191 102 0', // #bf6600
		'--color-warning-800': '153 82 0', // #995200
		'--color-warning-900': '125 67 0', // #7d4300
		// error | #aa0000
		'--color-error-50': '242 217 217', // #f2d9d9
		'--color-error-100': '238 204 204', // #eecccc
		'--color-error-200': '234 191 191', // #eabfbf
		'--color-error-300': '221 153 153', // #dd9999
		'--color-error-400': '196 77 77', // #c44d4d
		'--color-error-500': '170 0 0', // #aa0000
		'--color-error-600': '153 0 0', // #990000
		'--color-error-700': '128 0 0', // #800000
		'--color-error-800': '102 0 0', // #660000
		'--color-error-900': '83 0 0', // #530000
		// surface | #888888
		'--color-surface-50': '237 237 237', // #ededed
		'--color-surface-100': '231 231 231', // #e7e7e7
		'--color-surface-200': '225 225 225', // #e1e1e1
		'--color-surface-300': '207 207 207', // #cfcfcf
		'--color-surface-400': '172 172 172', // #acacac
		'--color-surface-500': '136 136 136', // #888888
		'--color-surface-600': '122 122 122', // #7a7a7a
		'--color-surface-700': '102 102 102', // #666666
		'--color-surface-800': '82 82 82', // #525252
		'--color-surface-900': '67 67 67' // #434343
	}
};
