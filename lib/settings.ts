// export const JWT_SECRET = process.env["JWT_SECRET"];
export const JWT_SECRET = 'teste';

if (!JWT_SECRET) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}

export const ADMIN = {
    // email: process.env.ADMIN_EMAIL || 'admin@example.com',
    // password: process.env.ADMIN_PASSWORD || 'lovejs'
    email: 'admin@equale.com',
    password: '123456'
};
