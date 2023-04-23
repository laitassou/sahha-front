import { useState, useEffect } from 'react';
import Button from 'components/common/Button';
import { FormGroup } from 'components/common/Form/FormGroup';
import { FormLabel } from 'components/common/Form/FormLabel';
import { Input } from 'components/common/Form/Input';
import { Form, Formik } from 'formik';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ZodError, z } from 'zod';
import AuthLayout from 'components/Layouts/AuthLayout';
import { SelectField } from 'components/common/Form/SelectField';
import AuthContext from 'context/AuthContext';
import FormError from 'components/common/Form/FormError';
import Select from "react-select";

import MAIN_URL from 'utils/constants';

type OptionType = {
	value: string;
	label: string;
};
const options: readonly OptionType[] = [
	{ value: 'Client', label: 'Mandataire' },
	{ value: 'Worker', label: 'Prestataire' },
] as const;

type Role = (typeof options)[number]['value'];

const roleEnums: [Role, ...Role[]] = [options[0].value, ...options.map((opt) => opt.value)];


const initialValues = {
	first_name: '',
	last_name: '',
	role: '',
	agence: '',
	email: '',
	password: '',
	password_confirmation: '',
	phone_number: '',
};

const Schema = z
	.object({
		email: z.string().email('E-mail est invalide'),
		first_name: z.string().min(1, 'Prenom est requis'),
		last_name: z.string().min(1, 'Nom est requis'),
		role: z.enum(roleEnums, {
			errorMap: () => ({ message: 'Role selectionné invalide' }),
		}),

		password: z.string().min(1, 'Mot de passe invalid'),
		password_confirmation: z.string().min(1, 'Confirmation est invalide'),
		phone_number: z.string().min(8, 'Numero de tel court').max(12, 'Numero de tel long'),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: 'Le mot de passe ne correspond pas',
		path: ['password_confirmation'],
	});


interface AgencesResponse {
	id: number,
	name: string;
	city: string;
	address: string;
}


const Register: FC = () => {
	const { registerUser } = useContext(AuthContext);

	let [agences, setAgencesData] = useState<AgencesResponse[]>([]);
	const [selected, setSelected] = useState(0);
	let getAgences = async () => {
		let response = await fetch(MAIN_URL + '/agences/', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		let data = await response.json();
		setAgencesData(data);
	};

	useEffect(() => {
		getAgences();
	}, []);

	if (agences === undefined) {
		return <>Still loading...</>;
	}
	return (
		<AuthLayout title="Créer un compte" paragraph="Créez votre compte complètement gratuit">
			<Formik
				validate={(values) => {
					try {
						Schema.parse(values);
					} catch (errors) {
						return (errors as ZodError).formErrors.fieldErrors;
					}
				}}
				initialValues={initialValues}
				onSubmit={async (values, actions) => {
					const { first_name, last_name, email, role, agence, password, password_confirmation, phone_number } = values;
					try {
						await registerUser(first_name, last_name, email, role, agence, password, password_confirmation, phone_number);
					} catch (err) {
						actions.setStatus((err as Error).message);
					}
				}}
			>
				{({ handleChange, handleBlur, errors, touched, values, status, isSubmitting }) => (
					<Form className="flex flex-col items-start">
						<FormError error={status} />
						<div className="flex flex-col lg:flex-row">
							<div className="flex flex-col w-full mr-6 md:w-96">
								<FormGroup className="mb-4">
									<FormLabel>Prénom</FormLabel>
									<Input
										error={touched.first_name ? errors.first_name : ''}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Votre nom"
										type="text"
										name="first_name"
										value={values.first_name}
									/>
								</FormGroup>
								<FormGroup className="mb-4">
									<FormLabel>Nom</FormLabel>
									<Input
										error={touched.last_name ? errors.last_name : ''}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Votre nom"
										type="text"
										name="last_name"
										value={values.last_name}
									/>
								</FormGroup>
								<FormGroup className="mb-4">
									<FormLabel>Email</FormLabel>
									<Input
										error={touched.email ? errors.email : ''}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Votre email"
										type="email"
										name="email"
										value={values.email}
									/>
								</FormGroup>
								<FormGroup className="mb-4">
									<FormLabel>Telephone</FormLabel>
									<Input
										error={touched.phone_number ? errors.phone_number : ''}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Numero de telephone"
										type="phone_number"
										name="phone_number"
										value={values.phone_number}
									/>
								</FormGroup>
							</div>
							<div className="flex flex-col w-full md:w-96">
								<FormGroup className="mb-4">
									<FormLabel>Role</FormLabel>
									<SelectField
										value={options.find((option) => values.role === option.value)}
										options={options}
										name="role"
										placeholder="Sélectionnez un rôle"
									/>
								</FormGroup>
								<FormGroup className="mb-4">
									<FormLabel>Agence</FormLabel>
									<select
										onChange={handleChange}
										name="agence"
										value={values.agence}
									>
										<option value="0"> -- Choisir une agence -- </option>
										{agences.map((agence) => <option value={agence.id}>{agence.name + '-' + agence.city}</option>)}
									</select>
								</FormGroup>
								<FormGroup className="mb-4">
									<FormLabel>Mot de passe</FormLabel>
									<Input
										error={touched.password ? errors.password : ''}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Votre mot de passe"
										type="password"
										name="password"
										value={values.password}
									/>
								</FormGroup>
								<FormGroup className="mb-4">
									<FormLabel>Confirmer</FormLabel>
									<Input
										error={touched.password_confirmation ? errors.password_confirmation : ''}
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder="Confirmer votre mot de passe"
										type="password"
										name="password_confirmation"
										value={values.password_confirmation}
									/>
								</FormGroup>
							</div>
						</div>
						<Button type="submit" className="mt-4 mb-6" isLoading={isSubmitting}>
							S'inscrire
						</Button>
						<p>
							Avez vous deja compte?{' '}
							<Link className="text-primary-500 hover:underline" to="/login">
								Connecter vous
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</AuthLayout >
	);
};

export { Register };
