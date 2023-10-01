import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Book } from '../bookstore-types';

import BookCard from './BookCard';
const BookStack = styled(Stack)(({ theme }) => ({
	padding: '8vh',
}));

const Content: React.FC<{ books: Book[] }> = ({ books }) => {
	return (
		<BookStack
			direction="row"
			justifyContent="center"
			spacing={8}
			flexWrap="wrap"
			useFlexGap
		>
			{books.map((book: Book) => {
				return <BookCard book={book} key={book.id} />;
			})}
		</BookStack>
	);
};
export default Content;
