export function CreatePost() {

  return {
    title: '',
    content: '',
    authorEmail: '',

    async handleSubmit() {
      const { $data, $dispatch } = this;
      // Make the post
      try {
        await fetch(`/api/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: $data.title,
            content: $data.content,
            authorEmail: $data.authorEmail
          })
        });
        console.log('Successfully made a new post');
      } catch (err) {
        console.error(err);
      }
      // Trigger event to replace ViewPost content
      $dispatch('get-viewpost-html');
    }
  }
}