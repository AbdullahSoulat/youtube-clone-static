import React from "react";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import Video from "./components/Video";
import data from "./data"

export default function App() {
  const videoElements = data.map(item => {
    return <Video
            key={item.id}
            item = {item}
            />
  })
  return (
    <div className="App">
      <Header />
      <main>
        <LeftNav />
        <div className="video-grid">
          {videoElements}
        </div>
        
      </main>
    </div>
  );
}


