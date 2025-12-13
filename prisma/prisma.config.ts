const config = {
  datasource: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  },
};

export default config;
