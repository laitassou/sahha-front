import { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';

import Select from 'react-select';

function Annonces(props) {
	const [title, SetTitle] = useState('');
	const [description, setDescription] = useState('');
	const { user, logoutUser } = useContext(AuthContext);

	const { publishAnnonce } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		publishAnnonce(title, description);
	};

	const [value, setValue] = useState(props.name);

	const handleTitle = (event) => {
		SetTitle(event.target.value);
	};
	const handleDesc = (event) => {
		setDescription(event.target.value);
	};
	if (user) {
		return (
			<section>
				<form onSubmit={handleSubmit}>
					<h1>publiez votre annonce</h1>
					<hr />
					<div>
						<label htmlFor="title">Besoin</label>
						<textarea id="noter-text-area" name="textarea" value={title} onChange={handleTitle} />
					</div>
					<div>
						<label htmlFor="username">Description detailllée</label>
						<textarea id="noter-text-area" name="textarea" value={description} onChange={handleDesc} />
					</div>
					<button>Publier</button>
				</form>
			</section>
		);
	}
}

export default Annonces;
