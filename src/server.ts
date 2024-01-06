import express from 'express';
import { getPayloadClient } from './get-payload';
import { NextApp, nextHandler } from './next-utils';

const app = express();
const port = Number(process.env.PORT) || 3000;

const start = async() =>{
    const payload  = await getPayloadClient({
        initOptions:{
            express: app,
            onInit: async (cms) =>{
                cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
            }
        }
    })
    app.use((req,res)=>nextHandler(req,res))
    NextApp.prepare().then(()=>{
        payload.logger.info("Next Js Started")
    })
    app.listen(port, async() => {
        payload.logger.info(`Next Js App URL: ${process.env.NEXT_PUBLIC_APP_URL}`)
    })
}
start()