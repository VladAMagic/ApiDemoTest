/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: './src/testEnvironment.ts',
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
    setupFiles: ['./src/setEnvVars.ts'],
    setupFilesAfterEnv: ['./src/testSetupFile.ts'],
}
