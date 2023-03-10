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

type OptionType = {
	value: string;
	label: string;
};
const options: readonly OptionType[] = [
	{ value: 'Worker', label: 'Aide à domicile' },
	{ value: 'Client', label: 'Client' },
] as const;

type Role = (typeof options)[number]['value'];

const roleEnums: [Role, ...Role[]] = [options[0].value, ...options.map((opt) => opt.value)];

const initialValues = {
	first_name: '',
	last_name: '',
	role: '',
	email: '',
	password: '',
	password_confirmation: '',
};

const Schema = z
	.object({
		email: z.string().email('E-mail est invalid'),
		first_name: z.string().min(1, 'Prenom est requis'),
		last_name: z.string().min(1, 'Nom est requis'),
		role: z.enum(roleEnums, {
			errorMap: () => ({ message: 'Role selectionner invalid' }),
		}),
		password: z.string().min(1, 'Mot de passe invalid'),
		password_confirmation: z.string().min(1, 'Confirmation est invalid'),
	})
	.refine((data) => data.password === data.password_confirmation, {
		message: 'Le mot de passe ne correspond pas',
		path: ['password_confirmation'],
	});

const Register: FC = () => {
	const { registerUser } = useContext(AuthContext);

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
					const { first_name, last_name, email, role, password, password_confirmation } = values;
					try {
						await registerUser(first_name, last_name, email, role, password, password_confirmation);
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
							Se connecter
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
		</AuthLayout>
	);
};

export { Register };
