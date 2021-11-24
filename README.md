# typescript-http-azure-boilerplate

Boilerplate for an Azure function with test

## Getting started

- Install NodeJS

- Run `npm install -g azure-functions-core-tools@3 --unsafe-perm true` to install the runtime that powers Azure Functions

- Run npm install

> You can find more information about **Azure Functions setup** [here](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Cmacos%2Cts%2Cportal%2Cbash%2Ckeda).

## Running locally

- Run `npm start` to build and deploy locally your Azure function. You can access it via the endpoint `http://localhost:7071/api/hello`

- Run `npm test` to launch unit tests

## Deploy
In the **deploy** folder, you can find a basic Yaml file build your Azure functions package with Azure Pipelines. You will be able to launch a release of this package to deploy it to your Azure Function service app.
