#!/bin/bash

load_entrypoint_seguridad() {
    echo "Ejecutando entrypoint seguridad..." >> /root/logs/informe_next.log
    
    if [ -f /root/admin/ubseguridad/start.sh ]; then
        bash /root/admin/ubseguridad/start.sh
        echo "Entrypoint seguridad ejecutado" >> /root/logs/informe_next.log
    else
        echo "ADVERTENCIA: No se encontró /root/admin/ubseguridad/start.sh" >> /root/logs/informe_next.log
    fi
}

load_entrypoint_nginx(){
    echo "Cargando entrypoint Nginx..." >> /root/logs/informe_next.log
    
    if [ -f /root/admin/sweb/nginx/start.sh ]; then
        bash /root/admin/sweb/nginx/start.sh
        echo "Entrypoint Nginx ejecutado" >> /root/logs/informe_next.log
    else
        echo "ADVERTENCIA: start.sh de Nginx no encontrado" >> /root/logs/informe_next.log
    fi
}

config_next(){
    echo "Configurando dependencias en nodenext" >> /root/logs/nodenext/nodenext.log
    cd /root/admin/nodenext/nextpokeapi
    npm install
    echo "Dependencias de Node instaladas" >> /root/logs/nodenext/nodenext.log
}

main(){
    mkdir -p /root/logs
    touch /root/logs/informe_next.log
    load_entrypoint_nginx
    config_next
    load_entrypoint_seguridad

}


main