import React, { useContext } from "react";

import { AuthContext } from "App";

const Mypage: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);

  return (
    <>
      {
        isSignedIn && currentUser ? (
          <>
            <h2>作成中</h2>
          </>
        ) : (
          <>
            <h2>作成中</h2>
          </>
        )
      }
    </>
  );
};

export default Mypage;