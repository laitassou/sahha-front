import Button from 'components/common/Button';
import { FormGroup } from 'components/common/Form/FormGroup';
import { FormLabel } from 'components/common/Form/FormLabel';
import { Input } from 'components/common/Form/Input';
import { Form, Formik } from 'formik';
import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ZodError, z } from 'zod';
import AuthLayout from 'components/Layouts/AuthLayout';
import AuthContext from 'context/AuthContext';
import FormError from 'components/common/Form/FormError';

const Schema = z.object({
	username: z.string().min(1, "Nom d'utilisateur requis"),
	password: z.string().min(1, 'Mot de passe requis'),
});
const initialValues = {
	username: '',
	password: '',
};

const Login: FC = () => {
	const { loginUser } = useContext(AuthContext);

	return (
		<AuthLayout title="Bienvenue" paragraph="Connectez vous et accedez à votre espace">
			<Formik
				validate={(values) => {
					try {
						Schema.parse(values);
					} catch (errors) {
						return (errors as ZodError).formErrors.fieldErrors;
					}
				}}
				initialValues={initialValues}
				onSubmit={async ({ username, password }, actions) => {
					try {
						await loginUser(username, password);
					} catch (err) {
						actions.setStatus((err as Error).message);
					}
				}}
			>
				{({ handleChange, handleBlur, errors, touched, status, isSubmitting }) => (
					<Form className="flex flex-col items-start">
						<FormError error={status} />
						<div className="w-full md:w-96">
							<FormGroup className="mb-4">
								<FormLabel>Nom d'utilisateur</FormLabel>
								<Input
									error={touched.username ? errors.username : ''}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder="Votre Nom d'utilisateur"
									type="text"
									name="username"
									autoFocus
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
								/>
							</FormGroup>
							<Button type="submit" className="mt-4 mb-6" isLoading={isSubmitting}>
								Se connecter
							</Button>
							<p>
								Pas encore de compte?{' '}
								<Link className="text-primary-500 hover:underline" to="/register">
									Créer un compte
								</Link>
							</p>
						</div>
					</Form>
				)}
			</Formik>
		</AuthLayout>
	);
};

export { Login };
