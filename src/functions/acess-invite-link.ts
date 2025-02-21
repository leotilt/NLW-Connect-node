import { db } from "../drizzle/client";
import { subscriptions } from "../drizzle/schema/subscriptions";
import { redis } from "../redis/client";

interface AcessInviteLinkProps {
  subscriberId: string;
}

export async function acessInviteLink({
  subscriberId,
}: AcessInviteLinkProps) {
  await redis.hincrby(subscriberId, "access_count", 1);
}
