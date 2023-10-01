import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
const Loading = () => {
	return (
		<Box sx={{ '& > button': { m: 1 } }}>
			<LoadingButton size="small" loading={true} variant="outlined" />
		</Box>
	);
};
export default Loading;
