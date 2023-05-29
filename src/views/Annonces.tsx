import { useState, useContext, FormEvent, ChangeEvent } from 'react';
import AuthContext from '../context/AuthContext';

function Annonces() {
	const [title, SetTitle] = useState('');
	const [description, setDescription] = useState('');
	const { user } = useContext(AuthContext);
	const [address, setAddress] = useState('');

	const { publishAnnonce } = useContext(AuthContext);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		publishAnnonce(title, description, address);
	};

	const handleTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
		SetTitle(event.target.value);
	};
	const handleDesc = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(event.target.value);
	};
	if (!user) {
		return null;
	}
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

export default Annonces;
