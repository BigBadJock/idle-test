targetScope='subscription'

@minLength(1)
@maxLength(17)
@description('Prefix for all resources, i.e. {basename} storage')
param basename string

@description('Primary location for all resources')
param location string = 'uksouth'

@minLength(1)
param principalId string

resource rg 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name:  '${basename}rg'
  location: location
}

module resources './resources.bicep' = {
  name: '${rg.name}-resources'
  scope: rg
  params:{
    basename: toLower(basename)
    location: location
    principalId: principalId
  }
}





