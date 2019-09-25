import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.state.filteredBooks.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks });
  };

  filterBooksByColor = bookColor => {
    return this.state.filteredBooks.filter(book => book.color === bookColor);
  };

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books = this.state.filteredBooks;

    if (bookColor) {
      books = this.filterBooksByColor(bookColor);
    }

    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={books} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.rootBooks.books
  };
};

export default connect(mapStateToProps)(BookList);
