
const inputs = [
	{
		id: 1,
		name: "username",
		type: "text",
		placeholder: "Имя Фамилия",
		errorMessage:
			"Имя и Фамилия должны состоять из двух слов 3-30 латинских символов!",
		label: "Имя Фамилия",
		pattern: "^([A-Za-z]{3,30})\\s([A-Za-z]{3,30})$",
		required: true,
	},
	{
		id: 2,
		name: "email",
		type: "text",
		placeholder: "Email",
		errorMessage: "Введите корректный email!",
		label: "Email",
		pattern: '^[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,3}$',
		required: true,
	},
	{
		id: 3,
		name: "birthday",
		type: "date",
		placeholder: "Дата рождения",
		label: "Дата рождения",

	},
	{
		id: 4,
		name: "phone",
		type: "text",
		placeholder: "+7-XX-XXX-XX",
		errorMessage:
			"Номер телефона должен начинаться с +7 и содержать от 10 до 14 цифр",
		label: "Номер телефона",
		pattern: `^((\\+7)[\\- ]?)?\\(?\\d{4,6}\\)?[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}[\\- ]?\\d{1}(([\\- ]?\\d{1})?[\\- ]?\\d{1})?`,
		required: true,
	},
	{
		id: 5,
		name: "message",
		type: "textarea",
		placeholder: "Введите сообщение",
		errorMessage: "Сообщение должно содержать от 10 до 300 символов",
		label: "Сообщение",
		pattern: "^.{10,300}$",
		required: true,
	},
];

export default inputs