import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { env } from "../env";

export const acessInviteLinkRoute: FastifyPluginAsyncZod = async (
  app
) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Acess invite link redirects user",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string(),
        }),
        response: {
          201: z.object({
            subscriberId: z.string(),
          }),
        },
      },
    },

    async (req, res) => {
      const { subscriberId } = req.params;

      console.log(subscriberId);

      const redirectUrl = new URL(env.WEB_URL);

      redirectUrl.searchParams.set("referrer", subscriberId);

      return res.redirect(redirectUrl.toString(), 302);
    }
  );
};
