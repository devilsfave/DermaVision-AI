/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Notifications } from "./Notifications";
import { NotificationsCountArgs } from "./NotificationsCountArgs";
import { NotificationsFindManyArgs } from "./NotificationsFindManyArgs";
import { NotificationsFindUniqueArgs } from "./NotificationsFindUniqueArgs";
import { DeleteNotificationsArgs } from "./DeleteNotificationsArgs";
import { NotificationsService } from "../notifications.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Notifications)
export class NotificationsResolverBase {
  constructor(
    protected readonly service: NotificationsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Notifications",
    action: "read",
    possession: "any",
  })
  async _notificationsItemsMeta(
    @graphql.Args() args: NotificationsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Notifications])
  @nestAccessControl.UseRoles({
    resource: "Notifications",
    action: "read",
    possession: "any",
  })
  async notificationsItems(
    @graphql.Args() args: NotificationsFindManyArgs
  ): Promise<Notifications[]> {
    return this.service.notificationsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Notifications, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Notifications",
    action: "read",
    possession: "own",
  })
  async notifications(
    @graphql.Args() args: NotificationsFindUniqueArgs
  ): Promise<Notifications | null> {
    const result = await this.service.notifications(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Notifications)
  @nestAccessControl.UseRoles({
    resource: "Notifications",
    action: "delete",
    possession: "any",
  })
  async deleteNotifications(
    @graphql.Args() args: DeleteNotificationsArgs
  ): Promise<Notifications | null> {
    try {
      return await this.service.deleteNotifications(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
