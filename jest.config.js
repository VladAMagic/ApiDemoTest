/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
    testEnvironment: 'node',
    transform: {
        '^.+.tsx?$': ['ts-jest', {}],
    },
    setupFiles: ['./src/setEnvVars.ts'],
    setupFilesAfterEnv: ['./src/testSetupFile.ts'],
}
