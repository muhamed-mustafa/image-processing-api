import express from 'express';
import { imageRoute } from './routes/image.route';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', imageRoute);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server Listening On Port ${PORT}`));

export default app;
