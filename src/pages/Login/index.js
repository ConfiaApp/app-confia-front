import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import styles from './styles';

const useStyles = makeStyles(styles);
function Login() {
	const classes = useStyles();
	return (
		<Grid
			container
			alignItems="center"
			justify="center"
			className={classes.root}
		>
			<Grid item xs={4}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h3" align="center" color="primary">
							Login
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="h6" align="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec
							nibh vitae...
						</Typography>
					</Grid>
					<Form />
					<Grid item xs={12}>
						<Typography variant="subtitle2" align="center" color="primary">
							Esqueceu sua senha?
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

Login.propTypes = {};

export default Login;
