<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/andresribeiro.png',
    name: 'André Ribeiro',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/andresribeiro' },
      { icon: 'x', link: 'https://x.com/andresribeiroo' }
    ]
  },
]
</script>

# About

Ciara is an open-source project distributed under the MIT License.

Feel free to contribute by [opening a Pull Request on GitHub](https://github.com/andresribeiro/ciara/pulls).

Thank you for using Ciara.

<VPTeamMembers size="small" :members />
