import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []

    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
    .get(`http://localhost:3001/Books`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        books : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
    
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.map(item =>{
          return(
            

            // <div>
            //   <h3>Book title : {item.title} </h3>
            //   <p>description : {item.description}</p>
            //   <p>status : {item.status}</p>
            // </div>

            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH4AqAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AxEEAAAAABQRQQEVFCKigAIKgKoAIAAlAAFQAUFQVBFAQABRFQRRFUAEABQBQRFAQAFQBVQEAAFEUAAEFRUAEBRFFAFAEABRABABFAAABFEUUEUEUAABABQARQABFAQAQAAAAAUURUUAAAAAAAUAEABRKKiIAKAAAABABQEUAAAABQQAABQQoIAAAIAAACgqKgACgKCAKgAACAUAAAAAAFQAFUARAFFAAf//Z"
          alt="{item.title}"
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>status: {item.status}</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
          )
        })}

      
      </>
    )
  }
}

export default BestBooks;
