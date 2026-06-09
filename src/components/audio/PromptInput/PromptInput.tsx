export function PromptInput() {

    const handleGenerate = () => {
        console.log('Generating audio...');
    };

  return (
    <>
      <input placeholder="Enter a scene, mood, or idea..." />
      <button onClick={handleGenerate}>Generate</button>
    </>
  );
}