```javascript
// app/page.js
import { useState, useEffect } from 'react';

async function fetchData() {
  // Simulate fetching data from a server
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { count: Math.random() * 100 };
}

export default async function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const newData = await fetchData();
      setData(newData);
    };

    getData();
    const interval = setInterval(getData, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Server Component Data:</h1>
      <p>Count: {data.count}</p>
    </div>
  );
}
```