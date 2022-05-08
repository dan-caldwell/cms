import axios from 'axios';

export function CreatePost() {

  return {
    title: '',
    content: '',
    authorEmail: '',

    async handleSubmit() {
      const { $data } = this;
      const res = await axios.post('/api/post', {
        title: $data.title, 
        content: $data.content,
        authorEmail: $data.authorEmail
      });
      console.log(res);
    }
  }
}