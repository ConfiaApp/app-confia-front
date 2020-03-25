import * as Yup from 'yup';

export default Yup.object().shape({
	email: Yup.string().email('Email inválido').required('Campo obrigatório'),
	password: Yup.string().required('Campo obrigatório'),
});
