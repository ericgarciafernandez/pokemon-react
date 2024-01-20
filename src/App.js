import Navbar from "./components/Navbar"
import Card from "./components/Card"
import { Container } from "@mui/material"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Container maxWidth="md">
      <Navbar />
      <Card />
      <Footer />
    </Container>

  )
}

export default App