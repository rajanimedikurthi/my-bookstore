import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { MouseEvent } from 'react';
const AccountMenu = () => {
	const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

	const [anchorElUser, setElementForUser] = useState<null | HTMLElement>(
		null
	);
	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setElementForUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setElementForUser(null);
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/2.jpg"
					/>
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography textAlign="center">{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};
export default AccountMenu;
