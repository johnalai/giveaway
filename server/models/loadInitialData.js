let giveAwayList = require('./giveAwayList.json')
let giveAwayModel = require('./giveAway')

giveAwayList.forEach(async (provider) => {
    console.log('Creating giveAway:', provider.providerName)
    let createdId = await giveAwayModel.createGiveAway(provider)
    console.log('... created with id', createdId)
})

