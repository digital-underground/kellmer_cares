

Public URL

    ec2-35-161-112-19.us-west-2.compute.amazonaws.com

SSH into container

    ssh -i "kellmer_cares.pem" ec2-user@ec2-35-161-112-19.us-west-2.compute.amazonaws.com

Update Yum

    sudo yum update

Install sttpd deamon

    sudo yum install httpd -y

Start deamon

    sudo service httpd start

Config httpd to run on reboot

    sudo chkconfig httpd on

Navigate to root

    cd /var/www/html/