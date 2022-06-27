import {useState} from "react";
import "./app.scss";
import FormInput from "./components/FormInput/FormInput";
import Message from "./components/Message/Message";
import inputs from "./inputs";

const App = () => {
	const [values, setValues] = useState({
		username: "",
		email: "",
		birthday: "",
		phone: "",
		message: "",
	});

	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState({
		show: false,
		message: ''})


	const fetchForm = async () => {
		await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'formData',
				body: values,
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setLoading(false)
				setMessage({message: 'Успешно отправлено', show: true})
				setValues({
					username: "",
					email: "",
					birthday: "",
					phone: "",
					message: "",
				})
				console.log(json)
			})
			.catch((error) => {
				setMessage({message: 'Произошла ошибка', show: true})
				console.log(error)});
	}


	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true)

		fetchForm()

	};

	const onChange = (e) => {

		setValues({
			...values,
			[e.target.name]: e.target.name === 'username' ? e.target.value.toUpperCase() : e.target.value
		});
	};

	const handleCloseMessage = () =>{
		setMessage({
			show: false,
			message: ''
		})
		setLoading(false)
	}

	return (
		<div className="app">


			<form onSubmit={handleSubmit}>
				<h1>Форма</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				<button
					disabled={loading}>Отправить
				</button>
				{message.show
					? <Message
						message={message.message}
						close={handleCloseMessage}
					/>
					: null}
			</form>
		</div>
	);
};

export default App;
