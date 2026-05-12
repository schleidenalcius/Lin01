# Exploration de systeme de fichiers

## Ce qui se trouve dans ls /

|bin|lib|proc|sys|
|---|---|---|---|
|bin.usr-is-merged|lib64|root|tmp|
|boot|lib.usr-is-merged|run|usr|
|cdrom|lost+found|sbin|var|
|dev|media|sbin.usr-is-merged|etc|
|mnt|snap|home|opt|
|srv|Listes de dossier|Linux|Ubuntu|

## Ce que je trouve dans /etc

|adduser.conf|logrotate.d|alsa|lsb-release|alternatives|
|---|---|---|---|---|
|machine-id|anacrontab|magic|apg.conf|magic.mime|
|apm|manpath.config|apparmor|mime.types|apparmor.d|
|mke2fs.conf|apport|ModemManager|apt|modprobe.d|
|avahi|modules|bash.bashrc|modules-load.d|bash_completion|
|mtab|bindresvport.blacklist|nanorc|binfmt.d|netconfig|
|bluetooth|netplan|brlapi.key|network|brltty|
|networkd-dispatcher|brltty.conf|NetworkManager|ca-certificates|networks|
|ca-certificates.conf|newt|chatscripts|nftables.conf|adduser.conf|
|logrotate.d|alsa|lsb-release|alternatives|machine-id|
|anacrontab|magic|apg.conf|magic.mime|apm|
|manpath.config|apparmor|mime.types|apparmor.d|mke2fs.conf|
|apport|ModemManager|apt|modprobe.d|avahi|
|modules|bash.bashrc|modules-load.d|bash_completion|mtab|
|bindresvport.blacklist|nanorc|binfmt.d|netconfig|bluetooth|
|netplan|brlapi.key|network|brltty|networkd-dispatcher|
|brltty.conf|NetworkManager|ca-certificates|networks|ca-certificates.conf|
|newt|chatscripts|nftables.conf|cloud|nsswitch.conf|
|colord|openvpn|console-setup|opt|cracklib|
|os-release|credstore|PackageKit|credstore.encrypted|pam.conf|
|cron.d| pam.d|cron.daily| papersize||cron.hourly |
|passwd|cron.monthly|passwd-|crontab | pcmcia|
|cron.weekly| perl|cron.yearly| pki||cups |
|plymouth|cupshelpers | pm|dbus-1 | pnm2ppa.conf|

|dconf | polkit-1|
|---|---|
|debconf.conf  | ppp|
|debian_version  | profile|
|debuginfod   | profile.d|
|default   | protocols|
|deluser.conf  | pulse|
|depmod.d | python3|
|dhcp  |python3.12|
|dhcpcd.conf | rc0.d|
|dictionaries-common | rc1.d|
|dpkg | rc2.d|
|e2scrub.conf | rc3.d|
|emacs | rc4.d|
|environment | rc5.d|
|environment.d | rc6.d|
|ethertypes | rcS.d|
|fonts | resolv.conf|
|fprintd.conf | rmt|
|fstab  | rpc|
|fuse.conf | rsyslog.conf|
|fwupd | rsyslog.d|
|gai.conf | rygel.conf|
|gdb  | sane.d|
|gdm3  |security|
|geoclue  | selinux|
|ghostscript |  sensors3.conf|
|glvnd  |sensors.d|
|gnome  | services|
|gnome-remote-desktop   | sgml|
|gnutls   | shadow|
|groff   |shadow-|
|group   |shells|
|group-  |skel|
|grub.d | snmp|
|gshadow   |speech-dispatcher|
|gshadow-| ssh|
|gss  | ssl|
|gtk-2.0   | sssd|
|gtk-3.0  | subgid|
|hdparm.conf  |subgid-|
|host.conf  |  subuid|
|hostname  | subuid-|
|hosts   | sudo.conf|
|hosts.allow  | sudoers|
|hosts.deny | sudoers.d|
|hp  |sudo_logsrvd.conf|
|ifplugd | supercat|
|init    |sysctl.conf|
|init.d  |sysctl.d|
|initramfs-tools | sysstat|
|inputrc   |systemd|
|insserv.conf.d | terminfo|
|ipp-usb  |thermald|
|iproute2 | timezone|
|issue  | tmpfiles.d|
|issue.net | ubuntu-advantage|
|kernel | ucf.conf|
|kerneloops.conf | udev|
|krb5.conf.d | udisks2|
|ldap | ufw|
|ld.so.cache |update-manager|
|ld.so.conf | update-motd.d|
|ld.so.conf.d | update-notifier|
|legal  |  UPower|
||libao.conf | usb_modeswitch.conf|
|libaudit.conf |usb_modeswitch.d|
|libblockdev  |vconsole.conf|
|libibverbs.d  | vim|
|libnl-3 | vtrgb|
|libpaper.d  |vulkan|
|locale.alias |wgetrc|
|locale.conf | wpa_supplicant|
|locale.gen  | X11|
|localtime  |xattr.conf|
|logcheck   |xdg|
|login.defs | xml|
|logrotate.conf  |zsh_command_not_found|
|cloud | nsswitch.conf|
|colord   |openvpn|
|console-setup | opt|
|cracklib | os-release|
|credstore  | PackageKit|
|credstore.encrypted | pam.conf|
|cron.d | pam.d|
|cron.daily | papersize|
|cron.hourly | passwd|
|cron.monthly | passwd-|
|crontab | pcmcia|
|cron.weekly  | perl|
|cron.yearly  | pki|
|cups  | plymouth|
|cupshelpers | pm|
|dbus-1  | pnm2ppa.conf|
|dconf   | polkit-1|
|debconf.conf  | ppp|
|debian_version | profile|
|debuginfod | profile.d|
|default  | protocols|
|deluser.conf | pulse|
|depmod.d | python3|
|dhcp | python3.12|
|dhcpcd.conf   |rc0.d|
|dictionaries-common | rc1.d|
|dpkg  | rc2.d|
|e2scrub.conf | rc3.d|
|emacs | rc4.d|
|environment | rc5.d|
|environment.d |rc6.d|
|ethertypes | rcS.d|
|fonts | resolv.conf|
|fprintd.conf | rmt|
|fstab  | rpc|
|fuse.conf |  rsyslog.conf|
|fwupd | rsyslog.d|
|gai.conf | rygel.conf|
|gdb | sane.d|
|gdm3 | security|
|geoclue |selinux|
|ghostscript | sensors3.conf|
|glvnd   |sensors.d|
|gnome | services|
|gnome-remote-desktop| sgml|
|gnutls   | shadow|
|groff |shadow-|
|group  |shells|
|group- |skel|
|grub.d |snmp|
|gshadow |speech-dispatcher|
|gshadow- | ssh|
|gss | ssl|
|gtk-2.0  | sssd|
|gtk-3.0  | subgid|
|hdparm.conf |subgid-|
|host.conf | subuid|
|hostname  | subuid-|
|hosts |  sudo.conf|
|hosts.allow |sudoers|
|hosts.deny   | sudoers.d|
|hp    |sudo_logsrvd.conf|
|ifplugd   | supercat|
|init    | sysctl.conf|
|init.d  |  sysctl.d|
|initramfs-tools | sysstat|
|inputrc | systemd|
|insserv.conf.d|terminfo|
|ipp-usb  | thermald|
|iproute2 | timezone|
|issue  | tmpfiles.d|
|issue.net | ubuntu-advantage|
|kernel | ucf.conf|
|kerneloops.conf | udev|
|krb5.conf.d |udisks2|
|ldap | ufw|
|ld.so.cache  | update-manager|
|ld.so.conf |  update-motd.d|
|ld.so.conf.d  |update-notifier|
|legal  | UPower|
|libao.conf  | usb_modeswitch.conf|
|libaudit.conf  |  usb_modeswitch.d|
|libblockdev  | vconsole.conf|
|libibverbs.d | vim|
|libnl-3   |vtrgb|
|libpaper.d   |vulkan|
|locale.alias  | wgetrc|
|locale.conf | wpa_supplicant|
|locale.gen  | X11|
|localtime  | xattr.conf|
|logcheck  |  xdg|
|login.defs |   xml|
|logrotate.conf|   zsh_command_not_found|

## Voici ce qu'on voit avec ls  /var/log

|alternatives.log| cloud-init-output.log|dmesg.3.gz|
|---|---|---|
|journal| syslog|vboxadd-setup.log.3|
|apport.log|cups|dpkg.log|
|kern.log|sysstat|vboxpostinstall.log|
|apt|cups-browsed|faillog|
|lastlog| ubuntu-advantage-apt-hook.log|wtmp|
|auth.log|dist-upgrade|fontconfig.log|
|openvpn|unattended-upgrades|boot.log|
|dmesg|gdm3|private|
|vboxadd-install.log|bootstrap.log|dmesg.0|
|gpu-manager.log| README|vboxadd-setup.log|
|btmp|dmesg.1.gz|hp|speech-dispatcher|
|vboxadd-setup.log.1|cloud-init.log|dmesg.2.gz|
|installer|sssd|vboxadd-setup.log.2|

## En faisant la commande ls /home

Je vois un dossier a mon nom d'utilisateur

## En excutant la commande ls /usr/bin | head -20

|aa-enabled|aa-exec|aa-features-abi|aconnect|
|---|---|---|---|
|acpidbg|add-apt-repository|addpart|airscan-discover|
|alsabat|alsaloop|alsamixer|alsatplg|
|alsaucm|amidi|amixer|apg|
|apgbfm|aplay|aplaymidi|Les dossier de usr/bin|
 
