import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";
import useForm from "../hooks/useForm";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	dense: {
		marginTop: theme.spacing(2),
	},
	menu: {
		width: 200,
	},
}));

const initialValues = {
	firstName: "",
	email: "",
};

export default function SignupForm() {
	const classes = useStyles();
	const [values, handleChanges, clearForm] = useForm(initialValues);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`${values.firstName} ${values.email}`);
	};

	return (
		<div p={2} className="form">
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>Add New Client</legend>
					<TextField
						id="outlined-name"
						label="First Name"
						className={classes.textField}
						name="firstName"
						value={values.firstName}
						onChange={handleChanges}
						margin="normal"
						variant="outlined"
					/>
					<TextField
						id="outlined-name"
						label="Email"
						className={classes.textField}
						name="email"
						value={values.email}
						onChange={handleChanges}
						margin="normal"
						variant="outlined"
					/>
					<div className="flexer">
						<Button color="red" onClick={clearForm}>
							Clear
						</Button>
						<Button color="blue" type="submit">
							Submit
						</Button>
					</div>
				</fieldset>
			</form>
		</div>
	);
}
