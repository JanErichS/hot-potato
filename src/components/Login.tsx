import { FormEvent, useState } from "react"
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Container,
} from "@mui/material"

export default function Login() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const [form, setForm] = useState({ username: "", password: "" })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(form)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prevForm => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }))
  }

  //   useEffect(() => {
  //     console.log("Yippie!");
  //   }); // Alati
  //   useEffect(() => {
  //     console.log("Yippie 2!");
  //   }, []); // Üks kord.
  //   useEffect(() => {
  //     console.log("Yippie 2!");
  //   }, [username]); // Siis kui username muutub.

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Stack spacing={5}>
          <Typography
            variant="h1"
            color="initial"
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                id="outlined-basic"
                name="username"
                label="Username"
                variant="outlined"
                onChange={handleChange}
                //   onChange={(event) => setUsername(event.target.value)}
              />
              <TextField
                id="outlined-basic"
                name="password"
                label="Password"
                variant="outlined"
                onChange={handleChange}
                //   onChange={(event) => setPassword(event.target.value)}
              />{" "}
              <Button
                variant="outlined"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Container>
  )
}
