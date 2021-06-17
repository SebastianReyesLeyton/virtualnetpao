# !/bin/bash

ARGS=$@
NUM_ARGS=0

countArguments () {
    local args=$@

    for i in $args
    do
        let NUM_ARGS=$NUM_ARGS+1
    done
}

install () {
    echo -e "\e[36mPreparando el sistema\e[0m"
    # sudo apt update

    echo -e "\e[92mInstalling NodeJS \e[0m"
    # sudo apt install nodejs
    nodejs -v

    echo -e "\e[32mInstalling npm \e[0m"
    # sudo apt install npm
}

dependencies () {
    sudo npm install -S express ejs
    sudo npm install -S path multer morgan nodemon
}

develop () {
    npm run dev
}

deploy () {
    npm start
}

main () {
        
    for arg in $@
    do
        if [[ $arg == -i ]];
        then
            install
        elif [[ $arg == -d ]];
        then
            dependencies
        elif [[ $arg == dev ]];
        then
            develop
        elif [[ $arg == run ]];
        then
            deploy
        else
            echo -e "\e[41mEl comando: $arg no existe. \e[0m"
            break
        fi
    done    
}

countArguments $ARGS
main $ARGS