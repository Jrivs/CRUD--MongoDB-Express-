import app from './server'
import './database'
import { PORT } from './config';

app.listen(PORT || 3000, () => {
  console.log(`Server on port: ${PORT}`);
});