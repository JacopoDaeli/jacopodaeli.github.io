/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Jacopo Daeli',
  author: 'Jacopo Daeli',
  headerTitle: 'Jacopo Daeli',
  description:
    'Distinguished Engineer at Palo Alto Networks. Writing about machine learning, distributed systems, and cybersecurity.',
  language: 'en-US',
  theme: 'dark',
  siteUrl: 'https://jacopodaeli.com',
  siteRepo: 'https://github.com/jacopodaeli/jacopodaeli.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/profile.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/profile.jpg`,
  email: 'hello@jacopodaeli.com',
  github: 'https://github.com/JacopoDaeli',
  linkedin: 'https://www.linkedin.com/in/jacopodaeli',
  locale: 'en-US',
  stickyNav: true,
}

module.exports = siteMetadata
