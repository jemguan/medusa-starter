import { loadEnv, defineConfig, Modules } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    workerMode: process.env.MEDUSA_WORKER_MODE as "shared" | "worker" | "server",
    redisUrl: process.env.REDIS_PUBLIC_URL,
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    backendUrl: process.env.MEDUSA_BACKEND_URL,
  },
  modules: [
    {
      resolve: "@medusajs/cache-redis",
      options: {
        redisUrl: process.env.REDIS_PUBLIC_URL,
      },
      key: "cache",
    },
    {
      resolve: "@medusajs/event-bus-redis",
      options: {
        redisUrl: process.env.REDIS_PUBLIC_URL,
      },
      key: "events",
    },
    {
      resolve: "@medusajs/workflow-engine-redis",
      options: {
        redis: {
          url: process.env.REDIS_PUBLIC_URL,
        },
      },
      key: "workflows",
    },
    {
      resolve: "@medusajs/medusa/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/file-s3",
            id: "s3",
            options: {
              file_url: process.env.SPACE_URL,
              bucket: process.env.SPACE_BUCKET,
              endpoint: `https://${process.env.SPACE_REGION}.digitaloceanspaces.com`,
              access_key_id: process.env.SPACE_ACCESS_KEY_ID,
              secret_access_key: process.env.SPACE_SECRET_ACCESS_KEY,
              region: process.env.SPACE_REGION,
              prefix: process.env.SPACE_PATH,
              additional_client_config: {
                forcePathStyle: true
              }
            }
          }
        ]
      },
      key: "file"
    }
  ],
})
