// to get access to environment variables
import dotenv from "dotenv";
import path from "path";
import type {InitOptions} from "payload/config";

dotenv.config({
    // take current directory, go back one level, and to the .env file
    path: path.resolve(__dirname, "../.env"),
});

// to save resources, if cached exists, use cached version
let cached = (global as any).payload;

if(!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
        // so next time we can use the cached version
    }
}

interface Args {
    initOptions?: Partial<InitOptions>;
}
// getPayloadClient gets us access to our database, where we send emails, log users in, handle auth and manage products
export const getPayloadClient = async ({
    initOptions,
} : Args) => {}