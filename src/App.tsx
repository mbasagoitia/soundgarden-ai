function App() {

  const playAudio = () => {
    console.log('Playing audio...')
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Vite + React</h1>
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={playAudio}
        >
          Play Chord
        </button>
      </section>
    </>
  )
}

export default App