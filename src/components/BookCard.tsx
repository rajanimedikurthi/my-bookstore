import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { BookCardProps } from '../bookstore-types';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const BookCard: React.FC<BookCardProps> = ({ book }) => {
	return (
		<Paper sx={{ maxWidth: '500', width: '300px' }}>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<CardHeader
					title={book.volumeInfo.title}
					subheader={
						book.volumeInfo.authors
							? book.volumeInfo.authors[0]
							: ''
					}
				/>
				{book.volumeInfo.imageLinks && (
					<CardMedia
						component="img"
						height="164"
						image={`${book.volumeInfo.imageLinks.thumbnail}?w=164&h=164&fit=crop&auto=format`}
						alt="Paella dish"
					/>
				)}
				<CardActions disableSpacing sx={{ mt: 'auto', padding: 0 }}>
					<Stack sx={{ width: '100%' }}>
						{book.saleInfo && book.saleInfo.retailPrice && (
							<Typography
								variant="h6"
								component="div"
								sx={{ flexGrow: 1 }}
								align="center"
							>
								Price :
								{book.saleInfo.retailPrice.amount +
									book.saleInfo.retailPrice.currencyCode}
							</Typography>
						)}
						<Button
							size="small"
							variant="contained"
							sx={{
								width: '100%',
								margin: 0,
								borderRadius: 0,
							}}
						>
							Add to cart
						</Button>
					</Stack>
				</CardActions>
			</Card>
		</Paper>
	);
};
export default BookCard;
