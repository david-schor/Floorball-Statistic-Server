require('dotenv').config()
const fs = require('fs')
const pki = require('node-forge').pki
const express = require('express')
const app = express()

let ownJwtToken = null;

const expressPort = process.env.BACKENDPORT;
const frontendPort = process.env.FRONTENDPORT;
const hostname = process.env.DOMAIN;

// configure fido2
const fido2Options = {
    protocol: 'https',
    rpId: hostname,
    rpName: process.env.ISSUERNAME,
    attestation: 'none',
    factor: process.env.FIDO2FACTOR,
    timeout: parseInt(process.env.FIDO2TIMEOUT),
    origin: frontendPort==443 ? 'https://' + hostname : 'https://' + hostname + ':' + frontendPort,
};

// get keys
let serverInstance;
const keyPath = process.env.KEYPATH;
const serverKey = fs.readFileSync(keyPath+'server_key.pem')
const serverCrt = fs.readFileSync(keyPath+'server_cert.pem')

// preprocess CA list
const caList = [serverCrt], caMap = {};
caMap['native'] = pki.createCaStore([serverCrt.toString()])
const caFolder = keyPath+'ca/'
const caFiles = fs.readdirSync(caFolder)
caFiles.forEach(caFiles => {
    if(caFile.endsWith('.pem')) {
        const readCa = fs.readFileSync(caFolder+caFile)
        caMap[caFile] = pki.createCaStore([readCa.toString()])
        caList.push(readCa)
    }
});
console.log(caList.length + ' CA loaded')
//bundleCAs(caList)






app.use(express.json())


app.listen(2400, () => {console.log("Server started: 2400")})