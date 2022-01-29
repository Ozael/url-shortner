
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';


const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>URL Shrinker</h1>
      <form action="" method="post">
        <TextField fullWidth type="url" name="fullUrl" id="fullUrl" placeholder='Full URL Here' />
        <Button variant="contained" color="success" type="submit">Shrink</Button>
      </form>
    </header>
    <List component="nav" aria-label="mailbox folders">
      <ListItem button divider>
        <ListItemText primary="Full URL: " />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="URL Shrinked: " />
      </ListItem>
    </List>

  </div>
);


export default App;
