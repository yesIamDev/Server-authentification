const bcrypt = require('bcrypt')

const hashePassword = async (password) => {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    return passwordHash
}

module.exports = hashePassword