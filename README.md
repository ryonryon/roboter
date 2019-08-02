

1. create project directory
   
   `mkdir (project name)`


2. git initialize

    `git init`

3. add .gitignore and README.md
   
   `touch .gitignore README.md`
   
   ```
    # macOS
    ### https://raw.github.com/github/gitignore/07c730e1fccfe0f92b29e039ba149d20bfb332e7/Global/macOS.gitignore
    .DS_Store
    .AppleDouble
    .LSOverride
    Icon
    ._*
    .DocumentRevisions-V100
    .fseventsd
    .Spotlight-V100
    .TemporaryItems
    .Trashes
    .VolumeIcon.icns
    .com.apple.timemachine.donotpresent
    .AppleDB
    .AppleDesktop
    Network Trash Folder
    Temporary Items
    .apdisk

    # Linux
    ### https://raw.github.com/github/gitignore/07c730e1fccfe0f92b29e039ba149d20bfb332e7/Global/Linux.gitignore
    *~
    .fuse_hidden*
    .directory
    .Trash-*
    .nfs*

    # Windows
    ### https://raw.github.com/github/gitignore/07c730e1fccfe0f92b29e039ba149d20bfb332e7/Global/Windows.gitignore
    Thumbs.db
    ehthumbs.db
    ehthumbs_vista.db
    *.stackdump
    [Dd]esktop.ini
    $RECYCLE.BIN/
    *.cab
    *.msi
    *.msm
    *.msp
    *.lnk

    # node.js
    ### https://raw.github.com/github/gitignore/07c730e1fccfe0f92b29e039ba149d20bfb332e7/Node.gitignore
    logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    pids
    *.pid
    *.seed
    *.pid.lock
    lib-cov
    coverage
    .nyc_output
    .grunt
    bower_components
    .lock-wscript
    build/Release
    node_modules/
    jspm_packages/
    typings/
    .npm
    .eslintcache
    .node_repl_history
    *.tgz
    .yarn-integrity
    .env
    .next

   ```

4. create package.json

    `npm init -y`

5. add typescript package

    ```
    npm install typescript
    npm install -D @types/node
    ```

6. create tsconfig.json

    `npx tsc --init`

    ```
    {
    "compilerOptions": {
        "target": "ES2018",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true
    },
    "include": ["src/**/*"],
    }
    ```


### referenced
https://qiita.com/notakaos/items/3bbd2293e2ff286d9f49

### blueprint
https://drive.google.com/file/d/1pxq2fakMPCjt5udb7-TVtJdeTRTWiBCi/view