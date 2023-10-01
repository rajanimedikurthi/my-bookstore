export interface SearchProps {
	onSearch: (term: string) => void;
	onClear:() =>void

}

export interface Book {
	id: number;
	volumeInfo: {
	  title: string;
	  authors?: string[];
	  imageLinks?: {
		thumbnail?: string;
	  };
	};
	saleInfo: {
	  retailPrice?: {
		amount: number;
		currencyCode: string;
	  };
	};
  }

  export interface BookCardProps {
	book: Book;
  }