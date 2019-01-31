@echo off
erase scenario_builder\*.pyc
git add .
set /p message=Commit message: 
git commit -m "%message%"
git push origin master
pause