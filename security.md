# Security

## Unattended Upgrades

Please refer to [Server Updates](/server-updates.html).

## Fail2ban

For enhanced SSH security, Ciara automatically configures Fail2ban on the SSH port. Fail2ban is an intrusion prevention framework that scans log files for malicious activity (like repeated failed login attempts) and automatically bans the offending IP addresses, protecting your server from brute-force attacks.

## Port Exposure

By default, Ciara is designed to minimize the attack surface by only exposing essential ports. Ciara drops all inbound traffic, except the ports listed on [Firewall](/firewall#inbound) section. We strongly recommend that you only expose the necessary ports for your applications.

## Cloud Deployments

When deploying Ciara on cloud platforms, we recommend setting up a private connection between your servers if the cloud provider offers such a feature.

## Disclaimer

While Ciara implements several security features and provides recommendations, it's important to understand that no system can guarantee absolute security. Ciara is a deployment tool, and while it aims to facilitate secure deployments, we are not responsible for the overall security posture of your servers or applications. Users are responsible for implementing and maintaining their own security best practices, including regular security audits, vigilant monitoring, and adherence to their organization's security policies.
