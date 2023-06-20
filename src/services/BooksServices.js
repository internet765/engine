import api from "../http";
import { API_URL } from "../http";

export default class BooksServices {
  static getBooks() {
    return api.get("/books");
  }
  static getBook(id) {
    return api.get(`/books/${id}`);
  }
  static uploadBookImage(image) {
    const token = JSON.parse(localStorage.getItem("etf"));
    const accessToken = token?.accessToken;
    return fetch(`${API_URL}/images/upload?type=book`, {
      method: "POST",
      body: image,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .catch((error) => error);
  }
  static createBook(name, user_id, image) {
    return api.post("/books", {
      name: name,
      image: image,
      editors: [
        {
          id: user_id,
        },
      ],
    });
  }
  static updateBook(id, date) {
    return api.put(`/books/${id}`, date);
  }
  static deleteBook(id) {
    return api.delete(`/books/${id}`);
  }
}
