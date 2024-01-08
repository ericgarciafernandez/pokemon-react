import Navbar from "./components/Navbar"
import Cartas from "./components/Cartas"
import { Container } from "@mui/material"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Container maxWidth="md">
      <Navbar />
      <Cartas />
      <Footer />
    </Container>

  )
}

export default App