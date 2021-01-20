import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

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

const useForm = (initialValue) => {
	const [firstName, setFirstName] = useState(initialValue);

	const handleChanges = (e) => {
		setFirstName(e.target.value);
	};

	const clearForm = (e) => {
		e.preventDefault();
		setFirstName(initialValue);
	};

	return [firstName, handleChanges, clearForm];
};

export default function SignupForm() {
	const classes = useStyles();
	const [firstName, handleChanges, clearForm] = useForm("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(firstName);
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
						value={firstName}
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
