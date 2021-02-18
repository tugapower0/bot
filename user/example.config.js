/**
 * ###############################################################################################
 *  ____                                        _     _____              _             _
 * |  _ \  (_)  ___    ___    ___    _ __    __| |   |_   _| (_)   ___  | | __   ___  | |_   ___
 * | | | | | | / __|  / __|  / _ \  | '__|  / _` |     | |   | |  / __| | |/ /  / _ \ | __| / __|
 * | |_| | | | \__ \ | (__  | (_) | | |    | (_| |     | |   | | | (__  |   <  |  __/ | |_  \__ \
 * |____/  |_| |___/  \___|  \___/  |_|     \__,_|     |_|   |_|  \___| |_|\_\  \___|  \__| |___/
 *
 * ---------------------
 *      Quick Start
 * ---------------------
 *
 * 	> For detailed instructions, visit the documentation: https://discordtickets.eartharoid.me
 *
 * ---------------------
 *       Support
 * ---------------------
 *
 * 	> Discord support server: https://go.eartharoid.me/discord
 * 	> Documentation: https://discordtickets.eartharoid.me
 *
 * ###############################################################################################
 */

module.exports = {
	debug: false,
	defaults: {
		colour: '#009999',
		locale: 'en-GB'
	},
	logs: {
		enabled: true,
		keep_for: 30
	},
	max_listeners: 10,
	plugins: [
	],
	presence: {
		presences: [
			{
				activity: '/new | /help',
				type: 'PLAYING',
				status: 'online'
			},
			{
				activity: 'with tickets | /help',
				type: 'PLAYING'
			},
			{
				activity: 'for new tickets | /help',
				type: 'WATCHING'
			},
			{
				activity: 'Minecraft',
				type: 'STREAMING',
				status: 'dnd',
				url: 'https://www.twitch.tv/twitch'
			},
		],
		randomise: true,
		duration: 60
	},
	super_secret_setting: true,
	update_notice: true,
};