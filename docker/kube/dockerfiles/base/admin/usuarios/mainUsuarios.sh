#!/bin/bash
#set -e

check_usuario(){
    if grep -q david /etc/passwd
    then    
        echo "david se encuentra en el sistema" >> /root/logs/informe.log
        return 1
    else
        echo "david no se encuentra en el sistema" >> /root/logs/informe.log
        return 0
    fi
}

check_home(){
    if [ ! -d "/home/david" ]
    then
        echo "/home/david no existe" >> /root/logs/informe.log
        return 0 #true
    else
        echo "/home/david existe" >> /root/logs/informe.log
        return 1 #false
    fi
}
newUser(){
    check_usuario
    # `cat /et/password | grep morgado`
    if [ "$?" -eq 0 ] #no existe usuario en passwd
    then 
        check_home
        if [ "$?" -eq 0 ]
        then
            useradd -rm -d /home/david -s /bin/bash david
            echo "david:david" | chpasswd
            echo "Bienvenido david a tu empresa ..." > /home/david/bienvenida.txt
            echo "--> Usario david creado" >> /root/logs/informe.log
        else
            echo "--> Usuario david No creado, existe home" >> /root/logs/informe.log
        fi
    else
        echo "--> Usuario david No creado, existe en passwd" >> /root/logs/informe.log
    fi
}