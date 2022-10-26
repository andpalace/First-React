const App = () => {
  const Intro ='This is my first exercise with REACT'

  const TextStyle = {
    primary: 'text-primary',
    danger: 'text-danger' 
  };

  const Active = true;

  const Greetings = () => (
     <h2 className="text-success">Welcome to my site</h2>
  );
  const ByBye = () => {
   return <h2 className="text-danger">See you soon !!!</h2>
  };

  const Cars =["Lambo", "Beemer", "Merc"];

  return (
    <div className="container">
      <p className={TextStyle.primary}>{Intro}</p>

      {Active ? <Greetings/> : <ByBye/>}
    <ul>
    {
        Cars.map((Cars, index) => (
          <li key={index}>{Cars}</li>
        ))
      }
    </ul>
      
    </div>
  )
};

export default App