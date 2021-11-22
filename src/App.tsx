import * as React from 'react';
import MissionList from './components/MissionList';

import './App.css';

const App = () => {
  const [language, setLanguage] = React.useState("English")
  React.useEffect(() => {
    const head= document.getElementsByTagName("head")
    console.log("head", head);  
  }, [])
  return (
    <div className="App">
      <MissionList />
    </div>
  );
};

export default App;