@echo off
@set /p id=Enter Title: 
@set temp=%DATE:.=%
@set title=%id: =_%
@set dirname=%temp:~4,4%-%temp:~2,2%-%temp:~0,2%_%title%
hugo new photo\%dirname%

