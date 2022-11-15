import { Header } from "./components/Header";
import { Post } from "./components/Post"; 
import { Sidebar } from "./components/Sidebar";

import styles from './app.module.css';

import './global.css'

function App() {
  return (
    <div>
      <Header />

     <div className={styles.wrapper}>
      <Sidebar />
      <main>
      <Post 
          author="Diego Fernades"
          content="lorem ipsum dolor"
        />
        <Post 
          author="Almir Jr"
          content="lorem ipsum dolor"
        />
      </main>
     </div>
    </div>
  )
}

export default App
