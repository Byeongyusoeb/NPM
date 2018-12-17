# NPM [Node Package Management]

Going to learn how to use NPM

##### NPM init

    - Create packages.json file what manages dependency of project.

        - name : Project name.

        - version : Current NPM version. [major].[minor].[patch]

        - description : Description of project or TODO things (ex : A tool to generate file for d3 library).

        - entry point : Javascript file that will be invoked when consumers of module “require” it and includes main logic.

        - test command : Command that is run whenever you call npm test.

        - git repository : github address or local SVM address.

        - keywords : keywords.

        - author : Indivisual or team, company name etc...

        - license : Just MIT.


##### NPM install in project folder

    - Automatically install all dependencies of project, need 'package.json'


##### NPM install -prodcution

    - Install all dependencies without dev-saved packages.

##### NPM install [package name] -g

    - Install packages in global environment folder.


##### NPM rm [package name]

    - Remove the package 


##### NPM update

    - Update the all packages

##### Alias

      "scripts": 
      {
        "Alias-name": "command" [ ex) "start": "node index" ]
      }



[https://programmingsummaries.tistory.com/385]: reference