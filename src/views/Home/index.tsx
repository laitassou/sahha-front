import Agences from './Agences';
import Fonctionnement from './Fonctionnement';
import Hero from './Hero';
import Histoire from './Histoire';
import Services from './Services';
import Valeurs from './Valuers';

const Home = () => {
	return (
		<>
			<Hero />
			<Services />
			<Fonctionnement />
			<Agences />
			<Valeurs />
			<Histoire />
		</>
	);
};

export default Home;
