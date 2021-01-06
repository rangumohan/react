const ThemeContext = React.createContext('dark')

function BookPage() {
  return (
    <ThemeContext.Provider value="light">
      <BookList />
    </ThemeContext.Provider>
  )
}