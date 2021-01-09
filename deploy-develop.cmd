@echo off
setlocal
@echo.
@echo.
@echo.
@echo "***********************************************************"
@echo "Checkout to Develop Branch"
@echo "***********************************************************"
@echo.
@echo.
@echo.

git checkout develop

@echo.
@echo.
@echo.
@echo "***********************************************************"
@echo "Pull the Latest changes"
@echo "***********************************************************"
@echo.
@echo.
@echo.

git pull

@echo.
@echo.
@echo.
@echo "***********************************************************"
@echo "Yarn Install and Run Build and  Deploy "
@echo "***********************************************************"
@echo.
@echo.
@echo.

call yarn install
call yarn run deploy

@echo.
@echo.
@echo.
@echo "***********************************************************"
@echo "Build Deplyed on Github"
@echo "***********************************************************"
@echo.
@echo.
@echo.
endlocal
