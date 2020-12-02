import axios from 'axios';

export default {
  deleteItem: (id) => axios.delete("http://localhost:3000/lists/" + id) 
}
