import logo from '../logo.svg';
import AccountMenu from './AccountMenu';
import ShoppingCart from './ShoppingCart';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import SearchAppBar from './Search';
import { SearchProps } from '../bookstore-types';

export default function Header({ onSearch, onClear }: SearchProps) {
	const pages = ['Products', 'About us', 'Contact'];
	const handleSearch = (searchTerm: string) => {
		console.log('in header search' + searchTerm);
		onSearch(searchTerm);
	};
	const handleClear = () => {
		console.log('in header clear');
		onClear();
	};
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<SearchAppBar
						onSearch={handleSearch}
						onClear={handleClear}
					/>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page) => (
							<Button
								key={page}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>
					<ShoppingCart />
					<AccountMenu />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
