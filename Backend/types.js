const zod = require('zod')

const Validation = zod.object({
    name: zod.string(),
    description: zod.string(),
    interest: zod.string(),
    facebook: zod.string(),
    linkedin: zod.string()

})

module.exports = {
    Validation
}