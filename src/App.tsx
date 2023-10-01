import './bookstore.css';
import Header from './components/header';
import Content from './components/Content';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import { Book } from './bookstore-types';
function App() {
	const [books, setBooks] = useState<Book[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const handleSearch = (searchTerm: string) => {
		console.log('in header' + searchTerm);

		fetchBooks(searchTerm);
	};
	const handleClear = () => {
		fetchBooks();
	};
	const fetchBooks = async (searchterm: string = ''): Promise<any> => {
		console.log('here' + searchterm);
		const baseURL =
			"https://www.googleapis.com/books/v1/volumes?q='" +
			searchterm +
			"'&maxResults=20&key=AIzaSyA6ylVg7N4dHb5e3-heLK2bT7jJwfDANV4";
		setIsLoading(true);
		try {
			const response = await axios.get(baseURL);
			const transformedBooks = transformResponse(response.data.items);
			setBooks(transformedBooks);
		} catch (error) {
			console.error('Error fetching data:', error);
			setBooks([]); // Set books to an empty array in case of an error
		} finally {
			setIsLoading(false);
		}
	};
	useEffect(() => {
		// Fetch data on component load
		fetchBooks();
	}, []);
	const transformResponse = (items: any) => {
		const bTempBooks: Book[] = items.map((item: Book) => {
			const { id, volumeInfo, saleInfo } = item;
			const { title, authors, imageLinks } = volumeInfo;
			const amount = saleInfo?.retailPrice?.amount;
			const currencyCode = saleInfo?.retailPrice?.currencyCode;

			const book: Book = {
				id,
				volumeInfo: {
					title: title || 'No Title',
					authors: authors || ['Unknown Author'],
					imageLinks: {
						thumbnail: imageLinks?.thumbnail || 'No Thumbnail',
					},
				},
				saleInfo: {
					// Only add retailPrice if it exists
					...(amount && currencyCode
						? { retailPrice: { amount, currencyCode } }
						: {}),
				},
			};

			return book;
		});
		return bTempBooks;
	};
	return (
		<div className="App">
			<Header onSearch={handleSearch} onClear={handleClear} />
			<main>{isLoading ? <Loading /> : <Content books={books} />} </main>
		</div>
	);
}

export default App;
