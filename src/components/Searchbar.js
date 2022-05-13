import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputAdornment from "@mui/material/InputAdornment";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';


const Searchbar = ({ data, placeholder }) => {


	let [search, setSearch] = useState("");
	const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);

	const history = useHistory();

	const handleSubmitSearch = (e) => {
		e.preventDefault();
		history.push(`/search?query=${search}`);
		setSearch("");
	};

	return (
		<div>
			<form onSubmit={handleSubmitSearch}>
				<Autocomplete
					freeSolo
					id="free-solo-2-demo"
					open={autoCompleteOpen}
					onInputChange={(event, value, reason) => {
						setSearch(value);
						// console.log("consoled search", search);
						switch (reason) {
							case "input":
								setAutoCompleteOpen(!!value);
								break;
							case "reset":
							case "clear":
								setAutoCompleteOpen(false);
								break;
							default:
								console.log(reason);
						}
					}}
					disableClearable
					options={data.map((option) => option.LocalName)}
					sx={{ maxWidth: 500, m: "auto", boxShadow: 5 }}
					renderInput={(params) => (
						<TextField
							{...params}
							placeholder={placeholder}
							InputProps={{
								...params.InputProps,
								type: "search",
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleSubmitSearch} aria-label="search">
											<SearchRoundedIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					)}
				/>
			</form>
		</div>
	);
};

export default Searchbar;
