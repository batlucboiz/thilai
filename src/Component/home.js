import React, { useState, useEffect }  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Menu from "./menu";
import axios from "axios";

export default function Home() {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        axios.get("./book.json")
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);
    return (
 <div>
            <Menu />
    <div className="container-fluid">
                <h2>A list of books</h2>
            </div>
            <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {books.map(books => (
                   
                    <div className="col" key={books.id}>
                        <div className="card">
                                <h4>title: {books.title}</h4>
                            <div className="card-body">
                                <h5>author: {books.author}</h5>
                                
                            </div>
                        </div>
                    </div>
              
                   
                                                
                       
                ))}
              
     </div>
     <div>
     <h3>Add book</h3>
     <form>
     <div class="mb-3">
  <label for="title" class="form-label">Title</label>
  <input type="text" class="form-control" id="title" />
</div>
<div class="mb-3">
  <label for="author" class="form-label">Author</label>
  <input type="text" class="form-control" id="author" />
</div>
 <div class="col-12">
    <button type="submit" class="btn btn-primary">Add book</button>
  </div>
</form>
     </div>
 </div>
 </div>
    );
}
