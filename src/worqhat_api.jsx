import React, { useEffect } from "react";
import Worqhat from "worqhat";

const App = () => {
  const [worqhat, setWorqhat] = useState(null);

  useEffect(() => {
    const wh = new Worqhat({
      apiKey: process.env.sk-eaa424045b164abb8c9431b28c6636a0,
      spaceId: process.env.health1,
      workspaceId: process.env.hackathon1,
    });
    setWorqhat(wh);
  }, []);

  if (!worqhat) {
    return null;
  }

  return (
    <div>
      <Worqhat worqhat={worqhat} />
    </div>
  );
};

export default App;