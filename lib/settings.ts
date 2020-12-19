export const JWT_SECRET = process.env.JWT_SECRET;
// export const JWT_SECRET = 'teste';

if (!JWT_SECRET) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}
