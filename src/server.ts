import express from 'express';
import { getPayloadClient } from './get-payload';

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = async() =>{
    const payload  = await getPayloadClient({
        initOptions:{
            express: app,
            onInit: async (cms) =>{
                cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
            }
        }
    })
}
start()