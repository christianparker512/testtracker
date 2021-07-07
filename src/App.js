
import Header from './components/Header'

function App() {
    const name = 'Lisa'
    const x = true

  return (
    <div className='container'>
      <h1>Hello from Chris</h1>
        <h2>While he's playing with React</h2>
        <h3>Hello {name}</h3>
        <h3>Hello {x ? 'Yes' : 'No'}</h3>
        <Header title='Chris' />
    </div>

  );
}

export default App;
