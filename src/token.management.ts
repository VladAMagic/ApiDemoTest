export class TokenManager {
    public async fetchToken() {
        let tokenValue = await this.checkIfTokenExists('tokenKey')
        if (tokenValue) {
            console.log('token!!!' + tokenValue)

            return tokenValue
        }
        tokenValue = await this.getNewTokenFromAuthEndpoint()
        return tokenValue
    }
    async checkIfTokenExists(tokenKey: string): Promise<string | boolean> {
        // Code to check if token exists in a config file AND is valid. If not, return false
        const token = process.env.ACCESS_TOKEN
        if (token && (await this.verifyTokenValidity(token))) {
            return token
        }
        return false
    }

    async verifyTokenValidity(token: string): Promise<string | boolean> {
        // Code to verify if token is valid
        return true
    }

    getNewTokenFromAuthEndpoint(): Promise<string> {
        // Code to go to auth endpoint and get a new token
        return new Promise((resolve, reject) => {
            resolve('')
        })
    }
}
