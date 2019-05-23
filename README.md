# GraphQL-NodeJS API Module Template

The aim of this template is to give to developers the guidelines for a new module/component API in a project based on our [GraphQL-NodeJS Project Template](https://github.com/vidiemme/GraphQL-Template).

## Install in Visual Studio Code

- Install [VZ Templates](https://marketplace.visualstudio.com/items?itemName=VisualZoran.vz-file-templates) in Visual Studio Code
- Edit VS Code `settings.json` adding:
    ```
    "vzfiletemplates.userTemplatesFolders": ["~/Documents/VSTemplates"]
    ```
-  Copy the `graphql-module` folder to the path defined in `settings.json`
-  Restart VSCode

## New Module

Create a folder in `app/src/api/YOUR_MODULE_NAME`, right click on it, `New File from Template`, select `GraphQL-NodeJS`, name your Module and click on `OK`.

A README isn't really a README without a GIF, so here it is:

![](./new-file.gif)

## How it works
Each module is composed of multiple components, each component follows the single responsability principle, can be mocked or replaced at runtime.

## Scheme

![](./scheme.png)

### Module name: Actor
| FILE NAME | WHAT IT DOES |
| ------ | ------ |
| ActorConnector.js | Retrieves data from an external service, useful for External-API encapsulation |
| ActorDataProvider.js | Consumes data from the Connector and prepares data for GraphQL |
| ActorDataHandler.js | Handles data, save on a DB, create logs and any additional task |
| Actor.js | Consumes data from the DataHandler and exposes all the resolvers for GraphQL |
| Actor.graphql | Defines all the queries and mutations for GraphQL |
| MockActorConnector.js | Replaces the ActorConnector, defines mocked data simulating data response from an external service/API |
| MockActorDataHandler.js | Replaces the ActorDataHandler, executes any additional task on the received data |

# License

Copyright (c) 2019-2022 Vidiemme SRL https://vidiemme.it 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.