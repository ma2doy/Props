
import Profilecomponent from './profile/Profilecomponent'
import './App.css';
import photo from './elon.jpg'



const App=() =>{
  const handleAlert = (fullName)=>{
    alert(`wassup ! this is your website ${fullName}`)
  }
  return (
    <div className="App">
     <Profilecomponent
     fullName='youssef hamrouni'
     bio='something'
     profession=' full stack js developper '
     handleAlert={handleAlert}
     >
       
       </Profilecomponent>

       {photo}

    </div>
  );
}

export default App;
