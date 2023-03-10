import { useState, useContext, FC, ChangeEvent, FormEvent } from 'react';
import InputBox from './InputBox';
import AuthContext from '../context/AuthContext';
import { Redirect } from 'react-router-dom';

interface Props {
	name: string;
}

const Annonces: FC<Props> = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { user } = useContext(AuthContext);

	const { publishAnnonce } = useContext(AuthContext);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		publishAnnonce(title, description);
	};

	const handleTitle = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setTitle(event.target.value);
	};
	const handleDesc = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(event.target.value);
	};
	// if (!user) {
	// 	return <Redirect to="/login" />;
	// }
	return (
		<div className="full_height">
			<div className="container">
				<div className="announce_box">
					<div className="connect_box announce_box">
						<h2>Publiez votre annonce</h2>
						<div className="login_form form_box">
							<form onSubmit={handleSubmit}>
								<div className="textarea">
									<label>Besoin</label>
									<textarea
										placeholder="Text"
										id="noter-text-area"
										name="textarea"
										value={title}
										onChange={handleTitle}
									></textarea>
								</div>
								<div className="textarea">
									<label>Description detailllée</label>
									<textarea
										placeholder="Text"
										id="noter-text-area"
										name="textarea"
										value={description}
										onChange={handleDesc}
									></textarea>
								</div>
								<InputBox className="submit_btn" type="submit" value="Publier" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Annonces };
