import { Component } from "react";
import BookItem from "../BookItem";
class Home extends Component {
  state = {
    bookList: [],
  };

  getAllBooks = async () => {
    const url = "https://openlibrary.org/search.json?q=%3Cyour-query%3E";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log("DataFetched");

      this.setState({
        bookList: data,
      });
    } else {
      console.log("Data is not fetched");
    }
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const { bookList } = this.state;
    console.log(bookList);
    return (
      <div>
        <h1>Hello World</h1>
        <div className="booklist-container">
          {/* <ul>
            {bookList.map((eachObject) =>
              eachObject.docs.map((eachBook) => {
                <BookItem
                  key={eachBook.authour_key[0]}
                  bookTitle={eachBook.title}
                  publishedYear={eachBook.publish_year[0]}
                />;
              })
            )}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default Home;
