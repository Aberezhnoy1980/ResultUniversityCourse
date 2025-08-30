const users = [
	{
		name: "David",
		status: "online",
		lastActivity: 10,
	},
	{
		name: "Lucy",
		status: "offline",
		lastActivity: 22,
	},
	{
		name: "Bob",
		status: "online",
		lastActivity: 104,
	},
];

const onlineUsers = users.filter((user) => user.status === "online");
const usersOnlineNames = onlineUsers.map(user => user.name).join(', ');
alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

// alt
// const onlineUsers = users.filter((user) => user.status === "online");
// const usersOnlineNames = onlineUsers.reduce((acc, user) => acc + ', ' + user.name, '');
// alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);

// https://codepen.io/bxzcnzcb-the-typescripter/pen/RNWGqad