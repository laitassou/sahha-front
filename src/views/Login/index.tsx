import Button from 'components/common/Button';
import { FormGroup } from 'components/common/Form/FormGroup';
import { FormLabel } from 'components/common/Form/FormLabel';
import { Input } from 'components/common/Form/Input';
import { Form, Formik } from 'formik';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ZodError, z } from 'zod';
import AuthLayout from 'components/Layouts/AuthLayout';

const Schema = z.object({
	email: z.string().email('E-mail est invalid'),
	password: z.string().min(1, 'Mot de passe invalid'),
});
const initialValues = {
	email: '',
	password: '',
};

const Login: FC = () => {
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
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({ handleChange, handleBlur, errors, touched }) => (
					<Form className="flex flex-col items-start">
						<FormGroup className="mb-4">
							<FormLabel>Email</FormLabel>
							<Input
								error={touched.email ? errors.email : ''}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="Votre email"
								type="email"
								name="email"
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
						<Button type="submit" className="mt-4 mb-6">
							Se connecter
						</Button>
						<p>
							Pas encore de compte?{' '}
							<Link className="text-primary-500 hover:underline" to="/register">
								Créer un compte
							</Link>
						</p>
					</Form>
				)}
			</Formik>
		</AuthLayout>
	);
};

export { Login };
