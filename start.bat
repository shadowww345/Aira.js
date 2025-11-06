

@echo off
echo.

set NodePackagesPath=C:Aira Library/Aira.js

set Path=%NodePackagesPath%\node_modules\.bin;%PATH%
set Path=%NodePackagesPath%;%PATH%

set NODE_PATH=%NodePackagesPath%\node_modules;%NODE_PATH%
set NODE_ENV=production


node Aira.js
