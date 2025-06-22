---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: Ciara
  tagline: Deploy any application in N servers in 4 minutes from your terminal
  actions:
    - theme: brand
      text: Quickstart
      link: /quickstart
    - theme: alt
      text: GitHub
      link: https://github.com/andresribeiro/ciara

features:
  - title: No DevOps Knowledge Required
    details: Focus on your code. Ciara focus on your deployment.
  - title: VM OR Bare Metal
    details: Deploy on any server, cloud or on-premises.
  - title: Integrated Security
    details: Define your firewall configs in your Ciara configuration. We also set Fail2ban for you.
  - title: Automatices OS updates
    details: Leverage Flatcar Container Linux for automatic OS updates.
  - title: Zero-Config OS Ready
    details: No need for prior configuration required.
  - title: Zero-Downtime Deployments
    details: Deploy updates without service interruption.
  - title: Automatic HTTPS support
    details: Don't worry about certificates renewal.
---

## Why not Coolify, Kamal or Dokku?

These are excellent tools, however I wanted something even simpler and more opinionated. While deploying with these tools, I need to configure automatic server updates, firewall rules, Fail2ban...

**Ciara handles all of these**.
