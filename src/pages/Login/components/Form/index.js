import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import LoginSchema from './schema';
// import { Container } from './styles';

export default function Form() {
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			validationSchema={LoginSchema}
			onSubmit={() => {}}
		>
			{({ handleSubmit, values, errors, touched, setFieldValue }) => (
				<>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Email*"
							onChange={(e) => setFieldValue('email', e.target.value)}
							placeholder="Email*"
							fullWidth
							name="email"
							value={values.email}
							error={errors.email && touched.email}
							helperText={touched.email && errors.email}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							label="Password*"
							placeholder="Password*"
							onChange={(e) => setFieldValue('password', e.target.value)}
							fullWidth
							name="password"
							value={values.password}
							error={errors.password && touched.password}
							helperText={touched.password && errors.password}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							onClick={handleSubmit}
							type="submit"
							variant="contained"
							color="primary"
							fullWidth
						>
							Entrar
						</Button>
					</Grid>
				</>
			)}
		</Formik>
	);
}
