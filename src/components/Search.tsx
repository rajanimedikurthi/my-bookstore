import { styled, alpha } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { ChangeEvent, useState } from 'react';

import { SearchProps } from '../bookstore-types';

const StyledSearch = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: 'auto',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchAppBar = ({ onSearch, onClear }: SearchProps) => {
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);
		onSearch(value);
	};

	const handleClear = () => {
		setSearchTerm('');
		onClear();
	};

	return (
		<StyledSearch>
			<FormControl>
				<TextField
					size="small"
					variant="outlined"
					value={searchTerm}
					onChange={handleSearch}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								{searchTerm && (
									<ClearIcon
										style={{ cursor: 'pointer' }}
										onClick={handleClear}
									/>
								)}
							</InputAdornment>
						),
					}}
				/>
			</FormControl>
		</StyledSearch>
	);
};
export default SearchAppBar;
