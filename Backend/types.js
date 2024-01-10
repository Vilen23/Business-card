const zod = require('zod')

const Validation = zod.object({
    name: zod.string().min(1),
    description: zod.string().min(5),
    interest: zod.string().min(5),
    facebook: zod.string().min(5),
    linkedin: zod.string().min(5)

})

module.exports = {
    Validation
}