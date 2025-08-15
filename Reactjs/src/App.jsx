import { useState, useEffect } from 'react'
import Studentcard from './Component/studentcard';
import Profile from './pages/profile';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [stdcard, setstdcard] = useState(null);

  useEffect(() => {
   let a = fetch("https://jsonplaceholder.typicode.com/users")
a.then(response =>
    response.json()
)
    .then(data => {
     
       const age = Math.floor(Math.random() * 8) + 18;
        const grades = ["A+", "A", "A-", "B", "C"];
        const grade = grades[Math.floor(Math.random() * grades.length)];

        setstdcard({
           name: data[0].name,
          age: age,
          grade: grade,
          username: data[0].username,
          email: data[0].email,
          website: data[0].website,
        })
        
    })
    .catch(err => console.error(err));
  },[])
  return (
  <div className="App">
    <h1>Student Card</h1>
    {stdcard ? (
      <>
      <Studentcard 
        name={stdcard.name} 
        age={stdcard.age} 
        grade={stdcard.grade} 
        
      />
         <Profile
      username={stdcard.username} 
        email={stdcard.email} 
        website={stdcard.website}  />
        </>
    ) : (
      <p>Loading...</p>
    )}
 
  </div>
  ) 
}

export default App
