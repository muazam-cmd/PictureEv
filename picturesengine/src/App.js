import SearchBar from "./Components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log('do a search with', term);
  }
  return <div>
    <SearchBar onSubmit={handleSubmit} />
  </div>
}

export default App;