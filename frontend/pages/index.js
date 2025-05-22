import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const data = new FormData();
    data.append('theme', file);
    try {
      const res = await axios.post('http://localhost:8000/theme/upload', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(res.data.status || 'uploaded');
    } catch (err) {
      setMessage('upload failed');
    }
  };

  return (
    <div>
      <h1>CMS Theme Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={e => setFile(e.target.files[0])} />
        <button type="submit">Upload Theme</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
