import { BodySection } from 'components/common/BodySection';
import Button from 'components/common/Button';
import { FormGroup } from 'components/common/Form/FormGroup';
import { FormLabel } from 'components/common/Form/FormLabel';
import { Textarea } from 'components/common/Form/Textarea';
import SectionTitle from 'components/common/SectionTitle';
import { Form, Formik } from 'formik';
import { ZodError, z } from 'zod';
import { useContext } from 'react';
import AuthContext from 'context/AuthContext';
import { Input } from 'components/common/Form/Input';
import FormError from 'components/common/Form/FormError';

const initialValues = {
	title: '',
	description: '',
	address: '',
};

const schema = z.object({
	title: z.string().min(10, "Titre doit être d'au moins 10 caractères"),
	description: z.string().min(10, "Description doit être d'au moins 10 caractères"),
	address: z.string().optional(),
});

const Annonce = () => {
	const { publishAnnonce } = useContext(AuthContext);
	return (
		<BodySection className="relative">
			<div className="container">
				<div className="flex flex-wrap justify-between">
					<Formik
						validate={(values) => {
							try {
								schema.parse(values);
							} catch (err) {
								return (err as ZodError).formErrors.fieldErrors;
							}
						}}
						initialValues={initialValues}
						onSubmit={async ({ title, description, address }, actions) => {
							try {
								await publishAnnonce(title, description, address);
								actions.resetForm();
								//actions.setStatus("annonce publiée");
							} catch (err) {
								actions.setStatus((err as Error).message);
							}
						}}
					>
						{({ handleChange, handleBlur, touched, errors, values, isSubmitting, status }) => (
							<Form className="w-full max-w-2xl">
								<FormError error={status} />
								<FormGroup className="mb-4">
									<FormLabel>Titre</FormLabel>
									<Input
										error={touched.title ? errors.title : ''}
										name="title"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.title}
										placeholder="Titre d'annonce"
									/>
								</FormGroup>
								<FormGroup>
									<FormLabel>Description</FormLabel>
									<Textarea
										error={touched.description ? errors.description : ''}
										name="description"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.description}
										placeholder="Description d'annonce"
										rows={5}
									/>
								</FormGroup>
								<FormGroup >
									<FormLabel>Addresse</FormLabel>
									<Input
										error={touched.address ? errors.address : ''}
										name="address"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.address}
										placeholder="Addresse pour le service"
									/>
								</FormGroup>
								<Button className="mt-6" type="submit" isLoading={isSubmitting}>
									Publier l'annonce
								</Button>
							</Form>
						)}
					</Formik>

				</div>
			</div>
		</BodySection>
	);
};

export { Annonce };
