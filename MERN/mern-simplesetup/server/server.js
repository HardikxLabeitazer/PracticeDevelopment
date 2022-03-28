import express from 'express';
import devBundle from './devBundle'  //development mode
const app = express();
devBundle.compile(app);

