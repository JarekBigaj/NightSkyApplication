import { startServer } from './server'
import { config } from './config'

async function main() {
    await startServer(config.server);
};

main()