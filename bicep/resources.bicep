param basename string
param location string
param principalId string


resource storage 'Microsoft.Storage/storageAccounts@2021-06-01' = {
  name: '${basename}storage'
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'Storage'
}


resource storageaccount 'Microsoft.Storage/storageAccounts@2021-06-01' = {
  name: '${basename}storage2'
  location: resourceGroup().location
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
}
