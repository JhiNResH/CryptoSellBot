require("dotenv").config();
const ccxt = require ('ccxt')

//npm install @luminati-io/socksv5
const socks = require('@luminati-io/socksv5')
const agent = new socks.HttpsAgent({
    proxyHost: '127.0.0.1',
    proxyPort: 10808,
    auths: [socks.auth.None ( )]
})

//console.log (ccxt.exchanges) // print all available exchanges
//const HttpsProxyAgent = require('https-proxy-agent')
//const proxy = 'https://127.0.0.1:10808'
//const agent = new HttpsProxyAgent (proxy)

async function main() {

    const exchange = new ccxt.okex5 ({
        apikey: '',
        secret: '',
        password: '',
        agent,
    })
    exchange.options['createMarketBuyOrderRequiresPrice'] = false
    //let balance = await exchange.fetchBalance ()

    const order = await exchange.createOrder ('ARB/USDT', 'maeket', 'buy', 1, 10)
    //let order = await exchange.createMarketBuyOrder (ARB/USDT, 10)
    console.log(order)
}


async function gateSwap() {

    const exchange = new ccxt.gateio ({
        apikey: '',
        secret: '',
        agent,
    })
    exchange.options['createMarketBuyOrderRequiresPrice'] = false
    //let balance = await exchange.fetchBalance ()

    //const order = await exchange.createOrder ('ARB/USDT', 'maeket', 'buy', 1, 10)
    let order = await exchange.createMarketBuyOrder (ARB/USDT, 10)
    console.log(order)
}


async function binanceSwap() {

    const exchange = new ccxt.binance ({
        apikey: '',
        secret: '',
        agent,
    })
    exchange.options['createMarketBuyOrderRequiresPrice'] = false
    //let balance = await exchange.fetchBalance ()

    //const order = await exchange.createOrder ('ARB/USDT', 'maeket', 'buy', 1, 10)
    let order = await exchange.createMarketBuyOrder (ARB/USDT, 10)

    console.log(order)
}


async function binanceSwapLimit() {

    const exchange = new ccxt.binance ({
        apikey: process.env.BINANCE_API_KEY,
        secret: process.env.BINANCE_SECRET_KEY,
        agent,
    })
    exchange.options['createMarketBuyOrderRequiresPrice'] = false
    //let balance = await exchange.fetchBalance ()

    //const order = await exchange.createOrder ('ARB/USDT', 'maeket', 'buy', 1, 10)
    let order = await exchange.createMarketBuyOrder ('ARB/USDT', 'limit', 'sell', 5, 3)
    //(5,3) = (amount, price) 
    console.log(order)
}

async function bitgetSwap() {

    const exchange = new ccxt.bitget ({
        apikey: '',
        secret: '',
        password: '',
        agent,
    })
    exchange.options['createMarketBuyOrderRequiresPrice'] = false
    //let balance = await exchange.fetchBalance ()

    //const order = await exchange.createOrder ('ARB/USDT', 'maeket', 'buy', 1, 10)

    let order = await exchange.createMarketBuyOrder (ETH/USDT, 20)
    console.log(order)
}

binanceSwapLimit()
