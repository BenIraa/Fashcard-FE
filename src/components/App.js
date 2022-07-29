import { Link } from 'react-router-dom';
import '../styles/App.css';
import Signup from './Auth/Signup';
import FlashcardList from './FlashcardList';

function App() {
  return (
    
    <div className="min-h-full h-screen flex  bg-teal-900" style={{flexDirection:"column"}}>
      
      <div class="flex mb-4 p-12">
          <div class="w-1/3  h-12">
          <Link
          to="/login"
          className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
        >
          Login
        </Link>
          </div>
          <div class="w-1/3  h-12"></div>
          <div class="w-1/3 h-12">

          <Link
          to="/signup"
          className="group relative flex justify-center W- py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
        >
          Sign Up
        </Link>
          </div>
      </div>
      
      <h2 className="mt-6 text-center text-5xl font-extrabold text-white"> 
      </h2> <br />
      
        
      {/* <FlashcardList id={3}/> */}
    </div>      
  );
}

export default App;
