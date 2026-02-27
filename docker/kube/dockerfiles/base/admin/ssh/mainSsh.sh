set -e

make_ssh(){
    sed -i 's/#Port 22/Port '$PORT_SSH'/' /etc/ssh/sshd_config
    sed -i 's/#PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
    #service ssh restart
    mkdir -p /home/${USUARIO}/.ssh
   # cp /root/common/id_ed25519.pub /home/${USUARIO}/.ssh/
    cat /root/admin/base/common/id_rsa.pub >> /home/${USUARIO}/.ssh/authorized_keys
    exec /usr/sbin/sshd -D & #dejar ssh en background
    
}

#etc/init.d/ssh start &

make_sudo() {
    if [ -f /etc/sudoers ]; then
    echo "$USUARIO ALL=(ALL) NOPASSWD: ALL" > "/etc/sudoers.d/$USUARIO"
    chmod 0440 "/etc/sudoers.d/$USUARIO"
    fi

}