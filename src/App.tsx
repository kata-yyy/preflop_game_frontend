import React, { useEffect, useState } from "react";

import { execTest } from "lib/api/test";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleExecTest = async () => {
    const res = await execTest();
    console.log('API URL:', process.env.REACT_APP_API_URL); // テストロジック

    if (res.status === 200) {
      setMessage(res.data.message)
    }
  };

  useEffect(() => {
    handleExecTest();
  }, []);

  return (
    <h1>{message}</h1>
  );
};

export default App;