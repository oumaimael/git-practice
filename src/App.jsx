import Calculator from './components/Calculator'
import './index.css'

function App() {
  return (
    <div className="App">
      <h1 style={{
        marginBottom: '2rem',
        fontSize: '3rem',
        fontWeight: '800',
        background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Funky Calc
      </h1>
      <Calculator />
      <p style={{ marginTop: '2rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
        Minimalist. Funky. Simple.
      </p>
    </div>
  )
}

export default App
