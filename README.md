#  <span style = "color: violet;">Удобный справочник по git для чайника</span>👽  
##  <span style = "color: aquamarine;">*Что такое git?*</span>😑  
Если говорить простыми словами - то это софт который помогает разработчикам обновлять код просто, быстро и без лишних замарочек. Не нужно ничего копировать и пересылать своим коллегам, достаточно просто отправить и принять данные с [github](https://github.com/) репозитория (*ну или его аналогов*).  

## <span style = "color: aquamarine;">*Устанавливаем git*</span>⬇️  
Скачиваем [git](https://git-scm.com/) (*в моём случае для windows*) и заходим в программу. Можно открывать через терминал, но лично я сразу открываю программу *Git Bash* - именно так она называется после установки.  

##  <span style = "color: aquamarine;">*Начало работы*</span>😃
Первое что нужно сделать это перейти в папку, в которой вы собираетесь работать и провести инициализацию git:
```Bash
cd ваша_папка
git init
```
После этого вы можете заметить в рабочей папке появление новой - <span style = "color: orange;">.git</span>  

##  <span style = "color: aquamarine;">*Настраиваем git и привязываем к нашему github*</span>😵
Далее нужно указать имя пользователя и почту (*чтобы было понятно кто внёс изменения*):
```Bash
git config user.name ваше_имя
git config user.email ваша_почта
```
Следущющая команда генерирует shh-ключ для доступа к репозиторию [github](https://github.com/) и запускает ssh-клиент:
```Bash
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
```
Добавляем shh-ключ к агенту а после выводим сам ключ:
```Bash
ssh-add ~/.ssh/id_ed25519
cat ~/.ssh/id_ed25519.pub
```
Копируем вывод последней команды (кроме почты), заходим [сюда](https://github.com/settings/keys) и вставляем ключ

##  <span style = "color: aquamarine;">*И что дальше?*</span>😴
А дальше - всё просто. Хотим посмотреть какие файлы или папки отслеживает git делаем так:
```Bash
git status
```
Если хотим добавить в отслеживаемые/обновить:
```Bash
git add файл_или_папка
```
Ну и вишенка🍒 на торте🎂 - сам коммит который мы создаем (*мы к этому долго шли!*):
```Bash
git commit
```
Либо так если описание коммита короткое:
```Bash
git commit -m текст
```
Для выбора редактора кода (*у меня например vim стоит*):
```Bash
git config --global core.editor имя_редактора
```
И после всех операций мы просто отправляем изменения на наш github (*первую команду выполняем один раз, а вторую после каждого нового коммита, также есть ссылка http и shh - если используешь ключ как я, то вставляй ссылку shh*):
```Bash
git remote add любое_имя_какое_пожелаешь ссылка_на_профиль
git push -u имя_которое_пожелал master
```
По умолчанию название ветки (*пока неважно что это и для чего* *~~потому что я немного глупенький~~*	😃) просто master. Но можно и переименовать:
```Bash
git branch -M новое_имечко
```  

##  <span style = "color: aquamarine;">*Заключение*</span>😎
Ну вот как-то так😊. Если возникнут проблемы (*например ssh-ключ не получается создать*) - то смело ~~можешь застрелиться от безысходности~~ проси помощи у нейронки, например я [этой](https://chadgpt.ru/) пользуюсь. 