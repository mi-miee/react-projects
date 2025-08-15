import React, { useState } from 'react';

function Studentcard({ name, age, grade: start }) {
  const [grade, setgrade] = useState(start)

  const grades = ["C", "B", "A-", "A", "A+"];
  const promote = () => {
    const currentIndex = grades.indexOf(grade);
    if (currentIndex < grades.length - 1) {
      setgrade(grades[currentIndex + 1])
    }
  }
  const top = grade < "B" ? "Yes" : "Keep Improving";

  return (
    <>
      <p><b>Name: </b>{name}</p>
      <p><b>Age: </b>{age}</p>
      <p><b>Grades: </b>{grade}</p>
      <button className="btn" onClick={promote}>Promote</button>
      <p><b>Top Performer: </b>{top}</p>
    </>
  )
}

export default Studentcard;